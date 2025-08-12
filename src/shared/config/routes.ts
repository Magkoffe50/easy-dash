// Centralized routes configuration

export interface RouteConfig {
  path: string;
  title: string;
  description: string;
  requiresAuth: boolean;
  component: () => Promise<{ default: React.ComponentType }>;
}

export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false,
    component: () => import('@/pages-layer/HomePage').then(module => ({ default: module.HomePage })),
  },
  LOGIN: {
    path: '/login',
    title: 'Login',
    description: 'Sign in to your account',
    requiresAuth: false,
    component: () => import('@/pages-layer/LoginPage').then(module => ({ default: module.LoginPage })),
  },
  REGISTER: {
    path: '/register',
    title: 'Register',
    description: 'Create a new account',
    requiresAuth: false,
    component: () => import('@/pages-layer/RegisterPage').then(module => ({ default: module.RegisterPage })),
  },
  DASHBOARD: {
    path: '/dashboard',
    title: 'Dashboard',
    description: 'Your dashboard overview',
    requiresAuth: true,
    component: () => import('@/pages-layer/DashboardPage').then(module => ({ default: module.DashboardPage })),
  },
  PROFILE: {
    path: '/profile',
    title: 'Profile',
    description: 'Your profile settings',
    requiresAuth: true,
    component: () => import('@/pages-layer/ProfilePage').then(module => ({ default: module.ProfilePage })),
  },
  SETTINGS: {
    path: '/settings',
    title: 'Settings',
    description: 'Application settings',
    requiresAuth: true,
    component: () => import('@/pages-layer/SettingsPage').then(module => ({ default: module.SettingsPage })),
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
  return Object.values(ROUTES).find(route => route.path === path);
};

export const getPublicRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES).filter(route => !route.requiresAuth);
};

export const getProtectedRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES).filter(route => route.requiresAuth);
};

export const getAllRoutes = (): RouteConfig[] => {
  return Object.values(ROUTES);
};
