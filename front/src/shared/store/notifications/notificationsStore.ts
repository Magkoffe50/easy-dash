import { create } from 'zustand';
import { NotificationsStore } from './types';

export const notificaitonsStore = create<NotificationsStore>((set, get) => ({
  // Initial state
  error: null,
  notifications: [],

  // Actions
  setError: (error: string | null) => {
    set({ error });
  },

  addNotification: (notification) => {
    const id = Date.now().toString();
    const newNotification = { ...notification, id };

    set((state) => ({
      notifications: [...state.notifications, newNotification],
    }));

    if (notification.duration !== undefined) {
      setTimeout(() => {
        get().removeNotification(id);
      }, notification.duration);
    }
  },

  removeNotification: (id: string) => {
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    }));
  },

  clearNotifications: () => {
    set({ notifications: [] });
  },
}));
