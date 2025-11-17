import React from 'react';
import {
  Dashboard,
  Home,
  Settings,
  Person,
  Login,
  Note,
} from '@mui/icons-material';

export const getNavigationIcon = (path: string): React.ReactElement => {
  switch (path) {
    case '/':
      return <Home />;
    case '/dashboard':
      return <Dashboard />;
    case '/profile':
      return <Person />;
    case '/settings':
      return <Settings />;
    case '/login':
      return <Login />;
    case '/notes':
      return <Note />;
    default:
      return <Home />;
  }
};
