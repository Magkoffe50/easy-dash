// Application constants

export const APP_NAME = 'Easy Dash';
export const APP_VERSION = '1.0.0';

// API endpoints
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

// Theme colors
export const COLORS = {
  primary: '#0070f3',
  secondary: '#f1f5f9',
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

// Breakpoints
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Local storage keys
export const STORAGE_KEYS = {
  THEME: 'easy-dash-theme',
  USER_PREFERENCES: 'easy-dash-user-preferences',
} as const;
