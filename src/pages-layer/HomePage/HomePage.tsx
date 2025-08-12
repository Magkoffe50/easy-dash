"use client";

import React from 'react';
import Image from "next/image";
import { Button } from '@/shared/ui/Button';
import { Card } from '@/shared/ui/Card';
import { APP_CONFIG } from '@/shared/config';
import styles from './HomePage.module.css';

export const HomePage: React.FC = () => {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <h1 className={styles.title}>
            Welcome to {APP_CONFIG.name}
          </h1>
          
          <p className={styles.description}>
            A modern dashboard built with Next.js and Feature Sliced Design architecture
          </p>
        </div>

        <div className={styles.features}>
          <Card className={styles.featureCard}>
            <h3>Feature Sliced Design</h3>
            <p>Organized code structure following FSD principles</p>
          </Card>
          
          <Card className={styles.featureCard}>
            <h3>TypeScript</h3>
            <p>Full type safety throughout the application</p>
          </Card>
          
          <Card className={styles.featureCard}>
            <h3>Modern UI</h3>
            <p>Beautiful and responsive user interface</p>
          </Card>
        </div>

        <div className={styles.ctas}>
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open('https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app', '_blank')}
          >
            <Image
              className={styles.vercelLogo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app', '_blank')}
          >
            Read our docs
          </Button>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerLink}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
};
