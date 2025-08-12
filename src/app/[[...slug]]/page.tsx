import React, { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { getRouteComponent, getRouteMetadata } from '@/shared/lib/router';

interface DynamicPageProps {
  params: {
    slug?: string[];
  };
}

// Lazy component wrapper
const LazyComponent = ({ component }: { component: () => Promise<{ default: React.ComponentType }> }) => {
  const Component = React.lazy(component);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
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

export async function generateMetadata({ params }: DynamicPageProps) {
  const path = params.slug ? `/${params.slug.join('/')}` : '/';
  const metadata = getRouteMetadata(path);
  
  if (!metadata) {
    return {
      title: 'Page Not Found',
    };
  }
  
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function DynamicPage({ params }: DynamicPageProps) {
  const path = params.slug ? `/${params.slug.join('/')}` : '/';
  const routeComponent = getRouteComponent(path);
  
  if (!routeComponent) {
    notFound();
  }
  
  const metadata = getRouteMetadata(path);
  
  return <LazyComponent component={routeComponent} />;
}
