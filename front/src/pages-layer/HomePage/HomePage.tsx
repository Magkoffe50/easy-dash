'use client';

import React from 'react';
import { LoginForm } from '@/features/auth';
import {
  useAuthSelectors,
  useAuthOrchestration,
} from '@/shared/store/auth/hooks';
import { APP_CONFIG } from '@/shared/config';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

export const HomePage: React.FC = () => {
  const { isLoginLoading } = useAuthSelectors();
  const { onLoginRequest } = useAuthOrchestration();

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex' }}>
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
            sx={{ mb: 4, opacity: 0.9, fontWeight: 300 }}
          >
            Your Dashboard, Simplified
          </Typography>

          <Typography
            variant="h6"
            sx={{ opacity: 0.8, fontWeight: 300, lineHeight: 1.6 }}
          >
            Create beautiful dashboards with ease. Monitor your data, track your
            progress, and make informed decisions with our intuitive dashboard
            platform.
          </Typography>
        </Box>
      </Box>

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

          <LoginForm isLoading={isLoginLoading} onSubmit={onLoginRequest} />

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="body2" color="text.secondary">
              By signing in, you agree to our{' '}
              <Link href="/terms" underline="hover">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
