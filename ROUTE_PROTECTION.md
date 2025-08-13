# Route Protection with Next.js Native Router

This implementation uses Next.js native router functionality for simple and clean route protection.

## How It Works

The route protection is implemented using a single hook `useRouteGuard` that:

1. **Checks current route**: Uses `usePathname()` to get the current route
2. **Validates access**: Compares route requirements with authentication status
3. **Redirects automatically**: Uses Next.js `router.push()` for navigation

## Implementation

### Route Guard Hook

```typescript
// src/shared/lib/useRouteGuard.ts
export const useRouteGuard = (isAuthenticated: boolean) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const currentRoute = Object.values(ROUTES).find(
      (route) => route.path === pathname,
    );

    if (currentRoute) {
      // Redirect unauthenticated users from protected routes
      if (currentRoute.requiresAuth && !isAuthenticated) {
        router.push(ROUTES.HOME.path);
        return;
      }

      // Redirect authenticated users from auth pages
      if (
        isAuthenticated &&
        (pathname === ROUTES.LOGIN.path || pathname === ROUTES.REGISTER.path)
      ) {
        router.push(ROUTES.DASHBOARD.path);
        return;
      }
    }
  }, [isAuthenticated, pathname, router]);
};
```

### Usage in AppLayout

The route guard is automatically applied in the main AppLayout:

```typescript
// src/widgets/AppLayout/AppLayout.tsx
export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // Route protection - redirects based on authentication status
  useRouteGuard(isAuthenticated);

  // ... rest of component
};
```

## Route Configuration

Routes are defined with `requiresAuth` property:

```typescript
// src/shared/config/routes.ts
export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false, // Public route
  },
  DASHBOARD: {
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Your dashboard overview',
    requiresAuth: true, // Protected route
  },
  // ... more routes
};
```

## Behavior

### Unauthenticated Users

- ✅ Can access public routes (Home, Login, Register)
- ❌ Cannot access protected routes (Dashboard, Profile, Settings)
- 🔄 Automatically redirected to Home page

### Authenticated Users

- ✅ Can access all routes
- 🔄 Automatically redirected from Login/Register to Dashboard

## Benefits

1. **Simple**: Single hook handles all route protection
2. **Clean**: Uses Next.js native router
3. **Automatic**: No need to wrap each page component
4. **Centralized**: All protection logic in one place
5. **Type Safe**: Full TypeScript support

## Adding New Protected Routes

1. Add route to `ROUTES` with `requiresAuth: true`
2. That's it! Protection is automatic

```typescript
NEW_PROTECTED_ROUTE: {
  path: '/new-protected',
  title: 'New Protected Page',
  description: 'A new protected page',
  requiresAuth: true, // This makes it protected
},
```
