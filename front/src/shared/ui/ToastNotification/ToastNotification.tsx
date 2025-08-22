'use client';

import { Snackbar, Alert, AlertColor, Stack } from '@mui/material';
import React from 'react';

interface ToastNotificationProps {
  message: string;
  severity?: AlertColor;
  open: boolean;
  onClose?: () => void;
  autoHideDuration?: number;
}

interface ToastNotificationStackProps {
  notifications: Array<{
    id: string;
    message: string;
    severity: AlertColor;
  }>;
  onClose?: (id: string) => void;
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
  message,
  severity = 'info',
  open,
  onClose,
  autoHideDuration = 5000,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{
        '& .MuiSnackbar-root': {
          top: 16,
          right: 16,
        },
      }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: '100%',
          minWidth: 300,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          borderRadius: 2,
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export const ToastNotificationStack: React.FC<ToastNotificationStackProps> = ({
  notifications,
  onClose,
}) => {
  return (
    <Stack
      spacing={1}
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        zIndex: 2000,
        maxWidth: 400,
        minWidth: 300,
      }}
    >
      {notifications.map((notification) => (
        <Alert
          key={notification.id}
          onClose={() => onClose && onClose(notification.id)}
          severity={notification.severity}
          variant="filled"
          sx={{
            width: '100%',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            borderRadius: 2,
            animation: 'slideIn 0.3s ease-out',
            '@keyframes slideIn': {
              '0%': {
                transform: 'translateX(100%)',
                opacity: 0,
              },
              '100%': {
                transform: 'translateX(0)',
                opacity: 1,
              },
            },
          }}
        >
          {notification.message}
        </Alert>
      ))}
    </Stack>
  );
};

export default ToastNotification;
