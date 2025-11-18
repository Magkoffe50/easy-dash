'use client';

import React from 'react';
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Chip,
  Box,
} from '@mui/material';
import { User } from '../../model/types';
import { getUserDisplayName, getAvatarInitial } from '@/shared/lib/userUtils';

interface UserCardProps {
  user: User;
  onClick?: () => void;
  className?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onClick,
  className = '',
}) => {
  const displayName = getUserDisplayName(user);

  return (
    <Card
      className={className}
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        ...(onClick && {
          '&:hover': {
            boxShadow: 2,
          },
        }),
      }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={user.avatar}
            alt={displayName}
            sx={{
              width: 48,
              height: 48,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.main',
            }}
          >
            {!user.avatar && getAvatarInitial(user)}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {displayName}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mt: 0.5 }}>
              <Chip
                label={user.role}
                size="small"
                color={user.role === 'admin' ? 'secondary' : 'default'}
                sx={{
                  '& .MuiChip-label': {
                    fontWeight: 500,
                  },
                }}
              />
              <Chip
                label={user.isActive ? 'Active' : 'Inactive'}
                size="small"
                color={user.isActive ? 'success' : 'error'}
                variant="outlined"
                sx={{
                  '& .MuiChip-label': {
                    fontWeight: 500,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
