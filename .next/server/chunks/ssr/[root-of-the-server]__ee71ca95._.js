module.exports = {

"[project]/.next-internal/server/app/[[...slug]]/page/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Centralized routes configuration
__turbopack_context__.s({
    "API_ROUTES": ()=>API_ROUTES,
    "ROUTES": ()=>ROUTES,
    "getAllRoutes": ()=>getAllRoutes,
    "getProtectedRoutes": ()=>getProtectedRoutes,
    "getPublicRoutes": ()=>getPublicRoutes,
    "getRouteByPath": ()=>getRouteByPath
});
const ROUTES = {
    HOME: {
        path: '/',
        title: 'Home',
        description: 'Welcome to Easy Dash',
        requiresAuth: false,
        component: ()=>__turbopack_context__.r("[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
                    default: module.HomePage
                }))
    },
    LOGIN: {
        path: '/login',
        title: 'Login',
        description: 'Sign in to your account',
        requiresAuth: false,
        component: ()=>__turbopack_context__.r("[project]/src/pages-layer/LoginPage/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
                    default: module.LoginPage
                }))
    },
    REGISTER: {
        path: '/register',
        title: 'Register',
        description: 'Create a new account',
        requiresAuth: false,
        component: ()=>__turbopack_context__.r("[project]/src/pages-layer/RegisterPage/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
                    default: module.RegisterPage
                }))
    },
    DASHBOARD: {
        path: '/dashboard',
        title: 'Dashboard',
        description: 'Your dashboard overview',
        requiresAuth: true,
        component: ()=>__turbopack_context__.r("[project]/src/pages-layer/DashboardPage/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
                    default: module.DashboardPage
                }))
    },
    PROFILE: {
        path: '/profile',
        title: 'Profile',
        description: 'Your profile settings',
        requiresAuth: true,
        component: ()=>__turbopack_context__.r("[project]/src/pages-layer/ProfilePage/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
                    default: module.ProfilePage
                }))
    },
    SETTINGS: {
        path: '/settings',
        title: 'Settings',
        description: 'Application settings',
        requiresAuth: true,
        component: ()=>__turbopack_context__.r("[project]/src/pages-layer/SettingsPage/index.ts [app-rsc] (ecmascript, async loader)")(__turbopack_context__.i).then((module)=>({
                    default: module.SettingsPage
                }))
    }
};
const API_ROUTES = {
    AUTH: {
        LOGIN: '/api/auth/login',
        LOGOUT: '/api/auth/logout',
        REGISTER: '/api/auth/register',
        REFRESH: '/api/auth/refresh'
    },
    USERS: {
        PROFILE: '/api/users/profile',
        SETTINGS: '/api/users/settings'
    },
    DASHBOARD: {
        STATS: '/api/dashboard/stats',
        CHARTS: '/api/dashboard/charts'
    }
};
const getRouteByPath = (path)=>{
    return Object.values(ROUTES).find((route)=>route.path === path);
};
const getPublicRoutes = ()=>{
    return Object.values(ROUTES).filter((route)=>!route.requiresAuth);
};
const getProtectedRoutes = ()=>{
    return Object.values(ROUTES).filter((route)=>route.requiresAuth);
};
const getAllRoutes = ()=>{
    return Object.values(ROUTES);
};
}),
"[project]/src/shared/lib/router.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Router utility for dynamic page loading
__turbopack_context__.s({
    "getAllRoutes": ()=>getAllRoutes,
    "getProtectedRoutesList": ()=>getProtectedRoutesList,
    "getPublicRoutesList": ()=>getPublicRoutesList,
    "getRouteMetadata": ()=>getRouteMetadata,
    "isProtectedRoute": ()=>isProtectedRoute
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
;
const getRouteMetadata = (path)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteByPath"])(path);
};
const isProtectedRoute = (path)=>{
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteByPath"])(path);
    return route?.requiresAuth || false;
};
const getAllRoutes = ()=>{
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"]);
};
const getPublicRoutesList = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicRoutes"])();
};
const getProtectedRoutesList = ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProtectedRoutes"])();
};
}),
"[project]/src/shared/config/app.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Application configuration
__turbopack_context__.s({
    "APP_CONFIG": ()=>APP_CONFIG,
    "FEATURE_FLAGS": ()=>FEATURE_FLAGS
});
const APP_CONFIG = {
    name: 'Easy Dash',
    version: '1.0.0',
    description: 'A modern dashboard built with Next.js and Feature Sliced Design',
    author: 'Your Name',
    repository: 'https://github.com/yourusername/easy-dash'
};
const FEATURE_FLAGS = {
    enableAnalytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    enableNotifications: process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === 'true',
    enableDarkMode: process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true'
};
}),
"[project]/src/shared/config/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// API configuration
__turbopack_context__.s({
    "API_CONFIG": ()=>API_CONFIG,
    "API_ENDPOINTS": ()=>API_ENDPOINTS
});
const API_CONFIG = {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    retries: 3
};
const API_ENDPOINTS = {
    auth: {
        login: '/auth/login',
        logout: '/auth/logout',
        register: '/auth/register',
        refresh: '/auth/refresh'
    },
    users: {
        profile: '/users/profile',
        settings: '/users/settings'
    },
    dashboard: {
        stats: '/dashboard/stats',
        charts: '/dashboard/charts'
    }
};
}),
"[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// Shared configuration
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "API_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_CONFIG"],
    "API_ENDPOINTS": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_ENDPOINTS"],
    "API_ROUTES": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["API_ROUTES"],
    "APP_CONFIG": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["APP_CONFIG"],
    "FEATURE_FLAGS": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FEATURE_FLAGS"],
    "ROUTES": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"],
    "getAllRoutes": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllRoutes"],
    "getProtectedRoutes": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProtectedRoutes"],
    "getPublicRoutes": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicRoutes"],
    "getRouteByPath": ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteByPath"]
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$app$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/app.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/app/[[...slug]]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DynamicPage,
    "generateMetadata": ()=>generateMetadata,
    "generateStaticParams": ()=>generateStaticParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/router.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i("[project]/src/shared/config/index.ts [app-rsc] (ecmascript) <exports>");
;
;
;
;
function generateStaticParams() {
    return [
        {
            slug: []
        },
        {
            slug: [
                'login'
            ]
        },
        {
            slug: [
                'register'
            ]
        },
        {
            slug: [
                'dashboard'
            ]
        },
        {
            slug: [
                'profile'
            ]
        },
        {
            slug: [
                'settings'
            ]
        }
    ];
}
async function generateMetadata({ params }) {
    const { slug = [] } = await params;
    const path = slug ? `/${slug.join('/')}` : '/';
    const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMetadata"])(path);
    if (!metadata) {
        return {
            title: 'Page Not Found'
        };
    }
    return {
        title: `${metadata.title} - Easy Dash`,
        description: metadata.description
    };
}
async function DynamicPage({ params }) {
    const { slug = [] } = await params;
    const path = slug ? `/${slug.join('/')}` : '/';
    const Component = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ROUTE_COMPONENTS"][path];
    if (!Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {}, void 0, false, {
        fileName: "[project]/src/app/[[...slug]]/page.tsx",
        lineNumber: 53,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/[[...slug]]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)": ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[[...slug]]/page.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__ee71ca95._.js.map