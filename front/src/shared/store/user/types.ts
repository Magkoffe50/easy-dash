import { User } from '@/entities/user/model/types';

export interface UserState {
  user: User | null;
  error: string | null;
}

export interface UserActions {
  setUser: (user: User | null) => void;
  updateUser: (updates: Partial<User>) => void;
  clearUser: () => void;
  setError: (error: string | null) => void;
}

export type UserStore = UserState & UserActions;
