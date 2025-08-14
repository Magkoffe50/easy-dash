// Centralized routes configuration
export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  requiresAuth: boolean;
}

export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false,
  },
  LOGIN: {
    path: '/login',
    title: 'Login',
    description: 'Sign in to your account',
    requiresAuth: false,
  },
  REGISTER: {
    path: '/register',
    title: 'Register',
    description: 'Create a new account',
    requiresAuth: false,
  },
  DASHBOARD: {
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Your dashboard overview',
    requiresAuth: true,
  },
  PROFILE: {
    path: '/profile',
    title: 'Profile',
    description: 'Your profile settings',
    requiresAuth: true,
  },
  SETTINGS: {
    path: '/settings',
    title: 'Settings',
    description: 'Application settings',
    requiresAuth: true,
  },
} as const;

// API routes
export const API_ROUTES = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    REFRESH: '/api/auth/refresh',
  },
  USERS: {
    PROFILE: '/api/users/profile',
    SETTINGS: '/api/users/settings',
  },
  DASHBOARD: {
    STATS: '/api/dashboard/stats',
    CHARTS: '/api/dashboard/charts',
  },
} as const;

// Helper functions
export const getRouteByPath = (path: string): RouteConfig | undefined => {
  return Object.values(ROUTES).find((route) => route.path === path);
};

export const getPublicRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES).filter((route) => !route.requiresAuth);
};

export const getProtectedRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES).filter((route) => route.requiresAuth);
};

export const getAllRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES);
};

export const getRouteMetadata = (path: string): RouteConfig | undefined => {
  return getRouteByPath(path);
};
