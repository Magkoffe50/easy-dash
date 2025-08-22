'use client';

import { Alert, AlertColor, Stack } from '@mui/material';
import React from 'react';
interface ToastNotificationStackProps {
  notifications: Array<{
    id: string;
    message: string;
    severity: AlertColor;
  }>;
  onClose?: (id: string) => void;
}

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

export default ToastNotificationStack;
