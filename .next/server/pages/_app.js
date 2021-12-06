"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-icons/fc"
const fc_namespaceObject = require("react-icons/fc");
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: external "react-icons/fi"
const fi_namespaceObject = require("react-icons/fi");
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Navbar.jsx







function Navbar() {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Flex, {
    p: "2",
    borderBottom: "1px",
    borderColor: "gray.100",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      fontSize: "3xl",
      color: "blue.400",
      fontWeight: "bold",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        paddingLeft: "2",
        children: "Realtor"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Spacer, {}), /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.MenuButton, {
          as: react_.IconButton,
          icon: /*#__PURE__*/jsx_runtime_.jsx(fc_namespaceObject.FcMenu, {}),
          variant: "outlined",
          color: "red.400"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.MenuList, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
              icon: /*#__PURE__*/jsx_runtime_.jsx(fc_namespaceObject.FcHome, {}),
              children: "Home"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/search",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
              icon: /*#__PURE__*/jsx_runtime_.jsx(bs_.BsSearch, {}),
              children: "Search"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/search?purpose=for-sale",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
              icon: /*#__PURE__*/jsx_runtime_.jsx(fc_namespaceObject.FcAbout, {}),
              children: "Buy Property"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
            href: "/search?purpose=for-rent",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx(react_.MenuItem, {
              icon: /*#__PURE__*/jsx_runtime_.jsx(fi_namespaceObject.FiKey, {}),
              children: "Rent Property"
            })
          })]
        })]
      })
    })]
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Footer.jsx



function Footer() {
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Box, {
    textAlign: "center",
    p: "5",
    color: "gray.600",
    borderTop: "1px",
    borderColor: "gray.100",
    children: "2021 Realtor, Inc."
  });
}
;// CONCATENATED MODULE: ./components/Layout.jsx








const Layout = ({
  children
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx("title", {
      children: "Real Estate"
    })
  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Box, {
    maxWidth: "1280px",
    m: "auto",
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Navbar, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: children
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Footer, {})
    })]
  })]
});

/* harmony default export */ const components_Layout = (Layout);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function MyApp({
  Component,
  pageProps
}) {
  external_nprogress_default().configure({
    showSpinner: false
  });
  router_default().events.on("routeChangeStart", () => {
    external_nprogress_default().start();
  });
  router_default().events.on("routeChangeComplete", () => {
    external_nprogress_default().done();
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css",
        integrity: "sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==",
        crossOrigin: "anonymous",
        referrerPolicy: "no-referrer"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.ChakraProvider, {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    })]
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 567:
/***/ ((module) => {

module.exports = require("react-icons/bs");

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
var __webpack_exports__ = __webpack_require__.X(0, [639,664], () => (__webpack_exec__(1273)));
module.exports = __webpack_exports__;

})();