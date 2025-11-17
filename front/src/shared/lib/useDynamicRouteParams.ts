import { useParams } from 'next/navigation';
import { matchDynamicRoute } from '@/shared/config/dynamicRoutes';

export const useDynamicRouteParams = (): Record<string, string> => {
  const params = useParams();
  const slug = params?.slug as string[] | undefined;

  if (!slug || slug.length === 0) {
    return {};
  }

  const path = `/${slug.join('/')}`;
  const match = matchDynamicRoute(path, slug);

  return match?.params || {};
};
