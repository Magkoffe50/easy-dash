export interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  isLoading: boolean;
  isLoginLoading: boolean;
  error: string | null;
}

export interface AuthActions {
  login: (token: string) => void;
  logout: () => void;
  setLoading: (loading: boolean) => void;
  setLoginLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

export type AuthStore = AuthState & AuthActions;
