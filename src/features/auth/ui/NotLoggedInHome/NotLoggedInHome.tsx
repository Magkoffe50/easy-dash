'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/Button';
import { LoginForm } from '@/features/auth/ui/LoginForm';
import { Typography, Box, Link as MuiLink, Divider } from '@mui/material';
import { APP_CONFIG } from '@/shared/config';
import { LoginCredentials } from '@/features/auth/model/types';
import { User } from '@/entities/user/model/types';

interface NotLoggedInHomeProps {
  onLoginSuccess: (user: User) => void;
}

export const NotLoggedInHome: React.FC<NotLoggedInHomeProps> = ({
  onLoginSuccess,
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock successful login
      if (credentials.email && credentials.password) {
        const mockUser: User = {
          id: '1',
          name: 'John Doe',
          email: credentials.email,
          role: 'user',
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        onLoginSuccess(mockUser);
        localStorage.setItem('auth-token', 'dummy-token');
        router.push('/dashboard');
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
      {/* Left side - Application title */}
      <Box
        sx={{
          flex: 1,
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          p: 4,
        }}
      >
        <Box sx={{ textAlign: 'center', maxWidth: 600 }}>
          <Typography
            variant="h1"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { lg: '4rem', xl: '5rem' },
              lineHeight: 1.2,
            }}
          >
            {APP_CONFIG.name}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              mb: 4,
              opacity: 0.9,
              fontWeight: 300,
            }}
          >
            Your Dashboard, Simplified
          </Typography>

          <Typography
            variant="h6"
            sx={{
              opacity: 0.8,
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            Create beautiful dashboards with ease. Monitor your data, track your
            progress, and make informed decisions with our intuitive dashboard
            platform.
          </Typography>
        </Box>
      </Box>

      {/* Right side - Login form */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
          bgcolor: 'background.default',
        }}
      >
        <Box sx={{ width: '100%', maxWidth: 400 }}>
          {/* Mobile title for small screens */}
          <Box
            sx={{
              display: { xs: 'block', lg: 'none' },
              textAlign: 'center',
              mb: 4,
            }}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              {APP_CONFIG.name}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Sign in to get started
            </Typography>
          </Box>

          <LoginForm
            onSubmit={handleLogin}
            isLoading={isLoading}
            error={error || undefined}
          />

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" color="text.secondary">
              New to {APP_CONFIG.name}?
            </Typography>
          </Divider>

          <Box sx={{ textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              fullWidth
              onClick={() => router.push('/register')}
            >
              Create Account
            </Button>
          </Box>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              By signing in, you agree to our{' '}
              <MuiLink href="/terms" underline="hover">
                Terms of Service
              </MuiLink>{' '}
              and{' '}
              <MuiLink href="/privacy" underline="hover">
                Privacy Policy
              </MuiLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
