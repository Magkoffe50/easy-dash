"use client";

import React from 'react';
import { Button } from '@/shared/ui/Button';
import { APP_CONFIG } from '@/shared/config';
import { User } from '@/entities/user/model/types';
import styles from './Header.module.css';

interface HeaderProps {
  onMenuToggle?: () => void;
  user?: User;
  onLogout?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onMenuToggle,
  user,
  onLogout,
}) => {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button 
          className={styles.menuButton}
          onClick={onMenuToggle}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className={styles.logo}>
          <h1>{APP_CONFIG.name}</h1>
        </div>
      </div>
      
      <div className={styles.right}>
        {user ? (
          <div className={styles.userMenu}>
            <span className={styles.userName}>{user.name}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button variant="primary" size="sm">
            Sign In
          </Button>
        )}
      </div>
    </header>
  );
};
