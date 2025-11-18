'use client';

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Box,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { Note } from '@/entities/note';
import { formatLastUpdated, formatDate } from '@/shared/lib/utils';
import { getTagColor } from '@/shared/lib/noteTagUtils';

interface NotesTableProps {
  notes: Note[];
}

export const NotesTable: React.FC<NotesTableProps> = ({ notes }) => {
  const router = useRouter();

  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
    >
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50',
            }}
          >
            <TableCell sx={{ fontWeight: 600 }}>NOTE TITLE</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>TAGS</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>LAST MODIFIED</TableCell>
            <TableCell sx={{ fontWeight: 600 }}>DATE CREATED</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map((note) => (
            <TableRow
              key={note.id}
              hover
              sx={{
                cursor: 'pointer',
              }}
              onClick={() => router.push(`/notes/${note.id}`)}
            >
              <TableCell>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  {note.title}
                </Typography>
              </TableCell>
              <TableCell>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  {note.tags?.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: getTagColor(tag),
                        color: 'white',
                        fontWeight: 500,
                        '& .MuiChip-label': {
                          px: 1,
                        },
                      }}
                    />
                  ))}
                </Box>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {formatLastUpdated(note.lastUpdated)}
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color="text.secondary">
                  {formatDate(note.createdAt)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
