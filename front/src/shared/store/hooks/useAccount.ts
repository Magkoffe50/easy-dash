import { notificaitonsStore } from '../notifications/notificationsStore';
import { api } from '@/shared/api';
import { useUserStore } from '../user/userStore';

export type AccountData = {
  firstName: string;
  lastName: string;
  password: string;
};

const useAccount = () => {
  const notificaitons = notificaitonsStore();
  const user = useUserStore();

  const updateAccount = async (data: AccountData) => {
    if (!data.firstName || !data.lastName || !data.password) {
      notificaitons.addNotification({
        message: 'Please fill in all fields',
        severity: 'error',
      });
      return;
    }

    const [_, error] = await api.patch(`/users/${user.user?.id}`, data);

    if (error) {
      notificaitons.addNotification({
        message: error.message,
        severity: 'error',
      });
      return;
    }

    notificaitons.addNotification({
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
