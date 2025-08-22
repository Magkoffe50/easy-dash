'use client';

import { Snackbar } from '@mui/material';
import React from 'react';
import { ReactElement } from 'react';

const ToastNotificaiton = ({
  notification,
  openInitial = false,
}: {
  notification: ReactElement;
  openInitial?: boolean;
}) => {
  const [open, setOpen] = React.useState(openInitial);
  const [left, setLeft] = React.useState<undefined | number>();
  const timer = React.useRef<ReturnType<typeof setInterval>>(undefined);
  const countdown = () => {
    timer.current = setInterval(() => {
      setLeft((prev) => (prev === undefined ? prev : Math.max(0, prev - 100)));
    }, 100);
  };
  React.useEffect(() => {
    if (open) {
      countdown();
    } else {
      clearInterval(timer.current);
    }
  }, [open]);
  const handlePause = () => {
    clearInterval(timer.current);
  };
  const handleResume = () => {
    countdown();
  };
  return (
    <div>
      <Snackbar
        variant="filled"
        color="error"
        autoHideDuration={5000}
        resumeHideDuration={left}
        onMouseEnter={handlePause}
        onMouseLeave={handleResume}
        onFocus={handlePause}
        onBlur={handleResume}
        // onUnmount={() => setLeft(undefined)}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {notification}
      </Snackbar>
    </div>
  );
};

export default ToastNotificaiton;
