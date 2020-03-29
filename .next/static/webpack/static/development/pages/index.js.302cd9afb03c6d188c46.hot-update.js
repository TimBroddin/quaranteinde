webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-countdown */ "./node_modules/react-countdown/dist/index.es.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-confetti */ "./node_modules/react-confetti/dist/react-confetti.min.js");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../strings */ "./strings.js");


var _this = undefined,
    _jsxFileName = "/Users/timbroddin/Sites/quaranteinde/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







var getString = function getString(str, lang) {
  return _strings__WEBPACK_IMPORTED_MODULE_7__["strings"][str][lang];
};

var createRenderer = function createRenderer(lang) {
  return function (_ref) {
    var days = _ref.days,
        hours = _ref.hours,
        minutes = _ref.minutes,
        seconds = _ref.seconds,
        completed = _ref.completed;

    if (completed) {
      // Render a completed state
      return __jsx(react_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 14
        }
      });
    } else {
      // Render a countdown
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1710484668",
        __self: _this
      }, ".text.jsx-1710484668{font-size:50px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnNCLEFBRzhCLGVBQ0csa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi4vc3RyaW5nc1wiO1xuXG5jb25zdCBnZXRTdHJpbmcgPSAoc3RyLCBsYW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmdzW3N0cl1bbGFuZ107XG59O1xuXG5jb25zdCBjcmVhdGVSZW5kZXJlciA9IGxhbmcgPT4ge1xuICByZXR1cm4gKHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgLy8gUmVuZGVyIGEgY29tcGxldGVkIHN0YXRlXG4gICAgICByZXR1cm4gPENvbmZldHRpIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8c3Ryb25nPntkYXlzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoZGF5cyA9PT0gMSA/IFwiZGF5XCIgOiBcImRheXNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e2hvdXJzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoaG91cnMgPT09IDEgPyBcImhvdXJcIiA6IFwiaG91cnNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e21pbnV0ZXN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhtaW51dGVzID09PSAxID8gXCJtaW51dGVcIiA6IFwibWludXRlc1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57c2Vjb25kc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKHNlY29uZHMgPT09IDEgPyBcInNlY29uZFwiIDogXCJzZWNvbmRzXCIsIGxhbmcpfS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IEluZGV4ID0gKHsgbGFuZ3VhZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhsYW5ndWFnZSk7XG4gIC8vcmV0dXJuIDxDb3VudGRvd24gZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfSByZW5kZXJlcj17cmVuZGVyZXJ9IC8+O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntnZXRTdHJpbmcoXCJ0aXRsZVwiLCBsYW5ndWFnZSl9PC90aXRsZT5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfVxuICAgICAgICAgIHJlbmRlcmVyPXtjcmVhdGVSZW5kZXJlcihsYW5ndWFnZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxwPntnZXRTdHJpbmcoXCJoZWFkaW5nXCIsIGxhbmd1YWdlKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcywgcmVxIH0pID0+IHtcbiAgaWYgKHJlcSAmJiByZXMpIHtcbiAgICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycy5ob3N0KTtcbiAgICBpZiAocmVxLmhlYWRlcnMuaG9zdC5pbmRleE9mKFwiZmlucXVhcmFudGFpbmUuYmVcIikgIT09IC0xKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYW5ndWFnZTogXCJmclwiXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYW5ndWFnZTogXCJubFwiXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBsYW5ndWFnZTogXCJubFwiIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
        className: "jsx-1710484668" + " " + "text",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }
      }, __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 13
        }
      }, days), " ", getString(days === 1 ? "day" : "days", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 13
        }
      }, hours), " ", getString(hours === 1 ? "hour" : "hours", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, minutes), " ", getString(minutes === 1 ? "minute" : "minutes", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 13
        }
      }, seconds), " ", getString(seconds === 1 ? "second" : "seconds", lang), "."));
    }
  };
};

