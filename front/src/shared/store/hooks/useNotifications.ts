import { notificaitonsStore } from '@/shared/store/notifications/notificationsStore';

const useNotifications = () => {
  const notificaitons = notificaitonsStore();

  return {
    // Initial state
    error: notificaitons.error,

    //Actions
    onSetTemporaryNotification: (message: string) => {
      notificaitons.setError(message);

      setTimeout(() => {
        notificaitons.setError(null);
      }, 5000);
    },
  };
};

export default useNotifications;
