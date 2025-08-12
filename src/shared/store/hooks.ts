import { useAuthStore } from './auth/authStore';
import { useUserStore } from './user/userStore';

export const useAuth = () => {
  const auth = useAuthStore();
  const user = useUserStore();

  return {
    // Auth state
    isAuthenticated: auth.isAuthenticated,
    token: auth.token,
    isLoading: auth.isLoading || user.isLoading,
    error: auth.error || user.error,

    // User state
    user: user.user,

    // Actions
    login: (token: string, userData?: any) => {
      auth.login(token);
      if (userData) {
        user.setUser(userData);
      }
    },

    logout: () => {
      auth.logout();
      user.clearUser();
      localStorage.removeItem('auth-token');
    },

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
