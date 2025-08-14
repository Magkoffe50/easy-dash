import { useAuthStore } from '../auth/authStore';
import { useRouterStore } from '../router';
import { useUserStore } from '../user/userStore';
import { useCallback } from 'react';

export const useAuth = () => {
  const auth = useAuthStore();
  const user = useUserStore();
  const router = useRouterStore();

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
      useAuthStore
        .getState()
        .setError(error instanceof Error ? error.message : 'Login failed');
    } finally {
      router.setInitialized(true);
      auth.setLoading(false);
    }
  }, [auth, router, user]);

  const onLoginRequest = useCallback(
    async (credentials: { email: string; password: string }) => {
      auth.setLoading(true);

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

          useUserStore.getState().setUser(mockUser);
          localStorage.setItem('auth-token', 'dummy-token');

          auth.login('dummy-token');
        } else {
          throw new Error('Invalid credentials');
        }
      } catch (err) {
        useAuthStore
          .getState()
          .setError(err instanceof Error ? err.message : 'Login failed');
      } finally {
        router.setInitialized(true);
        auth.setLoading(false);
      }
    },
    [auth, router],
  );

  const onLogoutRequest = useCallback(() => {
    auth.logout();
    useUserStore.getState().clearUser();
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-data');
  }, [auth]);

  return {
    // Auth state
    isAppReady: router.isInitialized,
    isAuthenticated: auth.isAuthenticated,
    token: auth.token,
    isLoading: auth.isLoading || user.isLoading,
    error: auth.error || user.error,

    // User state
    user: user.user,

    // Actions
    onCheckAuth,
    onLoginRequest,
    onLogoutRequest,

    setUser: user.setUser,
    updateUser: user.updateUser,
    setLoading: (loading: boolean) => {
      auth.setLoading(loading);
      user.setLoading(loading);
    },
    setError: (error: string | null) => {
      auth.setError(error);
      user.setError(error);
    },
  };
};
