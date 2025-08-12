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

var { m: module, e: exports } = __turbopack_context__;
{
const e = new Error("Could not parse module '[project]/src/shared/config/routes.ts'\n\nExpected ',', got 'Page'");
e.code = 'MODULE_UNPARSABLE';
throw e;
}}),
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
"[project]/src/pages-layer/index.ts [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

// Pages layer - page components
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript) <module evaluation>");
;
}),
"[project]/src/pages-layer/index.ts [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/index.ts [app-rsc] (ecmascript) <locals>");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/pages-layer/index.ts [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/pages-layer/HomePage/HomePage.tsx [app-rsc] (ecmascript)");
;
;
;
;
const PAGE_COMPONENTS = {
    HomePage: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2d$layer$2f$HomePage$2f$HomePage$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HomePage"]
};
function DynamicPage({ params }) {
    const path = params.slug ? `/${params.slug.join('/')}` : '/';
    const componentName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteComponent"])(path);
    if (!componentName) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Get the actual component
    const PageComponent = PAGE_COMPONENTS[componentName];
    if (!PageComponent) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Get route metadata for SEO
    const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$lib$2f$router$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMetadata"])(path);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(PageComponent, {}, void 0, false, {
        fileName: "[project]/src/app/[[...slug]]/page.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
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

//# sourceMappingURL=%5Broot-of-the-server%5D__e298d46e._.js.map