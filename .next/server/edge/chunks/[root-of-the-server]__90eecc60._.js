(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__90eecc60._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/shared/config/routes.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Centralized routes configuration
__turbopack_context__.s({
    "API_ROUTES": ()=>API_ROUTES,
    "ROUTES": ()=>ROUTES,
    "getAllRoutes": ()=>getAllRoutes,
    "getProtectedRoutes": ()=>getProtectedRoutes,
    "getPublicRoutes": ()=>getPublicRoutes,
    "getRouteByPath": ()=>getRouteByPath,
    "getServerRouteConfig": ()=>getServerRouteConfig
});
const ROUTES = {
    HOME: {
        path: '/',
        title: 'Home',
        description: 'Welcome to Easy Dash',
        requiresAuth: false
    },
    LOGIN: {
        path: '/login',
        title: 'Login',
        description: 'Sign in to your account',
        requiresAuth: false
    },
    REGISTER: {
        path: '/register',
        title: 'Register',
        description: 'Create a new account',
        requiresAuth: false
    },
    DASHBOARD: {
        path: '/dashboard',
        title: 'Dashboard',
        description: 'Your dashboard overview',
        requiresAuth: true
    },
    PROFILE: {
        path: '/profile',
        title: 'Profile',
        description: 'Your profile settings',
        requiresAuth: true
    },
    SETTINGS: {
        path: '/settings',
        title: 'Settings',
        description: 'Application settings',
        requiresAuth: true
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
const getServerRouteConfig = ()=>{
    return {
        routes: ROUTES,
        getPublicRoutes: ()=>getPublicRoutes(),
        getProtectedRoutes: ()=>getProtectedRoutes(),
        getAllRoutes: ()=>getAllRoutes(),
        getRouteByPath: (path)=>getRouteByPath(path)
    };
};
}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "config": ()=>config,
    "middleware": ()=>middleware
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [middleware-edge] (ecmascript)");
;
;
// Define protected routes that require authentication
const protectedRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"]).filter((route)=>route.requiresAuth).map((route)=>route.path);
// Define public routes that don't require authentication
const publicRoutes = Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"]).filter((route)=>!route.requiresAuth).map((route)=>route.path);
function middleware(request) {
    const { pathname } = request.nextUrl;
    // Check if the current path is a protected route
    const isProtectedRoute = protectedRoutes.includes(pathname);
    // Get authentication status from cookies or headers
    // You can customize this based on your auth implementation
    const authToken = request.cookies.get('auth-token')?.value;
    const isAuthenticated = !!authToken;
    // If trying to access protected route without authentication
    if (isProtectedRoute && !isAuthenticated) {
        // Redirect to home page (or login page if you prefer)
        const redirectUrl = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"].HOME.path, request.url);
        // Add a query parameter to show a message
        redirectUrl.searchParams.set('message', 'Please sign in to access this page');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    // If authenticated user tries to access login/register pages, redirect to dashboard
    if (isAuthenticated && (pathname === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"].LOGIN.path || pathname === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"].REGISTER.path)) {
        const redirectUrl = new URL(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["ROUTES"].DASHBOARD.path, request.url);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(redirectUrl);
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */ '/((?!api|_next/static|_next/image|favicon.ico|public).*)'
    ]
};
}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__90eecc60._.js.map