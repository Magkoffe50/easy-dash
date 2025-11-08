import { useAuthStore } from '../authStore';
import { useRouterStore } from '../../router';
import { useUserStore } from '../../user/userStore';

export const useAuthSelectors = () => {
  const isAppReady = useRouterStore((state) => state.isInitialized);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const isLoading = useAuthStore((state) => state.isLoading);
  const isLoginLoading = useAuthStore((state) => state.isLoginLoading);
  const authError = useAuthStore((state) => state.error);
  const userError = useUserStore((state) => state.error);
  const user = useUserStore((state) => state.user);

  return {
    isAppReady,
    isAuthenticated,
    isLoading,
    isLoginLoading,
    error: authError || userError,
    user,
  };
};