var Index = function Index(_ref2) {
  var language = _ref2.language;
  console.log(language); //return <Countdown date={new Date(2020, 3, 20)} renderer={renderer} />;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2867716147",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, getString("title", language))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2867716147",
    __self: _this
  }, ".container.jsx-2867716147{margin:0 auto;width:80vw;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRGtCLEFBR3lCLGNBQ0gsV0FDTyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3RpbWJyb2RkaW4vU2l0ZXMvcXVhcmFudGVpbmRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBDb3VudGRvd24gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xuaW1wb3J0IENvbmZldHRpIGZyb20gXCJyZWFjdC1jb25mZXR0aVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgc3RyaW5ncyB9IGZyb20gXCIuLi9zdHJpbmdzXCI7XG5cbmNvbnN0IGdldFN0cmluZyA9IChzdHIsIGxhbmcpID0+IHtcbiAgcmV0dXJuIHN0cmluZ3Nbc3RyXVtsYW5nXTtcbn07XG5cbmNvbnN0IGNyZWF0ZVJlbmRlcmVyID0gbGFuZyA9PiB7XG4gIHJldHVybiAoeyBkYXlzLCBob3VycywgbWludXRlcywgc2Vjb25kcywgY29tcGxldGVkIH0pID0+IHtcbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb21wbGV0ZWQgc3RhdGVcbiAgICAgIHJldHVybiA8Q29uZmV0dGkgLz47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciBhIGNvdW50ZG93blxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e2RheXN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhkYXlzID09PSAxID8gXCJkYXlcIiA6IFwiZGF5c1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57aG91cnN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhob3VycyA9PT0gMSA/IFwiaG91clwiIDogXCJob3Vyc1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57bWludXRlc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKG1pbnV0ZXMgPT09IDEgPyBcIm1pbnV0ZVwiIDogXCJtaW51dGVzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPntzZWNvbmRzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoc2Vjb25kcyA9PT0gMSA/IFwic2Vjb25kXCIgOiBcInNlY29uZHNcIiwgbGFuZyl9LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgSW5kZXggPSAoeyBsYW5ndWFnZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGxhbmd1YWdlKTtcbiAgLy9yZXR1cm4gPENvdW50ZG93biBkYXRlPXtuZXcgRGF0ZSgyMDIwLCAzLCAyMCl9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz47XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2dldFN0cmluZyhcInRpdGxlXCIsIGxhbmd1YWdlKX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICBkYXRlPXtuZXcgRGF0ZSgyMDIwLCAzLCAyMCl9XG4gICAgICAgICAgcmVuZGVyZXI9e2NyZWF0ZVJlbmRlcmVyKGxhbmd1YWdlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHA+e2dldFN0cmluZyhcImhlYWRpbmdcIiwgbGFuZ3VhZ2UpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzLCByZXEgfSkgPT4ge1xuICBpZiAocmVxICYmIHJlcykge1xuICAgIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzLmhvc3QpO1xuICAgIGlmIChyZXEuaGVhZGVycy5ob3N0LmluZGV4T2YoXCJmaW5xdWFyYW50YWluZS5iZVwiKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhbmd1YWdlOiBcImZyXCJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhbmd1YWdlOiBcIm5sXCJcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGxhbmd1YWdlOiBcIm5sXCIgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
    className: "jsx-2867716147" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date: new Date(2020, 3, 20),
    renderer: createRenderer(language),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "jsx-2867716147",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, getString("heading", language))));
};

Index.getInitialProps = function _callee(_ref3) {
  var res, req;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res = _ref3.res, req = _ref3.req;

          if (!(req && res)) {
            _context.next = 10;
            break;
          }

          console.log(req.headers.host);

          if (!(req.headers.host.indexOf("finquarantaine.be") !== -1)) {
            _context.next = 7;
            break;
          }

          return _context.abrupt("return", {
            language: "fr"
          });

        case 7:
          return _context.abrupt("return", {
            language: "nl"
          });

        case 8:
          _context.next = 11;
          break;

        case 10:
          return _context.abrupt("return", {
            language: "nl"
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.302cd9afb03c6d188c46.hot-update.js.map