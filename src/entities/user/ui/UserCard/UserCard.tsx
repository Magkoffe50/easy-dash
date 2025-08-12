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
  return (
    <Card
      className={className}
      onClick={onClick}
      sx={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 48, height: 48 }}
          >
            {!user.avatar && user.name.charAt(0).toUpperCase()}
          </Avatar>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {user.email}
            </Typography>
            <Chip
              label={user.role}
              size="small"
              color={user.role === 'admin' ? 'secondary' : 'default'}
              sx={{ mr: 1 }}
            />
            <Chip
              label={user.isActive ? 'Active' : 'Inactive'}
              size="small"
              color={user.isActive ? 'success' : 'error'}
              variant="outlined"
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
