# Routing Structure

This project uses a centralized routing configuration with Next.js App Router and Feature Sliced Design.

## 🏗️ Architecture

### **Centralized Route Configuration**
All routes are defined in `src/shared/config/routes.ts` with actual component imports:

```typescript
import { HomePage } from '@/pages-layer';

export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false,
    component: HomePage, // Actual component import
  },
  LOGIN: {
    path: '/login',
    title: 'Login',
    description: 'Sign in to your account',
    requiresAuth: false,
    component: () => React.createElement('div', null, 'Login Page (Coming Soon)'),
  },
  // ... more routes
};
```

### **Dynamic Route Handler**
Instead of creating individual `page.tsx` files in the `app` directory, we use a single dynamic route handler:

```
src/app/
├── layout.tsx              # Root layout
├── [[...slug]]/page.tsx    # Dynamic route handler (catches all routes)
└── styles/                 # Global styles
```

## 📁 File Structure

```
src/
├── shared/
│   ├── config/
│   │   └── routes.ts       # Single route configuration with component imports
│   └── lib/
│       └── router.ts       # Router utilities
├── pages-layer/            # FSD pages layer
│   ├── HomePage/
│   ├── LoginPage/
│   ├── DashboardPage/
│   └── index.ts
└── app/
    ├── layout.tsx
    └── [[...slug]]/page.tsx  # Single dynamic handler
```

## 🔧 How It Works

### **1. Route Definition**
Routes are defined in `src/shared/config/routes.ts` with actual component imports:

```typescript
import { HomePage } from '@/pages-layer';

export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false,
    component: HomePage, // Direct component import
  },
};
```

### **2. Dynamic Route Handler**
The `src/app/[[...slug]]/page.tsx` file handles all routes:

```typescript
export default function DynamicPage({ params }: DynamicPageProps) {
  const path = params.slug ? `/${params.slug.join('/')}` : '/';
  const PageComponent = getRouteComponent(path); // Returns actual component
  
  if (!PageComponent) {
    notFound();
  }
  
  return <PageComponent />; // Direct component rendering
}
```

### **3. Page Components**
Page components live in the FSD pages layer:

```typescript
// src/pages-layer/HomePage/HomePage.tsx
export const HomePage: React.FC = () => {
  return <div>Home Page Content</div>;
};
```

## 🚀 Adding New Routes

### **1. Create the Page Component**
Create `src/pages-layer/LoginPage/LoginPage.tsx`:

```typescript
export const LoginPage: React.FC = () => {
  return <div>Login Page Content</div>;
};
```

### **2. Export from Pages Layer**
Add to `src/pages-layer/index.ts`:

```typescript
export * from './LoginPage';
```

### **3. Update Route Configuration**
Update `src/shared/config/routes.ts`:

```typescript
import { HomePage, LoginPage } from '@/pages-layer';

export const ROUTES: Record<string, RouteConfig> = {
  HOME: {
    path: '/',
    title: 'Home',
    description: 'Welcome to Easy Dash',
    requiresAuth: false,
    component: HomePage,
  },
  LOGIN: {
    path: '/login',
    title: 'Login',
    description: 'Sign in to your account',
    requiresAuth: false,
    component: LoginPage, // Import the actual component
  },
};
```

## ✅ Benefits

- **Type Safety**: Direct component imports with full TypeScript support
- **No Component Mapping**: No need for separate component mapping objects
- **Single Configuration**: All route info including components in one place
- **Easy Maintenance**: Add routes without touching app directory
- **SEO Friendly**: Automatic metadata generation
- **FSD Compliant**: Proper separation of concerns
- **Scalable**: Easy to add new routes and features

## 🔗 Navigation

The `Navigation` component automatically uses the route configuration:

```typescript
import { Navigation } from '@/widgets/Navigation';

<Navigation isAuthenticated={true} onLogout={handleLogout} />
```

## 🛠️ Helper Functions

The routes configuration includes helpful functions:

```typescript
import { 
  getRouteByPath, 
  getPublicRoutes, 
  getProtectedRoutes,
  getAllRoutes 
} from '@/shared/config/routes';

// Get route by path
const route = getRouteByPath('/dashboard');

// Get all public routes
const publicRoutes = getPublicRoutes();

// Get all protected routes
const protectedRoutes = getProtectedRoutes();
```

This creates a clean, maintainable routing structure that follows FSD principles! 🎉
