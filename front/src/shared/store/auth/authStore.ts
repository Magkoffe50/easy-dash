import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStore } from './types';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // Initial state
      isAuthenticated: false,
      isLoading: false,
      isLoginLoading: false,
      error: null,

      // Actions
      login: () => {
        set({ isAuthenticated: true, error: null });
      },

      logout: () => {
        set({ isAuthenticated: false, error: null });
      },

      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },
      setLoginLoading: (isLoginLoading: boolean) => {
        set({ isLoginLoading });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
      }), // Only persist auth state
    },
  ),
);
