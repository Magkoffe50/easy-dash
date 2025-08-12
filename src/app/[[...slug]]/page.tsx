import { notFound } from 'next/navigation';
import { getRouteMetadata } from '@/shared/lib/router';
import type { Metadata } from 'next';

// Import all page components directly for SSR
import { HomePage } from '@/pages-layer/HomePage';
import { LoginPage } from '@/pages-layer/LoginPage';
import { RegisterPage } from '@/pages-layer/RegisterPage';
import { DashboardPage } from '@/pages-layer/DashboardPage';
import { ProfilePage } from '@/pages-layer/ProfilePage';
import { SettingsPage } from '@/pages-layer/SettingsPage';

interface DynamicPageProps {
  params: {
    slug?: string[];
  };
}

// Map routes to components
const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  '/': HomePage,
  '/login': LoginPage,
  '/register': RegisterPage,
  '/dashboard': DashboardPage,
  '/profile': ProfilePage,
  '/settings': SettingsPage,
};

export function generateStaticParams() {
  return [
    { slug: [] },
    { slug: ['login'] },
    { slug: ['register'] },
    { slug: ['dashboard'] },
    { slug: ['profile'] },
    { slug: ['settings'] },
  ];
}

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const { slug = [] } = await params;

  const path = slug ? `/${slug.join('/')}` : '/';
  const metadata = getRouteMetadata(path);

  if (!metadata) {
    return {
      title: 'Page Not Found',
    };
  }

  return {
    title: `${metadata.title} - Easy Dash`,
    description: metadata.description,
  };
}

export default async function DynamicPage({ params }: DynamicPageProps) {
  const { slug = [] } = await params;

  const path = slug ? `/${slug.join('/')}` : '/';
  const Component = ROUTE_COMPONENTS[path];

  if (!Component) {
    notFound();
  }

  return <Component />;
}
