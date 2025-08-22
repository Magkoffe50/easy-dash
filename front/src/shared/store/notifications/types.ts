import { AlertColor } from '@mui/material';

export interface Notification {
  id: string;
  message: string;
  severity: AlertColor;
  duration?: number;
}

export interface NotificationsState {
  notifications: Notification[];
}

export interface NotificationsActions {
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
}

export type NotificationsStore = NotificationsState & NotificationsActions;
