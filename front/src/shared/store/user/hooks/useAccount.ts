import { useNotificationsStore } from '../../notifications/notificationsStore';
import { api } from '@/shared/api';
import { useUserStore } from '../userStore';
import { User } from '@/entities';

export type AccountData = Pick<User, 'firstName' | 'lastName' | 'password'>;

const useAccount = () => {
  const notifications = useNotificationsStore();
  const user = useUserStore();

  const updateAccount = async (
    data: Pick<User, 'firstName' | 'lastName' | 'password'>,
  ) => {
    if (!data.firstName || !data.lastName || !data.password) {
      notifications.addNotification({
        message: 'Please fill in all fields',
        severity: 'error',
      });
      return;
    }

    const [, error] = await api.patch(`/users/${user.user?.id}`, data);

    if (error) {
      notifications.addNotification({
        message: error.message,
        severity: 'error',
      });
      return;
    }

    user.setUser({ ...user.user, ...data } as User);

    notifications.addNotification({
      message: 'Account updated successfully',
      severity: 'success',
    });
  };

  return {
    accountData: user.user,
    updateAccount,
  };
};

export default useAccount;
