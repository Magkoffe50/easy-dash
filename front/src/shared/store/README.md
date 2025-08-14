# Zustand Store Setup

This project uses Zustand for state management with a Feature Sliced Design (FSD) architecture.

## Store Structure

```
src/shared/store/
├── auth/
│   ├── authStore.ts    # Authentication state (isAuthenticated, token)
│   └── types.ts        # Auth store types
├── user/
│   ├── userStore.ts    # User data state (user profile, preferences)
│   └── types.ts        # User store types
├── hooks.ts            # Custom hooks combining stores
├── index.ts            # Main exports
└── README.md           # This file
```

## Usage

### Basic Usage with useAuth Hook

```tsx
import { useAuth } from '@/shared/store';

const MyComponent = () => {
  const { isAuthenticated, user, login, logout, setUser } = useAuth();

  const handleLogin = () => {
    login('token', { id: '1', name: 'John', email: 'john@example.com' });
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      {isAuthenticated ? <p>Welcome, {user?.name}!</p> : <p>Please log in</p>}
    </div>
  );
};
```

### Individual Store Usage

```tsx
import { useAuthStore, useUserStore } from '@/shared/store';

const MyComponent = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
  const { user, setUser, updateUser } = useUserStore();

  // Update user profile
  const updateProfile = (updates) => {
    updateUser(updates);
  };
};
```

## Features

- **Persistence**: Auth and user data are automatically persisted to localStorage
- **TypeScript**: Full type safety with TypeScript
- **Performance**: Efficient re-renders with Zustand's subscription model
- **DevTools**: Compatible with Redux DevTools for debugging

## Adding New Stores

1. Create a new folder in `src/shared/store/`
2. Add `types.ts` with state and actions interfaces
3. Add `store.ts` with Zustand store implementation
4. Export from `src/shared/store/index.ts`
5. Add to custom hooks if needed

Example for a dashboard store:

```tsx
// src/shared/store/dashboard/types.ts
export interface DashboardState {
  dashboards: Dashboard[];
  currentDashboard: Dashboard | null;
}

export interface DashboardActions {
  setDashboards: (dashboards: Dashboard[]) => void;
  addDashboard: (dashboard: Dashboard) => void;
  setCurrentDashboard: (dashboard: Dashboard | null) => void;
}

export type DashboardStore = DashboardState & DashboardActions;
```

```tsx
// src/shared/store/dashboard/dashboardStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { DashboardStore } from './types';

export const useDashboardStore = create<DashboardStore>()(
  persist(
    (set) => ({
      dashboards: [],
      currentDashboard: null,

      setDashboards: (dashboards) => set({ dashboards }),
      addDashboard: (dashboard) =>
        set((state) => ({
          dashboards: [...state.dashboards, dashboard],
        })),
      setCurrentDashboard: (dashboard) => set({ currentDashboard: dashboard }),
    }),
    {
      name: 'dashboard-storage',
    },
  ),
);
```
