'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Avatar,
} from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import { Note } from '@/entities/note';
import { formatLastUpdated } from '@/shared/lib/utils';

interface RecentDashboardCardProps {
  note: Note;
  icon?: React.ReactNode;
}

export const RecentDashboardCard: React.FC<RecentDashboardCardProps> = ({
  note,
  icon,
}) => {
  const router = useRouter();

  return (
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
      onClick={() => router.push(`/notes/${note.id}`)}
    >
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon && (
            <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>{icon}</Avatar>
          )}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" component="h3" gutterBottom>
              {note.title}
            </Typography>
            {note.type && (
              <Chip
                label={note.type}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {note.description}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="caption" color="text.secondary">
            Updated {formatLastUpdated(note.lastUpdated)}
          </Typography>
          <ArrowForward fontSize="small" color="action" />
        </Box>
      </CardContent>
    </Card>
  );
};
