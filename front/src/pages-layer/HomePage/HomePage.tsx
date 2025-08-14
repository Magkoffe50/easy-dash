'use client';

import React from 'react';
import { LoggedInHome } from '@/features/dashboard';
import { NotLoggedInHome } from '@/features/auth';
import { useAuth } from '@/shared/store';

export const HomePage: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated && user) {
    return <LoggedInHome user={user} />;
  }

  return <NotLoggedInHome />;
};
