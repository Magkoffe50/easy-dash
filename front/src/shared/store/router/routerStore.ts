import { create } from 'zustand';
import { RouterStore } from './types';

export const useRouterStore = create<RouterStore>((set) => ({
  // Initial state
  isInitialized: false,
  currentPath: null,

  // Actions
  setInitialized: (initialized: boolean) => {
    set({ isInitialized: initialized });
  },

  setCurrentPath: (path: string) => {
    set({ currentPath: path });
  },
}));
