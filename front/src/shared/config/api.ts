// API configuration

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  timeout: 10000,
  retries: 3,
} as const;

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    register: '/auth/register',
    refresh: '/auth/refresh',
  },
  users: {
    profile: '/users/profile',
    settings: '/users/settings',
  },
  dashboard: {
    stats: '/dashboard/stats',
    charts: '/dashboard/charts',
  },
} as const;
