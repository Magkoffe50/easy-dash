'use client';

import React, { FC } from 'react';
import { RegisterForm } from '@/features/auth/ui/RegisterForm';
import { Container, Typography } from '@mui/material';

export const RegisterPage: FC = () => (
  <Container maxWidth="sm" sx={{ py: 4 }}>
    <Typography variant="h3" component="h1" align="center" gutterBottom>
      Register
    </Typography>
    <RegisterForm />
  </Container>
);
