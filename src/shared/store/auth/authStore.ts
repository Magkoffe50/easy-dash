import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { AuthStore } from './types';

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      // Initial state
      isAuthenticated: false,
      token: null,
      isLoading: false,
      error: null,

      // Actions
      login: (token: string) => {
        set({ isAuthenticated: true, token, error: null });
      },

      logout: () => {
        set({ isAuthenticated: false, token: null, error: null });
      },

      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({ 
        isAuthenticated: state.isAuthenticated,
        token: state.token 
      }), // Only persist auth state
    }
  )
);
