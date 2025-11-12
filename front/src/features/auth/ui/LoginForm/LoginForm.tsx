'use client';

import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Link as MuiLink,
} from '@mui/material';
import { LoginCredentials } from '../../model/types';
import Link from 'next/link';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  isLoading?: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
}) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange =
    (field: keyof LoginCredentials) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <Card sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <CardContent sx={{ p: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Welcome Back
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
          gutterBottom
        >
          Sign in to your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
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

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={isLoading}
            fullWidth
            sx={{ mb: 2 }}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </Box>

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2">
            Don&apos;t have an account?{' '}
            <MuiLink component={Link} href="/register" underline="hover">
              Sign up
            </MuiLink>
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};
