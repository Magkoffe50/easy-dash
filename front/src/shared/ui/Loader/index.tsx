import { FC } from 'react';
import { Box, CircularProgress, SxProps, Theme } from '@mui/material';

interface LoaderProps {
  fullScreen?: boolean;
  size?: number;
  sx?: SxProps<Theme>;
}

export const Loader: FC<LoaderProps> = ({
  fullScreen = false,
  size = 40,
  sx,
}) => {
  const defaultSx: SxProps<Theme> = fullScreen
    ? {
        background: 'rgba(0,0,0,0.2)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
      }
    : {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

  return (
    <Box sx={{ ...defaultSx, ...sx }}>
      <CircularProgress size={size} />
    </Box>
  );
};
