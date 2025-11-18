'use client';

import React, { FC, useCallback, useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import {
  Typography,
  Box,
  Alert,
  Link as MuiLink,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { isLoginLoading, error } = useAuthSelectors();
  const { onRegisterRequest } = useAuthOrchestration();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (formData.password !== confirmPassword) {
        return;
      }

      onRegisterRequest(formData);
    },
    [formData, confirmPassword, onRegisterRequest],
  );

  const handleChange =
    (field: keyof RegisterData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box sx={{ maxWidth: 400, width: '100%' }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontWeight: 600, mb: 1 }}
      >
        Create an Account
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
        Get started with your new workspace.
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          <Input
            type="text"
            label="First Name"
            placeholder="Enter your first name"
            value={formData.firstName}
            onChange={handleChange('firstName')}
            required
            size="lg"
          />
          <Input
            type="text"
            label="Last Name"
            placeholder="Enter your last name"
            value={formData.lastName}
            onChange={handleChange('lastName')}
            required
            size="lg"
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange('email')}
            required
            size="lg"
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Input
            type={showPassword ? 'text' : 'password'}
            label="Password"
            placeholder="8+ characters"
            value={formData.password}
            onChange={handleChange('password')}
            required
            size="lg"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box sx={{ mb: 2 }}>
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            label="Confirm password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            size="lg"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm password visibility"
                    onClick={handleToggleConfirmPasswordVisibility}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={
              confirmPassword !== '' && formData.password !== confirmPassword
            }
            helperText={
              confirmPassword !== '' && formData.password !== confirmPassword
                ? 'Passwords do not match'
                : ''
            }
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
          disabled={
            isLoginLoading ||
            (confirmPassword !== '' && formData.password !== confirmPassword)
          }
          fullWidth
          sx={{ mb: 3, py: 1.5, textTransform: 'none' }}
        >
          {isLoginLoading ? 'Creating account...' : 'Sign Up'}
        </Button>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Already have an account?{' '}
          <MuiLink component={Link} href="/login" underline="hover">
            Sign In
          </MuiLink>
        </Typography>
      </Box>
    </Box>
  );
};
