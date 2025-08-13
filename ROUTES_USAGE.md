# Routes Configuration Usage Guide

This guide explains how to use the centralized routes configuration system that avoids hydration errors in Next.js SSR applications.

## Overview

The routes system is designed to work safely in both server and client components without causing hydration mismatches. It provides:

- Centralized route configuration in `src/shared/config/routes.ts`
- Server-safe route utilities
- Client-safe hooks for React components
- Automatic route-to-component mapping

## Route Configuration

All routes are defined in `src/shared/config/routes.ts`:

```typescript
export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false,
  },
  DASHBOARD: {
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Your dashboard overview',
    requiresAuth: true,
  },
  // ... more routes
};
```

## Usage in Client Components

### Using the Navigation Hook

For client components that need route information:

```typescript
'use client';

import { useNavigationRoutes } from '@/shared/lib/useRoutes';

export const MyClientComponent = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigationItems = useNavigationRoutes(isAuthenticated);
  
  return (
    <nav>
      {navigationItems.map((route) => (
        <a key={route.path} href={route.path}>
          {route.title}
        </a>
      ))}
    </nav>
  );
};
```

### Using the General Routes Hook

For more general route access:

```typescript
'use client';

import { useRoutes } from '@/shared/lib/useRoutes';

export const MyComponent = () => {
  const routes = useRoutes();
  
  // Access all routes
  const allRoutes = routes.all;
  
  // Access public routes
  const publicRoutes = routes.public;
  
  // Access protected routes
  const protectedRoutes = routes.protected;
  
  // Find route by path
  const homeRoute = routes.byPath('/');
};
```

## Usage in Server Components

For server components, use the server utilities:

```typescript
import { getServerNavigationRoutes } from '@/shared/lib/serverRoutes';

export const MyServerComponent = async ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigationItems = getServerNavigationRoutes(isAuthenticated);
  
  return (
    <nav>
      {navigationItems.map((route) => (
        <a key={route.path} href={route.path}>
          {route.title}
        </a>
      ))}
    </nav>
  );
};
```

## Route-to-Component Mapping

The main page component (`src/app/[[...slug]]/page.tsx`) automatically maps routes to components using the centralized configuration:

```typescript
const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  [ROUTES.HOME.path]: HomePage,
  [ROUTES.LOGIN.path]: LoginPage,
  [ROUTES.DASHBOARD.path]: DashboardPage,
  // ... more mappings
};
```

## Benefits

1. **No Hydration Errors**: Routes are accessed through hooks and server utilities that don't cause hydration mismatches
2. **Centralized Configuration**: All routes are defined in one place
3. **Type Safety**: Full TypeScript support with proper typing
4. **SSR Compatible**: Works seamlessly with Next.js server-side rendering
5. **Easy Maintenance**: Adding new routes only requires updating the central configuration

## Adding New Routes

To add a new route:

1. Add the route to `ROUTES` in `src/shared/config/routes.ts`
2. Add the component mapping in `src/app/[[...slug]]/page.tsx`
3. Import and add the page component

Example:

```typescript
// In routes.ts
NEW_PAGE: {
  path: '/new-page',
  title: 'New Page',
  description: 'A new page',
  requiresAuth: false,
},

// In page.tsx
[ROUTES.NEW_PAGE.path]: NewPage,
```

## Best Practices

1. Always use the hooks (`useRoutes`, `useNavigationRoutes`) in client components
2. Use server utilities (`getServerRoutes`, `getServerNavigationRoutes`) in server components
3. Never directly import route functions in client components
4. Keep route configuration centralized in `routes.ts`
5. Use the `requiresAuth` property to determine route visibility
