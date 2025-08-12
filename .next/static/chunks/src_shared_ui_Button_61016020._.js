(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/shared/ui/Button/Button.module.css [app-client] (css module)": ((__turbopack_context__) => {

__turbopack_context__.v({
  "button": "Button-module__fANS6W__button",
  "lg": "Button-module__fANS6W__lg",
  "md": "Button-module__fANS6W__md",
  "outline": "Button-module__fANS6W__outline",
  "primary": "Button-module__fANS6W__primary",
  "secondary": "Button-module__fANS6W__secondary",
  "sm": "Button-module__fANS6W__sm",
});
}),
"[project]/src/shared/ui/Button/Button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": ()=>Button
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/shared/ui/Button/Button.module.css [app-client] (css module)");
"use client";
;
;
const Button = (param)=>{
    let { children, variant = 'primary', size = 'md', onClick, disabled = false, type = 'button', className = '' } = param;
    const buttonClasses = [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][variant],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shared$2f$ui$2f$Button$2f$Button$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"][size],
        className
    ].filter(Boolean).join(' ');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: type,
        className: buttonClasses,
        onClick: onClick,
        disabled: disabled,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/shared/ui/Button/Button.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Button;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_shared_ui_Button_61016020._.js.map