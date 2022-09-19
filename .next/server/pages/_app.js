"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9324:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@trpc/client/links/httpBatchLink"
const httpBatchLink_namespaceObject = require("@trpc/client/links/httpBatchLink");
;// CONCATENATED MODULE: external "@trpc/client/links/loggerLink"
const loggerLink_namespaceObject = require("@trpc/client/links/loggerLink");
// EXTERNAL MODULE: ./node_modules/@trpc/next/dist/trpc-next.cjs.js
var trpc_next_cjs = __webpack_require__(1820);
;// CONCATENATED MODULE: external "superjson"
const external_superjson_namespaceObject = require("superjson");
var external_superjson_default = /*#__PURE__*/__webpack_require__.n(external_superjson_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
// src/pages/_app.tsx






const MyApp = ({ Component , pageProps  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    });
};
const getBaseUrl = ()=>{
    if (false) {} // browser should use relative url
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};
/* harmony default export */ const _app = ((0,trpc_next_cjs.withTRPC)({
    config ({ ctx  }) {
        /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */ const url = `${getBaseUrl()}/api/trpc`;
        return {
            links: [
                (0,loggerLink_namespaceObject.loggerLink)({
                    enabled: (opts)=> false || opts.direction === "down" && opts.result instanceof Error
                }),
                (0,httpBatchLink_namespaceObject.httpBatchLink)({
                    url
                }), 
            ],
            url,
            transformer: (external_superjson_default())
        };
    },
    /**
   * @link https://trpc.io/docs/ssr
   */ ssr: false
})(MyApp));


/***/ }),

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 7583:
/***/ ((module) => {

module.exports = require("react-ssr-prepass");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [938], () => (__webpack_exec__(9324)));
module.exports = __webpack_exports__;

})();