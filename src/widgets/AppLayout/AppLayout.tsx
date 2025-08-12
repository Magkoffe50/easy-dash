'use client';

import React, { useState } from 'react';
import { Header } from '@/widgets/Header';
import { Navigation } from '@/widgets/Navigation';
import { User } from '@/entities/user/model/types';
import styles from './AppLayout.module.css';

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    // Here you would typically call your logout API
    console.log('User logged out');
  };

  const handleLogin = () => {
    // This would be handled by your login page
    // For now, we'll just simulate authentication
    setIsAuthenticated(true);
    setUser({
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: null,
    });
  };

  return (
    <div className={styles.appLayout}>
      <Header
        onMenuToggle={handleMenuToggle}
        user={user}
        onLogout={handleLogout}
      />

      <div className={styles.mainContent}>
        <aside className={`${styles.sidebar} ${isMenuOpen ? styles.open : ''}`}>
          <Navigation
            isAuthenticated={isAuthenticated}
            onLogout={handleLogout}
          />
        </aside>

        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
};
