'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
} from '@mui/material';
import { getPublicRoutes, getProtectedRoutes } from '@/shared/config/routes';
import { Button } from '@/shared/ui/Button';
import { getNavigationIcon } from '@/shared/lib/navigationUtils';

interface NavigationProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isAuthenticated = false,
  onLogout,
}) => {
  const pathname = usePathname();

  const navigationItems = isAuthenticated
    ? getProtectedRoutes()
    : getPublicRoutes();

  return (
    <Box sx={{ width: 240, p: 2 }}>
      <List>
        {navigationItems.map((route) => (
          <ListItem key={route.path} disablePadding>
            <ListItemButton
              component={Link}
              href={route.path}
              selected={pathname === route.path}
              sx={{
                borderRadius: 1,
                mb: 0.5,
              }}
            >
              <ListItemIcon>{getNavigationIcon(route.path)}</ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ p: 1 }}>
        {isAuthenticated ? (
          <Button variant="outlined" size="small" onClick={onLogout} fullWidth>
            Logout
          </Button>
        ) : (
          <Link href="/login" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="small" fullWidth>
              Sign In
            </Button>
          </Link>
        )}
      </Box>
    </Box>
  );
};
