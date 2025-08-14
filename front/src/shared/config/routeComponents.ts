import { ROUTES } from './routes';

// Server-side route to component mapping
// This is safe to use in SSR because it doesn't import React components directly
export const ROUTE_COMPONENTS_MAP: Record<string, string> = {
  [ROUTES.HOME.path]: 'HomePage',
  [ROUTES.LOGIN.path]: 'LoginPage',
  [ROUTES.REGISTER.path]: 'RegisterPage',
  [ROUTES.DASHBOARD.path]: 'DashboardPage',
  [ROUTES.PROFILE.path]: 'ProfilePage',
  [ROUTES.SETTINGS.path]: 'SettingsPage',
};

// Server-safe route configuration
export const getRouteComponentsConfig = () => {
  return {
    routeComponentsMap: ROUTE_COMPONENTS_MAP,
    routes: ROUTES,
  };
};
