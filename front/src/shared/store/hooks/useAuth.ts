import { useAuthStore } from '../auth/authStore';
import { useRouterStore } from '../router';
import { useUserStore } from '../user/userStore';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/shared/api';
import { User } from '@/entities';
import useNotifications from './useNotifications';

export const useAuth = () => {
  const auth = useAuthStore();
  const user = useUserStore();
  const routerStore = useRouterStore();
  const router = useRouter();
  const notifications = useNotifications();

  const onCheckAuth = useCallback(async () => {
    auth.setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const [data] = await api.get('/auth/me');

    if (data) {
      auth.login();
      user.setUser(data as User);

      if (
        window.location.pathname === '/login' ||
        window.location.pathname === '/'
      ) {
        router.push('/dashboard');
      }
    }

    routerStore.setInitialized(true);
    auth.setLoading(false);
  }, [auth, router, routerStore, user]);

  const onLoginRequest = useCallback(
    async (credentials: { email: string; password: string }) => {
      auth.setLoginLoading(true);

      if (credentials.email && credentials.password) {
        const [data, error] = await api.post<{ user: User }>(
          '/auth/login',
          credentials,
        );

        if (error) {
          notifications.showError(error.message);
        } else if (data && 'user' in data) {
          user.setUser(data.user);
          auth.login();
          router.push('/dashboard');
        }
      }

      routerStore.setInitialized(true);
      auth.setLoginLoading(false);
    },
    [auth, notifications, router, routerStore, user],
  );

  const onRegisterRequest = useCallback(
    async (user: User) => {
      auth.setLoginLoading(true);

      if (user.email && user.password && user.firstName && user.lastName) {
        const [_, error] = await api.post('/auth/register', user);

        if (error) {
          notifications.showError(error.message);
        } else {
          notifications.showSuccess('User registered successfully');
          auth.login();
          router.push('/dashboard');
        }

        auth.setLoginLoading(false);
      }
    },
    [auth, notifications, router],
  );

  const onLogoutRequest = useCallback(async () => {
    auth.setLoading(true);

    const [_, error] = await api.post('/auth/logout');

    if (error) {
      notifications.showError(error.message);
    } else {
      auth.logout();
      useUserStore.getState().clearUser();
      localStorage.removeItem('user-data');
      router.push('/');
    }

    auth.setLoading(false);
  }, [auth, notifications, router]);

  return {
    // Auth state
    isAppReady: routerStore.isInitialized,
    isAuthenticated: auth.isAuthenticated,
    isLoading: auth.isLoading,
    isLoginLoading: auth.isLoginLoading,
    error: auth.error || user.error,

    // User state
    user: user.user,

    // Actions
    onCheckAuth,
    onLoginRequest,
    onLogoutRequest,
    onRegisterRequest,

    setUser: user.setUser,
    updateUser: user.updateUser,
    setError: (error: string | null) => {
      auth.setError(error);
      user.setError(error);
    },
  };
};
