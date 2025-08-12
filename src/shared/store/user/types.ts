import { User } from '@/entities/user/model/types';

export interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface UserActions {
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => void;
  clearUser: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export type UserStore = UserState & UserActions;
