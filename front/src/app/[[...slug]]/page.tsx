import { notFound } from 'next/navigation';
import { getRouteMetadata, ROUTES } from '@/shared/config/routes';
import type { Metadata } from 'next';

import {
  HomePage,
  LoginPage,
  RegisterPage,
  DashboardPage,
  ProfilePage,
  SettingsPage,
} from '@/pages-layer';

interface DynamicPageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

const ROUTE_COMPONENTS: Record<string, React.ComponentType> = {
  [ROUTES.HOME.path]: HomePage,
  [ROUTES.LOGIN.path]: LoginPage,
  [ROUTES.REGISTER.path]: RegisterPage,
  [ROUTES.DASHBOARD.path]: DashboardPage,
  [ROUTES.PROFILE.path]: ProfilePage,
  [ROUTES.SETTINGS.path]: SettingsPage,
};

export function generateStaticParams() {
  return Object.values(ROUTES).map((route) => {
    const slug = route.path === '/' ? [] : route.path.slice(1).split('/');
    return { slug };
  });
}

export async function generateMetadata({
  params,
}: DynamicPageProps): Promise<Metadata> {
  const { slug = [] } = await params;

  const path = slug.length > 0 ? `/${slug.join('/')}` : '/';
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

  const path = slug.length > 0 ? `/${slug.join('/')}` : '/';
  const Component = ROUTE_COMPONENTS[path];

  if (!Component) {
    notFound();
  }

  return <Component />;
}
