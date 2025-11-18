'use client';

import React, { forwardRef } from 'react';
import MuiCard from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import type { CardProps as MuiCardProps } from '@mui/material/Card';

export interface CardProps extends Omit<MuiCardProps, 'children' | 'title'> {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg' | 'none';
  title?: React.ReactNode;
  subheader?: React.ReactNode;
  avatar?: React.ReactNode;
  action?: React.ReactNode;
  actions?: React.ReactNode;
  header?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      padding = 'md',
      title,
      subheader,
      avatar,
      action,
      actions,
      header = false,
      elevation = 2,
      ...props
    },
    ref,
  ) => {
    const paddingValue =
      padding === 'sm' ? 2 : padding === 'lg' ? 4 : padding === 'none' ? 0 : 3;

    const hasHeader = header || title || subheader || avatar || action;

    return (
      <MuiCard
        ref={ref}
        elevation={elevation}
        sx={{
          borderRadius: 3,
          border: '1px solid',
          borderColor: (theme) =>
            theme.palette.mode === 'dark'
              ? 'rgba(255, 255, 255, 0.12)'
              : 'rgba(0, 0, 0, 0.12)',
          ...props.sx,
        }}
        {...props}
      >
        {hasHeader && (
          <CardHeader
            avatar={avatar}
            title={title}
            subheader={subheader}
            action={action}
            sx={{
              pb: padding === 'none' ? 0 : 1,
            }}
          />
        )}
        <CardContent
          sx={{
            p: paddingValue,
            '&:last-child': {
              pb: paddingValue,
            },
          }}
        >
          {children}
        </CardContent>
        {actions && (
          <CardActions sx={{ px: paddingValue, pt: 0 }}>{actions}</CardActions>
        )}
      </MuiCard>
    );
  },
);

Card.displayName = 'Card';
