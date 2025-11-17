import React from 'react';
import {
  Note as NoteIcon,
  TrendingUp,
  People,
  Analytics,
} from '@mui/icons-material';

export const getNoteIcon = (type?: string): React.ReactElement => {
  switch (type) {
    case 'analytics':
      return <TrendingUp />;
    case 'management':
      return <People />;
    case 'marketing':
      return <Analytics />;
    default:
      return <NoteIcon />;
  }
};
