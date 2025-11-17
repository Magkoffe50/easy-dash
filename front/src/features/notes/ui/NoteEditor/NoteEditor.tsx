'use client';

import React from 'react';
import { Box, Grid, Button, Card, CardContent } from '@mui/material';
import { Input } from '@/shared/ui';
import { NoteCreatePayload, NoteUpdatePayload } from '@/entities/note';

interface NoteEditorProps {
  initialData?: Partial<NoteCreatePayload>;
  onSubmit: (data: NoteCreatePayload | NoteUpdatePayload) => Promise<void>;
  onCancel: () => void;
  isLoading?: boolean;
  submitLabel?: string;
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  initialData,
  onSubmit,
  onCancel,
  isLoading = false,
  submitLabel = 'Save',
}) => {
  const [formData, setFormData] = React.useState<NoteCreatePayload>({
    title: initialData?.title || '',
    description: initialData?.description || '',
    content: initialData?.content || '',
    type: initialData?.type || '',
    tags: initialData?.tags || [],
  });

  React.useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || '',
        description: initialData.description || '',
        content: initialData.content || '',
        type: initialData.type || '',
        tags: initialData.tags || [],
      });
    }
  }, [initialData]);

  const handleChange =
    (field: keyof NoteCreatePayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
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
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={onCancel}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained" disabled={isLoading}>
                  {isLoading ? 'Saving...' : submitLabel}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
