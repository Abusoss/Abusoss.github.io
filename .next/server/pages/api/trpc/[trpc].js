"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5445);
/* harmony import */ var _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2590);
/* harmony import */ var _server_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2622);
/* harmony import */ var _server_router_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8588);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__, _server_router__WEBPACK_IMPORTED_MODULE_2__]);
([_env_server_mjs__WEBPACK_IMPORTED_MODULE_1__, _server_router__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// src/pages/api/trpc/[trpc].ts




// export API handler
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({
    router: _server_router__WEBPACK_IMPORTED_MODULE_2__/* .appRouter */ .q,
    createContext: _server_router_context__WEBPACK_IMPORTED_MODULE_3__/* .createContext */ .kr,
    onError: _env_server_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env.NODE_ENV */ .O.NODE_ENV === "development" ? ({ path , error  })=>{
        console.error(`❌ tRPC failed on ${path}: ${error}`);
    } : undefined
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "kr": () => (/* binding */ createContext),
  "p7": () => (/* binding */ createRouter)
});

// UNUSED EXPORTS: createContextInner

;// CONCATENATED MODULE: external "@trpc/server"
const server_namespaceObject = require("@trpc/server");
;// CONCATENATED MODULE: ./src/server/router/context.ts
// src/server/router/context.ts

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/ const createContextInner = async (opts)=>{
    return {};
};
/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/ const createContext = async (opts)=>{
    return await createContextInner({});
};
const createRouter = ()=>server_namespaceObject.router();


/***/ }),

/***/ 3143:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ exampleRouter)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8588);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__]);
zod__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const exampleRouter = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .createRouter */ .p7)().query("hello", {
    input: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        text: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullish()
    }).nullish(),
    resolve ({ input  }) {
        return {
            greeting: `Hello ${input?.text ?? "world"}`
        };
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2622:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8588);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3143);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_example__WEBPACK_IMPORTED_MODULE_2__]);
_example__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// src/server/router/index.ts



const appRouter = (0,_context__WEBPACK_IMPORTED_MODULE_0__/* .createRouter */ .p7)().transformer((superjson__WEBPACK_IMPORTED_MODULE_1___default())).merge("example.", _example__WEBPACK_IMPORTED_MODULE_2__/* .exampleRouter */ .z);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9838:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ env),
/* harmony export */   "o": () => (/* binding */ formatErrors)
/* harmony export */ });
/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3538);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__]);
_schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-check

const _clientEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__/* .clientSchema.safeParse */ .Xq.safeParse(_schema_mjs__WEBPACK_IMPORTED_MODULE_0__/* .clientEnv */ .xZ);
const formatErrors = (/** @type {import('zod').ZodFormattedError<Map<string,string>,string>} */ errors)=>Object.entries(errors).map(([name, value])=>{
        if (value && "_errors" in value) return `${name}: ${value._errors.join(", ")}\n`;
    }).filter(Boolean);
if (_clientEnv.success === false) {
    console.error("❌ Invalid environment variables:\n", ...formatErrors(_clientEnv.error.format()));
    throw new Error("Invalid environment variables");
}
/**
 * Validate that client-side environment variables are exposed to the client.
 */ for (let key of Object.keys(_clientEnv.data)){
    if (!key.startsWith("NEXT_PUBLIC_")) {
        console.warn(`❌ Invalid public environment variable name: ${key}. It must begin with 'NEXT_PUBLIC_'`);
        throw new Error("Invalid public environment variable name");
    }
}
const env = _clientEnv.data;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3538:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rz": () => (/* binding */ serverSchema),
/* harmony export */   "Xq": () => (/* binding */ clientSchema),
/* harmony export */   "xZ": () => (/* binding */ clientEnv)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-check

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */ const serverSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
    NODE_ENV: zod__WEBPACK_IMPORTED_MODULE_0__.z["enum"]([
        "development",
        "test",
        "production"
    ])
});
/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */ const clientSchema = zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
});
/**
 * You can't destruct `process.env` as a regular object, so you have to do
 * it manually here. This is because Next.js evaluates this at build time,
 * and only used environment variables are included in the build.
 * @type {{ [k in keyof z.infer<typeof clientSchema>]: z.infer<typeof clientSchema>[k] | undefined }}
 */ const clientEnv = {
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2590:
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ env)
/* harmony export */ });
/* harmony import */ var _schema_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3538);
/* harmony import */ var _client_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__]);
([_schema_mjs__WEBPACK_IMPORTED_MODULE_0__, _client_mjs__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// @ts-check
/**
 * This file is included in `/next.config.mjs` which ensures the app isn't built with invalid env vars.
 * It has to be a `.mjs`-file to be imported there.
 */ 

const _serverEnv = _schema_mjs__WEBPACK_IMPORTED_MODULE_0__/* .serverSchema.safeParse */ .Rz.safeParse(process.env);
if (_serverEnv.success === false) {
    console.error("❌ Invalid environment variables:\n", ...(0,_client_mjs__WEBPACK_IMPORTED_MODULE_1__/* .formatErrors */ .o)(_serverEnv.error.format()));
    throw new Error("Invalid environment variables");
}
/**
 * Validate that server-side environment variables are not exposed to the client.
 */ for (let key of Object.keys(_serverEnv.data)){
    if (key.startsWith("NEXT_PUBLIC_")) {
        console.warn("❌ You are exposing a server-side env-variable:", key);
        throw new Error("You are exposing a server-side env-variable");
    }
}
const env = {
    ..._serverEnv.data,
    ..._client_mjs__WEBPACK_IMPORTED_MODULE_1__/* .env */ .O
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [445], () => (__webpack_exec__(395)));
module.exports = __webpack_exports__;

})();