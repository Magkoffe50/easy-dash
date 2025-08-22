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

    const mockUser = {
      id: '1',
      name: 'John Doe',
      isActive: true,
    };

    try {
      const token = localStorage.getItem('auth-token');

      if (token) {
        auth.login(token);
        user.setUser(mockUser);
      }
    } catch (error) {
      auth.setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      routerStore.setInitialized(true);
      auth.setLoading(false);
    }
  }, [auth, router, user]);

  const onLoginRequest = useCallback(
    async (credentials: { email: string; password: string }) => {
      auth.setLoginLoading(true);

      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (credentials.email && credentials.password) {
          const mockUser = {
            id: '1',
            name: 'John Doe',
            email: credentials.email,
            role: 'user' as const,
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          user.setUser(mockUser);
          localStorage.setItem('auth-token', 'dummy-token');

          auth.login('dummy-token');
          router.push('/dashboard');
        } else {
          throw new Error('Invalid credentials');
        }
      } catch (err) {
        auth.setError(err instanceof Error ? err.message : 'Login failed');
      } finally {
        routerStore.setInitialized(true);
        auth.setLoginLoading(false);
      }
    },
    [auth, router, routerStore, user],
  );

  const onRegisterRequest = useCallback(
    async (user: User) => {
      auth.setLoginLoading(true);

      if (user.email && user.password && user.firstName && user.lastName) {
        const [data, error] = await api.post('/users', user);

        if (error) {
          notifications.onSetTemporaryNotification(error.message);
        }

        console.log('Registered:', data);
      }
      auth.setLoginLoading(false);
    },
    [auth, notifications],
  );

  const onLogoutRequest = useCallback(() => {
    auth.logout();
    useUserStore.getState().clearUser();
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-data');
  }, [auth]);

  return {
    // Auth state
    isAppReady: routerStore.isInitialized,
    isAuthenticated: auth.isAuthenticated,
    token: auth.token,
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
