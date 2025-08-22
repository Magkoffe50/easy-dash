import { create } from 'zustand';
import { NotificationsStore } from './types';

export const notificaitonsStore = create<NotificationsStore>((set) => ({
  // Initial state
  error: null,

  // Actions
  setError: (error: string | null) => {
    set({ error });
  },
}));
