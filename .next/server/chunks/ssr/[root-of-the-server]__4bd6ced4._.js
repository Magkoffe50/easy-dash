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
    "getRouteByPath": ()=>getRouteByPath,
    "getRouteMetadata": ()=>getRouteMetadata
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
const getRouteMetadata = (path)=>{
    return getRouteByPath(path);
};
}),
"[project]/src/shared/lib/router.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Router utility for dynamic page loading
__turbopack_context__.s({
    "isProtectedRoute": ()=>isProtectedRoute
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
;
const isProtectedRoute = (path)=>{
    const route = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteByPath"])(path);
    return route?.requiresAuth || false;
};
}),
"[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HomePage": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HomePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HomePage() from the server but HomePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/HomePage/HomePage.tsx <module evaluation>", "HomePage");
}),
"[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "HomePage": ()=>HomePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const HomePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HomePage() from the server but HomePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/HomePage/HomePage.tsx", "HomePage");
}),
"[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LoginPage": ()=>LoginPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LoginPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoginPage() from the server but LoginPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/LoginPage/LoginPage.tsx <module evaluation>", "LoginPage");
}),
"[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "LoginPage": ()=>LoginPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LoginPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LoginPage() from the server but LoginPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/LoginPage/LoginPage.tsx", "LoginPage");
}),
"[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/pages-layer/LoginPage/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/pages-layer/LoginPage/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RegisterPage": ()=>RegisterPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const RegisterPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RegisterPage() from the server but RegisterPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/RegisterPage/RegisterPage.tsx <module evaluation>", "RegisterPage");
}),
"[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "RegisterPage": ()=>RegisterPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const RegisterPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call RegisterPage() from the server but RegisterPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/RegisterPage/RegisterPage.tsx", "RegisterPage");
}),
"[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/pages-layer/RegisterPage/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/pages-layer/RegisterPage/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DashboardPage": ()=>DashboardPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DashboardPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardPage() from the server but DashboardPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/DashboardPage/DashboardPage.tsx <module evaluation>", "DashboardPage");
}),
"[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "DashboardPage": ()=>DashboardPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const DashboardPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call DashboardPage() from the server but DashboardPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/DashboardPage/DashboardPage.tsx", "DashboardPage");
}),
"[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/pages-layer/DashboardPage/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/pages-layer/DashboardPage/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ProfilePage": ()=>ProfilePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProfilePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProfilePage() from the server but ProfilePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/ProfilePage/ProfilePage.tsx <module evaluation>", "ProfilePage");
}),
"[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "ProfilePage": ()=>ProfilePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProfilePage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProfilePage() from the server but ProfilePage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/ProfilePage/ProfilePage.tsx", "ProfilePage");
}),
"[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/pages-layer/ProfilePage/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/pages-layer/ProfilePage/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/index.ts [app-rsc] (ecmascript) <locals>");
}),
"[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (client reference proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SettingsPage": ()=>SettingsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SettingsPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SettingsPage() from the server but SettingsPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/SettingsPage/SettingsPage.tsx <module evaluation>", "SettingsPage");
}),
"[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (client reference proxy)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "SettingsPage": ()=>SettingsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const SettingsPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call SettingsPage() from the server but SettingsPage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/pages-layer/SettingsPage/SettingsPage.tsx", "SettingsPage");
}),
"[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/pages-layer/SettingsPage/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (ecmascript)");
;
}),
"[project]/src/pages-layer/SettingsPage/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/index.ts [app-rsc] (ecmascript) <locals>");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shared/config/routes.ts [app-rsc] (ecmascript)");
// Import all page components directly for SSR
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/LoginPage/LoginPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/RegisterPage/RegisterPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/DashboardPage/DashboardPage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/ProfilePage/ProfilePage.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/SettingsPage/SettingsPage.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
// Map routes to components using centralized configuration
const ROUTE_COMPONENTS = {
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"].HOME.path]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePage"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"].LOGIN.path]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$LoginPage$2f$LoginPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LoginPage"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"].REGISTER.path]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$RegisterPage$2f$RegisterPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RegisterPage"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"].DASHBOARD.path]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$DashboardPage$2f$DashboardPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DashboardPage"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"].PROFILE.path]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$ProfilePage$2f$ProfilePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProfilePage"],
    [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"].SETTINGS.path]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$SettingsPage$2f$SettingsPage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SettingsPage"]
};
function generateStaticParams() {
    // Use centralized routes for static params generation
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$config$2f$routes$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ROUTES"]).map((route)=>{
        const slug = route.path === '/' ? [] : route.path.slice(1).split('/');
        return {
            slug
        };
    });
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
    const Component = ROUTE_COMPONENTS[path];
    if (!Component) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Component, {}, void 0, false, {
        fileName: "[project]/src/app/[[...slug]]/page.tsx",
        lineNumber: 68,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__4bd6ced4._.js.map