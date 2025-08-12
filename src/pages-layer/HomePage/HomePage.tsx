'use client';

import React, { useState, useEffect } from 'react';
import { LoggedInHome } from '@/features/dashboard';
import { NotLoggedInHome } from '@/features/auth';
import { User } from '@/entities/user/model/types';

export const HomePage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check authentication status from localStorage
    const token = localStorage.getItem('auth-token');
    if (token) {
      setIsAuthenticated(true);
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
  }, []);

  const handleLoginSuccess = (newUser: User) => {
    setUser(newUser);
    setIsAuthenticated(true);
  };

  // Render appropriate component based on authentication state
  if (isAuthenticated && user) {
    return <LoggedInHome user={user} />;
  }

  return <NotLoggedInHome onLoginSuccess={handleLoginSuccess} />;
};
