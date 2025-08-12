"use client";

import React, { useState } from 'react';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { Card } from '@/shared/ui/Card';
import { LoginCredentials } from '../../model/types';
import styles from './LoginForm.module.css';

interface LoginFormProps {
  onSubmit: (credentials: LoginCredentials) => void;
  isLoading?: boolean;
  error?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onSubmit,
  isLoading = false,
  error,
}) => {
  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof LoginCredentials) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  return (
    <Card className={styles.loginForm} padding="lg">
      <h2 className={styles.title}>Welcome Back</h2>
      <p className={styles.subtitle}>Sign in to your account</p>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <Input
            type="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange('email')}
            required
            size="lg"
          />
        </div>
        
        <div className={styles.field}>
          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange('password')}
            required
            size="lg"
          />
        </div>
        
        {error && (
          <div className={styles.error}>
            {error}
          </div>
        )}
        
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className={styles.submitButton}
        >
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>
      
      <div className={styles.footer}>
        <p>
          Don&apos;t have an account?{' '}
          <a href="/register" className={styles.link}>
            Sign up
          </a>
        </p>
      </div>
    </Card>
  );
};
