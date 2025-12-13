'use client';

import React, { useCallback, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Avatar,
  Typography,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Link as MuiLink,
  Button,
} from '@mui/material';
import {
  Brightness4,
  Brightness7,
  AccountCircle,
  Logout,
  Add as AddIcon,
} from '@mui/icons-material';
import { useTheme } from '@/shared/ui/ThemeProvider';
import { getPublicRoutes, getProtectedRoutes } from '@/shared/config/routes';
import { getNavigationIcon } from '@/shared/lib/navigationUtils';
import { getUserDisplayName, getAvatarInitial } from '@/shared/lib/userUtils';
import { User } from '@/entities/user/model/types';
import { ROUTES } from '@/shared/config';

interface NavigationProps {
  isAuthenticated?: boolean;
  user?: User;
  onLogout?: () => void;
  onMenuToggle?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isAuthenticated = false,
  user,
  onLogout,
  onMenuToggle,
}) => {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { themeMode, toggleTheme } = useTheme();

  const navigationItems = isAuthenticated
    ? getProtectedRoutes()
    : getPublicRoutes();

  const displayName = getUserDisplayName(user);

  const handleClose = useCallback(() => setAnchorEl(null), []);

  const handleLogout = useCallback(() => {
    handleClose();
    onLogout?.();
  }, [onLogout, handleClose]);

  return (
    <Box
      sx={{
        width: { xs: '100vw', sm: 240 },
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.grey[900]
            : theme.palette.grey[50],
      }}
    >
      {isAuthenticated && user && (
        <>
          <Box
            sx={{
              p: 3,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Avatar
              src={user.avatar}
              sx={{
                width: 48,
                height: 48,
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark'
                    ? 'primary.dark'
                    : 'primary.main',
              }}
            >
              {getAvatarInitial(user)}
            </Avatar>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {displayName}
              </Typography>
              {user.email && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {user.email}
                </Typography>
              )}
            </Box>
          </Box>
          <Divider
            sx={{
              borderColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'divider',
            }}
          />
        </>
      )}

      <List sx={{ flex: 1, pt: 1 }}>
        {navigationItems.map((route) => {
          const isSelected = pathname === route.path;
          const iconElement = getNavigationIcon(route.path);

          return (
            <ListItem key={route.path} disablePadding>
              <ListItemButton
                component={Link}
                href={route.path}
                selected={isSelected}
                onClick={onMenuToggle}
                sx={{
                  borderRadius: 1,
                  mx: 1,
                  mb: 0.5,
                  '&.Mui-selected': {
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                    '& .MuiListItemIcon-root': {
                      color: 'primary.contrastText',
                    },
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: isSelected
                      ? 'primary.contrastText'
                      : 'text.secondary',
                    minWidth: 40,
                  }}
                >
                  {iconElement}
                </ListItemIcon>
                <ListItemText primary={route.title} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>

      {isAuthenticated && (
        <>
          <Divider
            sx={{
              my: 1,
              borderColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'divider',
            }}
          />
          <Box sx={{ px: 2, pb: 2 }}>
            <Button
              variant="contained"
              fullWidth
              startIcon={<AddIcon />}
              component={Link}
              href="/notes/create"
              onClick={onMenuToggle}
              sx={{
                textTransform: 'none',
                py: 1.5,
              }}
            >
              New Note
            </Button>
          </Box>
          <Divider
            sx={{
              my: 1,
              borderColor: (theme) =>
                theme.palette.mode === 'dark'
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'divider',
            }}
          />
          <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <IconButton
              onClick={toggleTheme}
              sx={{
                width: '100%',
                justifyContent: 'flex-start',
                color: 'text.secondary',
                borderRadius: 1,
              }}
            >
              {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              <Typography variant="body2" sx={{ ml: 2 }}>
                {themeMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
              </Typography>
            </IconButton>

            {user && (
              <>
                <Box
                  sx={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    color: 'text.secondary',
                    borderRadius: 1,
                  }}
                >
                  <AccountCircle />
                  <Typography variant="body2" sx={{ ml: 2 }}>
                    Account
                  </Typography>
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  PaperProps={{
                    sx: {
                      mt: 1,
                    },
                  }}
                >
                  <MenuItem>
                    <MuiLink
                      component={Link}
                      href={ROUTES.PROFILE.path}
                      underline="none"
                      color="inherit"
                    >
                      Profile
                    </MuiLink>
                  </MenuItem>
                  <MenuItem>
                    <MuiLink
                      component={Link}
                      href={ROUTES.SETTINGS.path}
                      underline="none"
                      color="inherit"
                    >
                      Settings
                    </MuiLink>
                  </MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>
                    <Logout sx={{ mr: 1, fontSize: 20 }} />
                    Logout
                  </MenuItem>
                </Menu>
              </>
            )}
          </Box>
        </>
      )}
    </Box>
  );
};
