'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/shared/ui/Button';
import { Typography, Box, Container, Grid } from '@mui/material';
import { Note as NoteIcon, Add as AddIcon } from '@mui/icons-material';
import { User } from '@/entities/user/model/types';
import { useNotes } from '@/shared/store';
import { RecentDashboardCard } from '../RecentDashboardCard';
import { getNoteIcon } from '@/shared/lib/noteUtils';
import { Loader } from '@/shared/ui/Loader';

interface LoggedInHomeProps {
  user: User | null;
}

export const LoggedInHome: React.FC<LoggedInHomeProps> = ({ user }) => {
  const router = useRouter();
  const { notes, isLoading } = useNotes();

  const recentNotes = notes.slice(0, 3);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h3" component="h1" gutterBottom>
            Welcome back, {user?.firstName}!
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Here are your recent notes
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          onClick={() => router.push('/notes/create')}
          startIcon={<AddIcon />}
        >
          Create New Note
        </Button>
      </Box>

      {isLoading ? (
        <Loader sx={{ py: 4 }} />
      ) : recentNotes.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            No notes yet
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Create your first note to get started
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => router.push('/notes/create')}
            startIcon={<AddIcon />}
          >
            Create Your First Note
          </Button>
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {recentNotes.map((note) => (
              <Grid size={{ xs: 12, md: 4 }} key={note.id}>
                <RecentDashboardCard
                  note={note}
                  icon={getNoteIcon(note.type)}
                />
              </Grid>
            ))}
          </Grid>

          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Button
              variant="outlined"
              size="large"
              onClick={() => router.push('/notes')}
              startIcon={<NoteIcon />}
            >
              View All Notes
            </Button>
          </Box>
        </>
      )}
    </Container>
  );
};
