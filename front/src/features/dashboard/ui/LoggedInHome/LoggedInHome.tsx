'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/Button';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Container,
  Grid,
  Chip,
  Avatar,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  TrendingUp,
  People,
  Analytics,
  ArrowForward,
} from '@mui/icons-material';
import { User } from '@/entities/user/model/types';

// Mock data for recent dashboards
const mockRecentDashboards = [
  {
    id: '1',
    title: 'Sales Analytics',
    description: 'Track your sales performance and revenue metrics',
    lastUpdated: '2 hours ago',
    type: 'analytics',
    icon: <TrendingUp />,
  },
  {
    id: '2',
    title: 'Team Management',
    description: 'Manage your team members and their performance',
    lastUpdated: '1 day ago',
    type: 'management',
    icon: <People />,
  },
  {
    id: '3',
    title: 'Marketing Overview',
    description: 'Monitor marketing campaigns and conversion rates',
    lastUpdated: '3 days ago',
    type: 'marketing',
    icon: <Analytics />,
  },
];

interface LoggedInHomeProps {
  user: User | null;
}

export const LoggedInHome: React.FC<LoggedInHomeProps> = ({ user }) => {
  const router = useRouter();

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome back, {user?.name}!
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Here are your recent dashboards
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {mockRecentDashboards.map((dashboard) => (
          <Grid item xs={12} md={4} key={dashboard.id}>
            <Card
              sx={{
                height: '100%',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: 4,
                },
              }}
              onClick={() => router.push(`/dashboard/${dashboard.id}`)}
            >
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                    {dashboard.icon}
                  </Avatar>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {dashboard.title}
                    </Typography>
                    <Chip
                      label={dashboard.type}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </Box>
                </Box>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {dashboard.description}
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Typography variant="caption" color="text.secondary">
                    Updated {dashboard.lastUpdated}
                  </Typography>
                  <ArrowForward fontSize="small" color="action" />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Button
          variant="outlined"
          size="large"
          onClick={() => router.push('/dashboard')}
          startIcon={<DashboardIcon />}
        >
          View All Dashboards
        </Button>
      </Box>
    </Container>
  );
};
