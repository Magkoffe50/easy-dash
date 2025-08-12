"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getPublicRoutes, getProtectedRoutes } from '@/shared/config/routes';
import { Button } from '@/shared/ui/Button';
import styles from './Navigation.module.css';

interface NavigationProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  isAuthenticated = false,
  onLogout,
}) => {
  const pathname = usePathname();
  
  const navigationItems = isAuthenticated 
    ? getProtectedRoutes()
    : getPublicRoutes();

  return (
    <nav className={styles.navigation}>
      <div className={styles.navItems}>
        {navigationItems.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className={`${styles.navLink} ${
              pathname === route.path ? styles.active : ''
            }`}
          >
            {route.title}
          </Link>
        ))}
      </div>
      
      <div className={styles.authSection}>
        {isAuthenticated ? (
          <Button
            variant="outline"
            size="sm"
            onClick={onLogout}
          >
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button variant="primary" size="sm">
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};
