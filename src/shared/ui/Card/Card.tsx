import React from 'react';
import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  CardContent,
} from '@mui/material';

interface CardProps extends Omit<MuiCardProps, 'children'> {
  children: React.ReactNode;
  padding?: 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  padding = 'md',
  ...props
}) => {
  const paddingValue = padding === 'sm' ? 1 : padding === 'lg' ? 3 : 2;

  return (
    <MuiCard elevation={2} {...props}>
      <CardContent sx={{ p: paddingValue }}>{children}</CardContent>
    </MuiCard>
  );
};
