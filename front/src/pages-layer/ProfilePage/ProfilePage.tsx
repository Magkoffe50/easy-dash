'use client';

import { useAccount } from '@/shared/store';
import { AccountData } from '@/shared/store/user/hooks';
import { Button, Input } from '@/shared/ui';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useCallback, useState } from 'react';

export const ProfilePage: React.FC = () => {
  const { updateAccount, accountData } = useAccount();
  const [formData, setFormData] = useState<AccountData>({
    firstName: accountData?.firstName || '',
    lastName: accountData?.lastName || '',
    password: '',
  });

  const handleChange =
    (field: keyof typeof formData) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      updateAccount(formData);
    },
    [formData, updateAccount],
  );

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Card sx={{ mx: 'auto', mt: 4, height: 'fit-content' }}>
        <CardContent sx={{ p: 4 }}>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h4" sx={{ mb: 3 }}>
              Change profile settings
            </Typography>
            <Grid
              container
              direction="column"
              spacing={3}
              justifyContent="center"
              sx={{ minWidth: { md: '600px', lg: '600px' } }}
            >
              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Input
                  type="text"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange('firstName')}
                  required
                  size="sm"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Input
                  type="text"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange('lastName')}
                  required
                  size="sm"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Current password
                </Typography>
                <Input
                  type="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange('password')}
                  required
                  size="sm"
                />
              </Grid>

              <Grid size={{ xs: 12, md: 6, lg: 6 }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="md"
                  // disabled={isLoading}
                  sx={{ width: { xs: '100%', md: '150px', lg: '150px' } }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
