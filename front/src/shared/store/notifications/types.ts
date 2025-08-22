export interface NotificationsState {
  error: string | null;
}

export interface NotificationsActions {
  setError: (error: string | null) => void;
}

export type NotificationsStore = NotificationsState & NotificationsActions;
