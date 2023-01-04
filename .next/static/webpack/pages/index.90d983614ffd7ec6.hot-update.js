"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Work.jsx":
/*!**********************************!*\
  !*** ./components/Home/Work.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_masonry_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-css */ \"./node_modules/react-masonry-css/dist/react-masonry-css.module.js\");\n/* harmony import */ var _Customs_Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Customs/Section */ \"./components/Customs/Section.jsx\");\n/* harmony import */ var _Customs_WorkCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Customs/WorkCard */ \"./components/Customs/WorkCard.jsx\");\n\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Work = function() {\n    _s();\n    var categories = [\n        {\n            name: \"JavaScript\",\n            slug: \"JavaScript\"\n        },\n        {\n            name: \"React JS\",\n            slug: \"react-js\"\n        },\n        {\n            name: \"Node JS\",\n            slug: \"node-js\"\n        },\n        {\n            name: \"MERN Stack\",\n            slug: \"mern-stack\"\n        }\n    ];\n    var works = [\n        {\n            thumbnail: \"/images/work/work-1.jpg\",\n            title: \"MockUp Mobile App\",\n            description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.\",\n            status: 1,\n            categories: [\n                categories[1]\n            ],\n            demoURL: \"https://react-simple-filter.netlify.app/\",\n            codeURL: \"https://github.com/Habib-hs/react-filter-app\"\n        },\n        {\n            thumbnail: \"/images/work/work-2.jpg\",\n            title: \"Landing Page Using Tailwind CSS\",\n            description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit.\",\n            status: 2,\n            categories: [\n                categories[1]\n            ],\n            demoURL: \"https://www.youtube.com/watch?v=z9pzu8sGfhE&ab_channel=ThapaTechnical\",\n            codeURL: \"#code\"\n        },\n        {\n            thumbnail: \"/images/work/work-3.jpg\",\n            title: \"Website Design Using Tailwind CSS\",\n            description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.\",\n            status: 2,\n            categories: [\n                categories[0]\n            ],\n            demoURL: \"#demo\",\n            codeURL: \"#code\"\n        },\n        {\n            thumbnail: \"/images/work/work-4.jpg\",\n            title: \"Landing Page With CMS\",\n            description: \"Lorem, ipsum dolor sit amet.\",\n            status: 3,\n            categories: [],\n            demoURL: \"#demo\",\n            codeURL: \"#code\"\n        },\n        {\n            thumbnail: \"/images/work/work-5.jpg\",\n            title: \"hello dear\",\n            description: \"lorem\",\n            status: 2,\n            categories: [],\n            demoURL: \"#demo\",\n            codeURL: \"#code\"\n        }, \n    ];\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"all\"), 2), category = ref[0], setCategory = ref[1];\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState([]), 2), filteredWorks = ref1[0], setFilteredWorks = ref1[1];\n    var ref2 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        y: 0,\n        opacity: 1\n    }), 2), animateCard = ref2[0], setAnimateCard = ref2[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setFilteredWorks(works);\n    }, []);\n    var handleWorkFilter = function(category) {\n        setCategory(category);\n        setAnimateCard([\n            {\n                y: 100,\n                opacity: 0\n            }\n        ]);\n        setTimeout(function() {\n            setAnimateCard([\n                {\n                    y: 0,\n                    opacity: 1\n                }\n            ]);\n            if (category === \"all\") {\n                setFilteredWorks(works);\n            } else {\n                var workList = [];\n                works.forEach(function(work) {\n                    var workCategories = [];\n                    work.categories.forEach(function(category) {\n                        return workCategories.push(category.slug);\n                    });\n                    if (workCategories.includes(category)) {\n                        workList.push(work);\n                    }\n                });\n                setFilteredWorks(workList);\n            }\n        }, 400);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Customs_Section__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        id: \"work\",\n        title: \"Works\",\n        description: \"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.\",\n        subtitle: \"My Projects since last 5 years\",\n        className: \"!pb-14 md:!pb-28\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center m-auto flex-col text-center w-full mb-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"flex flex-wrap justify-center text-sm font-medium text-center\",\n                    children: [\n                        {\n                            name: \"All\",\n                            slug: \"all\"\n                        }\n                    ].concat((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(categories)).map(function(ct, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"m-1 mb-1\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: function() {\n                                    handleWorkFilter(ct.slug);\n                                },\n                                className: \" inline-block shadow-normal py-2.5 px-5 cursor-pointer rounded-full transition-all duration-300 text-textPrimary dark:text-textDarkPrimary bg-paper dark:bg-paperDark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white  \".concat(ct.slug == category && \"!text-white !bg-primary\"),\n                                children: ct.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                                lineNumber: 153,\n                                columnNumber: 15\n                            }, _this)\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                            lineNumber: 152,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                    lineNumber: 150,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                lineNumber: 149,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_masonry_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                breakpointCols: {\n                    default: 4,\n                    1100: 3,\n                    700: 2,\n                    500: 1\n                },\n                className: \"flex flex-wrap\",\n                children: filteredWorks.map(function(work, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div, {\n                        animate: animateCard,\n                        transition: {\n                            duration: 0.4,\n                            delayChildren: 0.4\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Customs_WorkCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], (0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])({}, work), void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                            lineNumber: 178,\n                            columnNumber: 13\n                        }, _this)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                        lineNumber: 173,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n                lineNumber: 168,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\Downloads\\\\tailwindcss-portfolio-main\\\\components\\\\Home\\\\Work.jsx\",\n        lineNumber: 142,\n        columnNumber: 5\n    }, _this);\n};\n_s(Work, \"1lmF8cSLKg8PJGnS5iMHNToBLu0=\");\n_c = Work;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Work);\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eUJBQUU7a0NBRWpELDRFQUFDN0MseURBQVEscUZBQUswQixJQUFJOzs7O2lDQUFJO3VCQUpqQlcsS0FBSzs7Ozs2QkFLQztpQkFDZCxDQUFDOzs7OztxQkFDTTs7Ozs7O2FBQ0YsQ0FDVjtBQUNKLENBQUM7R0EvS0twQyxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFpTFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvV29yay5qc3g/ZTA4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5cclxuaW1wb3J0IE1hc29ucnkgZnJvbSBcInJlYWN0LW1hc29ucnktY3NzXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9DdXN0b21zL1NlY3Rpb25cIjtcclxuaW1wb3J0IFdvcmtDYXJkIGZyb20gXCIuLi9DdXN0b21zL1dvcmtDYXJkXCI7XHJcblxyXG5jb25zdCBXb3JrID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICBzbHVnOiBcIkphdmFTY3JpcHRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiUmVhY3QgSlNcIixcclxuICAgICAgc2x1ZzogXCJyZWFjdC1qc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJOb2RlIEpTXCIsXHJcbiAgICAgIHNsdWc6IFwibm9kZS1qc1wiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJNRVJOIFN0YWNrXCIsXHJcbiAgICAgIHNsdWc6IFwibWVybi1zdGFja1wiLFxyXG4gICAgfVxyXG4gIFxyXG4gIF07XHJcbiAgY29uc3Qgd29ya3MgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRodW1ibmFpbDogXCIvaW1hZ2VzL3dvcmsvd29yay0xLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogXCJNb2NrVXAgTW9iaWxlIEFwcFwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgICBcIkxvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzcXVhbSB0ZW1wb3JpYnVzIHZlbGl0IGRpZ25pc3NpbW9zLlwiLFxyXG4gICAgICBzdGF0dXM6IDEsXHJcbiAgICAgIGNhdGVnb3JpZXM6IFsgY2F0ZWdvcmllc1sxXV0sXHJcbiAgICAgIGRlbW9VUkw6IFwiaHR0cHM6Ly9yZWFjdC1zaW1wbGUtZmlsdGVyLm5ldGxpZnkuYXBwL1wiLFxyXG4gICAgICBjb2RlVVJMOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9IYWJpYi1ocy9yZWFjdC1maWx0ZXItYXBwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aHVtYm5haWw6IFwiL2ltYWdlcy93b3JrL3dvcmstMi5qcGdcIixcclxuICAgICAgdGl0bGU6IFwiTGFuZGluZyBQYWdlIFVzaW5nIFRhaWx3aW5kIENTU1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cIixcclxuICAgICAgc3RhdHVzOiAyLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllc1sxXV0sXHJcbiAgICAgIGRlbW9VUkw6IFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj16OXB6dThzR2ZoRSZhYl9jaGFubmVsPVRoYXBhVGVjaG5pY2FsXCIsXHJcbiAgICAgIGNvZGVVUkw6IFwiI2NvZGVcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRodW1ibmFpbDogXCIvaW1hZ2VzL3dvcmsvd29yay0zLmpwZ1wiLFxyXG4gICAgICB0aXRsZTogXCJXZWJzaXRlIERlc2lnbiBVc2luZyBUYWlsd2luZCBDU1NcIixcclxuICAgICAgZGVzY3JpcHRpb246XHJcbiAgICAgICAgXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0gdGVtcG9yaWJ1cyB2ZWxpdCBkaWduaXNzaW1vcy5cIixcclxuICAgICAgc3RhdHVzOiAyLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllc1swXV0sXHJcbiAgICAgIGRlbW9VUkw6IFwiI2RlbW9cIixcclxuICAgICAgY29kZVVSTDogXCIjY29kZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGh1bWJuYWlsOiBcIi9pbWFnZXMvd29yay93b3JrLTQuanBnXCIsXHJcbiAgICAgIHRpdGxlOiBcIkxhbmRpbmcgUGFnZSBXaXRoIENNU1wiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQuXCIsXHJcbiAgICAgIHN0YXR1czogMyxcclxuICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgIGRlbW9VUkw6IFwiI2RlbW9cIixcclxuICAgICAgY29kZVVSTDogXCIjY29kZVwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGh1bWJuYWlsOiBcIi9pbWFnZXMvd29yay93b3JrLTUuanBnXCIsXHJcbiAgICAgIHRpdGxlOiBcImhlbGxvIGRlYXJcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwibG9yZW1cIixcclxuICAgICAgc3RhdHVzOiAyLFxyXG4gICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgZGVtb1VSTDogXCIjZGVtb1wiLFxyXG4gICAgICBjb2RlVVJMOiBcIiNjb2RlXCIsXHJcbiAgICB9XHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICB0aHVtYm5haWw6IFwiL2ltYWdlcy93b3JrL3dvcmstNi5qcGdcIixcclxuICAgIC8vICAgdGl0bGU6IFwiU2luZ2xlIFBhZ2UgU3RhdGljIFdlYnNpdGVcIixcclxuICAgIC8vICAgZGVzY3JpcHRpb246IFwiTG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXCIsXHJcbiAgICAvLyAgIHN0YXR1czogMixcclxuICAgIC8vICAgY2F0ZWdvcmllczogW2NhdGVnb3JpZXNbMF0sIGNhdGVnb3JpZXNbMl0sIGNhdGVnb3JpZXNbNF1dLFxyXG4gICAgLy8gICBkZW1vVVJMOiBcIiNkZW1vXCIsXHJcbiAgICAvLyAgIGNvZGVVUkw6IFwiI2NvZGVcIixcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgIHRodW1ibmFpbDogXCIvaW1hZ2VzL3dvcmsvd29yay03LmpwZ1wiLFxyXG4gICAgLy8gICB0aXRsZTogXCJMYW5kaW5nIFBhZ2UgVXNpbmcgTVVJXCIsXHJcbiAgICAvLyAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtLCBpcHN1bSBkb2xvciB2ZWxpdCBkaWduaXNzaW1vcy5cIixcclxuICAgIC8vICAgc3RhdHVzOiAzLFxyXG4gICAgLy8gICBjYXRlZ29yaWVzOiBbY2F0ZWdvcmllc1swXSwgY2F0ZWdvcmllc1s1XV0sXHJcbiAgICAvLyAgIGRlbW9VUkw6IFwiI2RlbW9cIixcclxuICAgIC8vICAgY29kZVVSTDogXCIjY29kZVwiLFxyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgdGh1bWJuYWlsOiBcIi9pbWFnZXMvd29yay93b3JrLTguanBnXCIsXHJcbiAgICAvLyAgIHRpdGxlOiBcIkxhbmRpbmcgUGFnZSB1c2luZyB0YWlsd2luZFwiLFxyXG4gICAgLy8gICBkZXNjcmlwdGlvbjpcclxuICAgIC8vICAgICBcIkxvcmVtIGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0gdGVtcG9yaWJ1c1wiLFxyXG4gICAgLy8gICBzdGF0dXM6IDIsXHJcbiAgICAvLyAgIGNhdGVnb3JpZXM6IFtjYXRlZ29yaWVzWzBdLCBjYXRlZ29yaWVzWzRdXSxcclxuICAgIC8vICAgZGVtb1VSTDogXCIjZGVtb1wiLFxyXG4gICAgLy8gICBjb2RlVVJMOiBcIiNjb2RlXCIsXHJcbiAgICAvLyB9LFxyXG4gIF07XHJcblxyXG4gIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoXCJhbGxcIik7XHJcbiAgY29uc3QgW2ZpbHRlcmVkV29ya3MsIHNldEZpbHRlcmVkV29ya3NdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFthbmltYXRlQ2FyZCwgc2V0QW5pbWF0ZUNhcmRdID0gUmVhY3QudXNlU3RhdGUoeyB5OiAwLCBvcGFjaXR5OiAxIH0pO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0RmlsdGVyZWRXb3Jrcyh3b3Jrcyk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVXb3JrRmlsdGVyID0gKGNhdGVnb3J5KSA9PiB7XHJcbiAgICBzZXRDYXRlZ29yeShjYXRlZ29yeSk7XHJcbiAgICBzZXRBbmltYXRlQ2FyZChbeyB5OiAxMDAsIG9wYWNpdHk6IDAgfV0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRBbmltYXRlQ2FyZChbeyB5OiAwLCBvcGFjaXR5OiAxIH1dKTtcclxuXHJcbiAgICAgIGlmIChjYXRlZ29yeSA9PT0gXCJhbGxcIikge1xyXG4gICAgICAgIHNldEZpbHRlcmVkV29ya3Mod29ya3MpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCB3b3JrTGlzdCA9IFtdO1xyXG4gICAgICAgIHdvcmtzLmZvckVhY2goKHdvcmspID0+IHtcclxuICAgICAgICAgIGxldCB3b3JrQ2F0ZWdvcmllcyA9IFtdO1xyXG4gICAgICAgICAgd29yay5jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PlxyXG4gICAgICAgICAgICB3b3JrQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3J5LnNsdWcpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKHdvcmtDYXRlZ29yaWVzLmluY2x1ZGVzKGNhdGVnb3J5KSkge1xyXG4gICAgICAgICAgICB3b3JrTGlzdC5wdXNoKHdvcmspO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNldEZpbHRlcmVkV29ya3Mod29ya0xpc3QpO1xyXG4gICAgICB9XHJcbiAgICB9LCA0MDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U2VjdGlvblxyXG4gICAgICBpZD1cIndvcmtcIlxyXG4gICAgICB0aXRsZT1cIldvcmtzXCJcclxuICAgICAgZGVzY3JpcHRpb249XCJMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpc3F1YW0gdGVtcG9yaWJ1cyB2ZWxpdCBkaWduaXNzaW1vcy5cIlxyXG4gICAgICBzdWJ0aXRsZT1cIk15IFByb2plY3RzIHNpbmNlIGxhc3QgNSB5ZWFyc1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cIiFwYi0xNCBtZDohcGItMjhcIlxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG0tYXV0byBmbGV4LWNvbCB0ZXh0LWNlbnRlciB3LWZ1bGwgbWItMTBcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXIgdGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAge1t7IG5hbWU6IFwiQWxsXCIsIHNsdWc6IFwiYWxsXCIgfSwgLi4uY2F0ZWdvcmllc10ubWFwKChjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm0tMSBtYi0xXCIga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVXb3JrRmlsdGVyKGN0LnNsdWcpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCBpbmxpbmUtYmxvY2sgc2hhZG93LW5vcm1hbCBweS0yLjUgcHgtNSBjdXJzb3ItcG9pbnRlciByb3VuZGVkLWZ1bGwgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIHRleHQtdGV4dFByaW1hcnkgZGFyazp0ZXh0LXRleHREYXJrUHJpbWFyeSBiZy1wYXBlciBkYXJrOmJnLXBhcGVyRGFyayBob3ZlcjpiZy1wcmltYXJ5IGhvdmVyOnRleHQtd2hpdGUgZGFyazpob3ZlcjpiZy1wcmltYXJ5IGRhcms6aG92ZXI6dGV4dC13aGl0ZSAgJHtcclxuICAgICAgICAgICAgICAgICAgY3Quc2x1ZyA9PSBjYXRlZ29yeSAmJiBcIiF0ZXh0LXdoaXRlICFiZy1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TWFzb25yeVxyXG4gICAgICAgIGJyZWFrcG9pbnRDb2xzPXt7IGRlZmF1bHQ6IDQsIDExMDA6IDMsIDcwMDogMiwgNTAwOiAxIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIlxyXG4gICAgICA+XHJcbiAgICAgICAge2ZpbHRlcmVkV29ya3MubWFwKCh3b3JrLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgYW5pbWF0ZT17YW5pbWF0ZUNhcmR9XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuNCwgZGVsYXlDaGlsZHJlbjogMC40IH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxXb3JrQ2FyZCB7Li4ud29ya30gLz5cclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgPC9TZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtb3Rpb24iLCJNYXNvbnJ5IiwiU2VjdGlvbiIsIldvcmtDYXJkIiwiV29yayIsImNhdGVnb3JpZXMiLCJuYW1lIiwic2x1ZyIsIndvcmtzIiwidGh1bWJuYWlsIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXR1cyIsImRlbW9VUkwiLCJjb2RlVVJMIiwidXNlU3RhdGUiLCJjYXRlZ29yeSIsInNldENhdGVnb3J5IiwiZmlsdGVyZWRXb3JrcyIsInNldEZpbHRlcmVkV29ya3MiLCJ5Iiwib3BhY2l0eSIsImFuaW1hdGVDYXJkIiwic2V0QW5pbWF0ZUNhcmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVXb3JrRmlsdGVyIiwic2V0VGltZW91dCIsIndvcmtMaXN0IiwiZm9yRWFjaCIsIndvcmsiLCJ3b3JrQ2F0ZWdvcmllcyIsInB1c2giLCJpbmNsdWRlcyIsImlkIiwic3VidGl0bGUiLCJjbGFzc05hbWUiLCJkaXYiLCJ1bCIsIm1hcCIsImN0IiwiaW5kZXgiLCJsaSIsIm9uQ2xpY2siLCJicmVha3BvaW50Q29scyIsImRlZmF1bHQiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZGVsYXlDaGlsZHJlbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/Work.jsx\n"));

/***/ })

});