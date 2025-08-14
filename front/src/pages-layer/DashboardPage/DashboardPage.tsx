'use client';

import { LoggedInHome } from '@/features';
import { useUserStore } from '@/shared/store';
import React from 'react';

export const DashboardPage: React.FC = () => {
  const { user } = useUserStore();

  return <LoggedInHome user={user} />;
};
