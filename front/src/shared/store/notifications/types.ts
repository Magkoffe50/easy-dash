import { AlertColor } from '@mui/material';

export interface Notification {
  id: string;
  message: string;
  severity: AlertColor;
  duration?: number;
}

export interface NotificationsState {
  error: string | null;
  notifications: Notification[];
}

export interface NotificationsActions {
  setError: (error: string | null) => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export type NotificationsStore = NotificationsState & NotificationsActions;
