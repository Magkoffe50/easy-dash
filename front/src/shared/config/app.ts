// Application configuration

export const APP_CONFIG = {
  name: 'Easy Dash',
  version: '1.0.0',
  description: 'A modern dashboard built with Next.js and Feature Sliced Design',
  author: 'Your Name',
  repository: 'https://github.com/yourusername/easy-dash',
} as const;

export const FEATURE_FLAGS = {
  enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
  enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
  enableDarkMode: process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true',
} as const;
