import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User } from '@/entities/user/model/types';
import { UserStore } from './types';

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isLoading: false,
      error: null,

      // Actions
      setUser: (user: User | null) => {
        set({ user, error: null });
      },

      updateUser: (updates: Partial<User>) => {
        const { user } = get();
        if (user) {
          set({
            user: {
              ...user,
              ...updates,
              updatedAt: new Date().toISOString(),
            },
          });
        }
      },

      clearUser: () => {
        set({ user: null, error: null });
      },

      setLoading: (isLoading: boolean) => {
        set({ isLoading });
      },

      setError: (error: string | null) => {
        set({ error });
      },
    }),
    {
      name: 'user-storage',
      partialize: (state) => ({ user: state.user }), // Only persist user data
    },
  ),
);
