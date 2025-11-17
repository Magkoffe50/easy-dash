'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { Input } from '@/shared/ui';
import { useNotes } from '@/shared/store';
import { NoteCreatePayload } from '@/entities/note';

export const CreateNotePage: React.FC = () => {
  const router = useRouter();
  const { createNote, isLoading } = useNotes();

  const [formData, setFormData] = useState<NoteCreatePayload>({
    title: '',
    description: '',
    content: '',
    type: '',
    tags: [],
  });

  const handleChange =
    (field: keyof NoteCreatePayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const createdNote = await createNote(formData);

      if (createdNote) {
        router.push('/notes');
      }
    },
    [formData, createNote, router],
  );

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mb: 2 }}
        >
          Back
        </Button>
        <Typography variant="h3" component="h1">
          Create New Note
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 12 }}>
                <Input
                  type="text"
                  label="Title"
                  value={formData.title}
                  onChange={handleChange('title')}
                  required
                  fullWidth
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Input
                  type="text"
                  label="Description"
                  value={formData.description}
                  onChange={handleChange('description')}
                  required
                  fullWidth
                  multiline
                  rows={3}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Input
                  type="text"
                  label="Content (optional)"
                  value={formData.content || ''}
                  onChange={handleChange('content')}
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Input
                  type="text"
                  label="Type (optional)"
                  value={formData.type || ''}
                  onChange={handleChange('type')}
                  fullWidth
                  placeholder="e.g., analytics, management, marketing"
                />
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}
                >
                  <Button
                    type="button"
                    variant="outlined"
                    onClick={() => router.back()}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating...' : 'Create Note'}
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};
