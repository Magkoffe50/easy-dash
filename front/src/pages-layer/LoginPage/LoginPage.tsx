'use client';

import { LoginForm } from '@/features';
import { useAuth } from '@/shared/store';
import { Box } from '@mui/material';
import React from 'react';

export const LoginPage: React.FC = () => {
  const { onLoginRequest, isLoginLoading } = useAuth();

  return (
    <Box>
      <LoginForm onSubmit={onLoginRequest} isLoading={isLoginLoading} />
    </Box>
  );
};
