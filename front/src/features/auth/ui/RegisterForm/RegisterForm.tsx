'use client';

import React, { FC, useCallback, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Alert,
  Link as MuiLink,
} from '@mui/material';
import { RegisterData } from '../../model/types';
import Link from 'next/link';
import {
  useAuthSelectors,
  useAuthOrchestration,
} from '@/shared/store/auth/hooks';

export const RegisterForm: FC = () => {
  const [formData, setFormData] = useState<RegisterData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const { isLoginLoading, error } = useAuthSelectors();
  const { onRegisterRequest } = useAuthOrchestration();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      onRegisterRequest(formData);
    },
    [formData, onRegisterRequest],
  );

  const handleChange =
    (field: keyof RegisterData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <Card sx={{ maxWidth: 500, mx: 'auto', mt: 4 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Create Account
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Sign up to get started
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
            <Input
              type="text"
              label="First Name"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              required
              size="lg"
            />
            <Input
              type="text"
              label="Last Name"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              required
              size="lg"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Input
              type="email"
              label="Email address"
              value={formData.email}
              onChange={handleChange('email')}
              required
              size="lg"
            />
          </Box>

          <Box sx={{ mb: 2 }}>
            <Input
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange('password')}
              required
              size="lg"
            />
          </Box>

          {error && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isLoginLoading}
            fullWidth
            sx={{ mb: 2 }}
          >
            {isLoginLoading ? 'Creating account...' : 'Create Account'}
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <MuiLink component={Link} href="/login" underline="hover">
              Sign in
            </MuiLink>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
