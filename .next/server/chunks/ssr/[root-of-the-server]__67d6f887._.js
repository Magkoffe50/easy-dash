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
    "getRouteComponent": ()=>getRouteComponent,
    "getRouteMetadata": ()=>getRouteMetadata,
    "isProtectedRoute": ()=>isProtectedRoute
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
;
const getRouteMetadata = (path)=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteByPath"])(path);
};
const getRouteComponent = (path)=>{
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteByPath"])(path);
    return route?.component || null;
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
"[project]/src/app/[[...slug]]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DynamicPage,
    "generateMetadata": ()=>generateMetadata,
    "generateStaticParams": ()=>generateStaticParams
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/lib/router.ts [app-rsc] (ecmascript)");
;
;
;
;
// Lazy component wrapper
const LazyComponent = ({ component })=>{
    const Component = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].lazy(component);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/[[...slug]]/page.tsx",
            lineNumber: 15,
            columnNumber: 25
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {}, void 0, false, {
            fileName: "[project]/src/app/[[...slug]]/page.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/[[...slug]]/page.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
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
    const path = params.slug ? `/${params.slug.join('/')}` : '/';
    const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMetadata"])(path);
    if (!metadata) {
        return {
            title: 'Page Not Found'
        };
    }
    return {
        title: metadata.title,
        description: metadata.description
    };
}
function DynamicPage({ params }) {
    const path = params.slug ? `/${params.slug.join('/')}` : '/';
    const routeComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteComponent"])(path);
    if (!routeComponent) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMetadata"])(path);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyComponent, {
        component: routeComponent
    }, void 0, false, {
        fileName: "[project]/src/app/[[...slug]]/page.tsx",
        lineNumber: 58,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__67d6f887._.js.map