import { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loader: FC = () => (
  <Box
    sx={{ background: 'rgba(0,0,0,0.2)' }}
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="100%"
    height="100vh"
  >
    <CircularProgress size={80} />
  </Box>
);
