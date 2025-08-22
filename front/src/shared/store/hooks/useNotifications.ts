import { notificaitonsStore } from '@/shared/store/notifications/notificationsStore';
import { AlertColor } from '@mui/material';

const useNotifications = () => {
  const notificaitons = notificaitonsStore();

  const showNotification = (
    message: string,
    severity: AlertColor = 'info',
    duration?: number,
  ) => {
    notificaitons.addNotification({
      message,
      severity,
      duration: duration || 5000,
    });
  };

  return {
    // Initial state
    notifications: notificaitons.notifications,

    //Actions
    addNotification: notificaitons.addNotification,
    removeNotification: notificaitons.removeNotification,
    clearNotifications: notificaitons.clearNotifications,

    // Utility functions
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
