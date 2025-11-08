'use client';

import { LoginForm } from '@/features';
import { useAuthSelectors, useAuthOrchestration } from '@/shared/store/auth/hooks';
import { Box } from '@mui/material';
import React from 'react';

export const LoginPage: React.FC = () => {
  const { isLoginLoading } = useAuthSelectors();
  const { onLoginRequest } = useAuthOrchestration();

  return (
    <Box>
      <LoginForm onSubmit={onLoginRequest} isLoading={isLoginLoading} />
    </Box>
  );
};
