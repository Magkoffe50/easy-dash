import { useAuthStore } from '../authStore';
import { useRouterStore } from '../../router';
import { useUserStore } from '../../user/userStore';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { api } from '@/shared/api';
import { User } from '@/entities';
import useNotifications from '../../notifications/hooks/useNotifications';
import { RegisterData } from '@/features';

export const useAuthOrchestration = () => {
  const auth = useAuthStore();
  const user = useUserStore();
  const routerStore = useRouterStore();
  const router = useRouter();
  const notifications = useNotifications();

  const onCheckAuth = useCallback(async () => {
    auth.setLoading(true);

    const [data, error, response] = await api.get('/auth/me');

    if (error || !data || response?.status !== 200) {
      auth.logout();
      routerStore.setInitialized(true);
      auth.setLoading(false);
      return;
    }

    auth.login();
    user.setUser(data as User);

    if (
      window.location.pathname === '/login' ||
      window.location.pathname === '/'
    ) {
      router.push('/dashboard');
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
    async (userData: RegisterData) => {
      auth.setLoginLoading(true);

      if (
        userData.email &&
        userData.password &&
        userData.firstName &&
        userData.lastName
      ) {
        const [data, error] = await api.post<{
          user: User;
        }>('/auth/register', userData);

        if (error) {
          notifications.showError(error.message);
        } else {
          notifications.showSuccess('User registered successfully');
          user.setUser(data!.user);
          auth.login();
          router.push('/dashboard');
        }

        auth.setLoginLoading(false);
      }
    },
    [auth, notifications, router, user],
  );

  const onLogoutRequest = useCallback(async () => {
    auth.setLoading(true);

    const [, error] = await api.post('/auth/logout');

    if (error) {
      notifications.showError(error.message);
    } else {
      auth.logout();
      user.clearUser();
      router.push('/');
    }

    auth.setLoading(false);
  }, [auth, notifications, router, user]);

  return {
    onCheckAuth,
    onLoginRequest,
    onLogoutRequest,
    onRegisterRequest,
  };
};
