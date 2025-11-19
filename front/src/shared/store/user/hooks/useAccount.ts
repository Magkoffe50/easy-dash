import useNotifications from '../../notifications/hooks/useNotifications';
import { api } from '@/shared/api';
import { useUserStore } from '../userStore';
import { User } from '@/entities';

export type AccountData = Pick<User, 'firstName' | 'lastName' | 'password'>;

const useAccount = () => {
  const { showError, showSuccess } = useNotifications();
  const user = useUserStore();

  const updateAccount = async (
    data: Pick<User, 'firstName' | 'lastName' | 'password'>,
  ) => {
    if (!data.firstName || !data.lastName || !data.password) {
      showError('Please fill in all fields');
      return;
    }

    const [, error] = await api.patch(`/users/${user.user?.id}`, data);

    if (error) {
      showError(error.message);
      return;
    }

    user.setUser({ ...user.user, ...data } as User);

    showSuccess('Account updated successfully');
  };

  return {
    accountData: user.user,
    updateAccount,
  };
};

export default useAccount;
