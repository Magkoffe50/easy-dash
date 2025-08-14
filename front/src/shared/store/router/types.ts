export interface RouterState {
  isInitialized: boolean;
  currentPath: string | null;
}

export interface RouterActions {
  setInitialized: (initialized: boolean) => void;
  setCurrentPath: (path: string) => void;
}

export type RouterStore = RouterState & RouterActions;
