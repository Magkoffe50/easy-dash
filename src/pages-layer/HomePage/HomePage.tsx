'use client';

import React, { useEffect } from 'react';
import { LoggedInHome } from '@/features/dashboard';
import { NotLoggedInHome } from '@/features/auth';
import { useAuth } from '@/shared/store';

export const HomePage: React.FC = () => {
  const { isAuthenticated, user, login, setUser } = useAuth();

  useEffect(() => {
    // Check authentication status from localStorage
    const token = localStorage.getItem('auth-token');
    if (token && !isAuthenticated) {
      login(token);
      setUser({
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
    }
  }, [isAuthenticated, login, setUser]);

  // Render appropriate component based on authentication state
  if (isAuthenticated && user) {
    return <LoggedInHome user={user} />;
  }

  return <NotLoggedInHome />;
};
