"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/robots",{

/***/ "./pages/robots.js":
/*!*************************!*\
  !*** ./pages/robots.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_pinse_Desktop_Senior_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_pinse_Desktop_Senior_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_pinse_Desktop_Senior_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/next/dist/build/polyfills/fetch/index.js\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar Robots = function(props) {\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Robots\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: \"/\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    children: \"Home\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                    lineNumber: 9,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                children: props.robots.map(function(robot) {\n                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"robots/\".concat(robot.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                children: robot.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                                lineNumber: 16,\n                                columnNumber: 25\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                            lineNumber: 15,\n                            columnNumber: 25\n                        }, _this1)\n                    }, robot.id, false, {\n                        fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, _this1);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n                lineNumber: 11,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\pinse\\\\Desktop\\\\Senior\\\\next-ssr\\\\pages\\\\robots.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, _this));\n};\n_c = Robots;\n//Before we load up robots, get the data for it and load it up as robots\nRobots.getInitialProps = _asyncToGenerator(C_Users_pinse_Desktop_Senior_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var response, data;\n    return C_Users_pinse_Desktop_Senior_next_ssr_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()('https://jsonplaceholder.typicode.com/users');\n            case 2:\n                response = _ctx.sent;\n                _ctx.next = 5;\n                return response.json();\n            case 5:\n                data = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    robots: data\n                });\n            case 7:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (Robots);\nvar _c;\n$RefreshReg$(_c, \"Robots\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yb2JvdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFdEMsR0FBSyxDQUFDRSxNQUFNLEdBQUcsUUFBUSxDQUFQQyxLQUFLLEVBQUksQ0FBQzs7SUFDdEIsTUFBTSw2RUFDREMsQ0FBRzs7d0ZBQ0hDLENBQUU7MEJBQUMsQ0FBTTs7Ozs7O3dGQUNUTCxrREFBSTtnQkFBQ00sSUFBSSxFQUFDLENBQUc7c0dBQ1RDLENBQU07OEJBQUMsQ0FBSTs7Ozs7Ozs7Ozs7d0ZBRWZILENBQUc7MEJBRUlELEtBQUssQ0FBQ0ssTUFBTSxDQUFDQyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsS0FBSztrQ0FDbEIsTUFBTSwrREFBTEMsQ0FBRTs4R0FDRVgsa0RBQUk7NEJBQUNNLElBQUksRUFBRyxDQUFPLFNBQVcsT0FBVEksS0FBSyxDQUFDRSxFQUFFO2tIQUM3QkMsQ0FBQzswQ0FBRUgsS0FBSyxDQUFDSSxJQUFJOzs7Ozs7Ozs7Ozt1QkFGVEosS0FBSyxDQUFDRSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztBQVlyQyxDQUFDO0tBdEJLVixNQUFNO0FBdUJaLEVBQXdFO0FBQ3hFQSxNQUFNLENBQUNhLGVBQWUsc0tBQUcsUUFBUSxXQUFHLENBQUM7UUFDM0JDLFFBQVEsRUFDUkMsSUFBSTs7Ozs7dUJBRGFoQix5REFBSyxDQUFDLENBQTRDOztnQkFBbkVlLFFBQVE7O3VCQUNLQSxRQUFRLENBQUNFLElBQUk7O2dCQUExQkQsSUFBSTs2Q0FDSCxDQUFDO29CQUNKVCxNQUFNLEVBQUVTLElBQUk7Z0JBQ2hCLENBQUM7Ozs7OztBQUNMLENBQUM7QUFDRCwrREFBZWYsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3JvYm90cy5qcz82ODAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcclxuXHJcbmNvbnN0IFJvYm90cyA9IChwcm9wcykgPT57XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+IFxyXG4gICAgICAgIDxoMT5Sb2JvdHM8L2gxPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9Jy8nPlxyXG4gICAgICAgICAgICA8YnV0dG9uPkhvbWU8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMucm9ib3RzLm1hcChyb2JvdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cm9ib3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgcm9ib3RzLyR7cm9ib3QuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntyb2JvdC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4vL0JlZm9yZSB3ZSBsb2FkIHVwIHJvYm90cywgZ2V0IHRoZSBkYXRhIGZvciBpdCBhbmQgbG9hZCBpdCB1cCBhcyByb2JvdHNcclxuUm9ib3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+e1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3VzZXJzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcm9ib3RzOiBkYXRhXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUm9ib3RzOyJdLCJuYW1lcyI6WyJMaW5rIiwiZmV0Y2giLCJSb2JvdHMiLCJwcm9wcyIsImRpdiIsImgxIiwiaHJlZiIsImJ1dHRvbiIsInJvYm90cyIsIm1hcCIsInJvYm90IiwibGkiLCJpZCIsImEiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzcG9uc2UiLCJkYXRhIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/robots.js\n");

/***/ })

});