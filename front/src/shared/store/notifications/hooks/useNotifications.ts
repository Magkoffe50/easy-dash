import { useNotificationsStore } from '../notificationsStore';
import { AlertColor } from '@mui/material';

const useNotifications = () => {
  const notifications = useNotificationsStore();

  const showNotification = (
    message: string,
    severity: AlertColor = 'info',
    duration?: number,
  ) => {
    notifications.addNotification({
      message,
      severity,
      duration: duration || 5000,
    });
  };

  return {
    notifications: notifications.notifications,

    addNotification: notifications.addNotification,
    removeNotification: notifications.removeNotification,
    clearNotifications: notifications.clearNotifications,

    showNotification,
    showSuccess: (message: string, duration?: number) =>
      showNotification(message, 'success', duration),
    showError: (message: string, duration?: number) =>
      showNotification(message, 'error', duration),
    showWarning: (message: string, duration?: number) =>
      showNotification(message, 'warning', duration),
    showInfo: (message: string, duration?: number) =>
      showNotification(message, 'info', duration),
  };
};

export default useNotifications;
