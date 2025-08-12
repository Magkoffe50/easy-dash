"use client";

import React from 'react';
import Image from 'next/image';
import { Card } from '@/shared/ui/Card';
import { User } from '../../model/types';
import styles from './UserCard.module.css';

interface UserCardProps {
  user: User;
  onClick?: () => void;
  className?: string;
}

export const UserCard: React.FC<UserCardProps> = ({
  user,
  onClick,
  className = '',
}) => {
  return (
    <Card 
      className={`${styles.userCard} ${className}`}
      onClick={onClick}
      padding="md"
    >
      <div className={styles.avatar}>
        {user.avatar ? (
          <Image
            src={user.avatar}
            alt={user.name}
            width={48}
            height={48}
            className={styles.avatarImage}
          />
        ) : (
          <div className={styles.avatarPlaceholder}>
            {user.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      
      <div className={styles.userInfo}>
        <h3 className={styles.userName}>{user.name}</h3>
        <p className={styles.userEmail}>{user.email}</p>
        <span className={`${styles.userRole} ${styles[user.role]}`}>
          {user.role}
        </span>
      </div>
      
      <div className={styles.userStatus}>
        <span className={`${styles.status} ${user.isActive ? styles.active : styles.inactive}`}>
          {user.isActive ? 'Active' : 'Inactive'}
        </span>
      </div>
    </Card>
  );
};
