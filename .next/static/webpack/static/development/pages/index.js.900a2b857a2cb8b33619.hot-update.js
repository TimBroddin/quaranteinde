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
/* harmony import */ var _useAnalytics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../useAnalytics */ "./useAnalytics.js");


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
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(react_confetti__WEBPACK_IMPORTED_MODULE_5___default.a, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }
      }));
    } else {
      // Render a countdown
      return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        id: "1710484668",
        __self: _this
      }, ".text.jsx-1710484668{font-size:50px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnNCLEFBRzhCLGVBQ0csa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3N0cmluZ3NcIjtcbmltcG9ydCB7IHVzZUFuYWx5dGljcyB9IGZyb20gXCIuLi91c2VBbmFseXRpY3NcIjtcblxuY29uc3QgZ2V0U3RyaW5nID0gKHN0ciwgbGFuZykgPT4ge1xuICByZXR1cm4gc3RyaW5nc1tzdHJdW2xhbmddO1xufTtcblxuY29uc3QgY3JlYXRlUmVuZGVyZXIgPSBsYW5nID0+IHtcbiAgcmV0dXJuICh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSkgPT4ge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIC8vIFJlbmRlciBhIGNvbXBsZXRlZCBzdGF0ZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q29uZmV0dGkgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8c3Ryb25nPntkYXlzfTwvc3Ryb25nPiZuYnNwO1xuICAgICAgICAgICAge2dldFN0cmluZyhkYXlzID09PSAxID8gXCJkYXlcIiA6IFwiZGF5c1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57aG91cnN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhob3VycyA9PT0gMSA/IFwiaG91clwiIDogXCJob3Vyc1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57bWludXRlc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKG1pbnV0ZXMgPT09IDEgPyBcIm1pbnV0ZVwiIDogXCJtaW51dGVzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPntzZWNvbmRzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoc2Vjb25kcyA9PT0gMSA/IFwic2Vjb25kXCIgOiBcInNlY29uZHNcIiwgbGFuZyl9LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgSW5kZXggPSAoeyBsYW5ndWFnZSB9KSA9PiB7XG4gIHVzZUFuYWx5dGljcygpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgIH0sIDUwKTtcbiAgfSk7XG5cbiAgLy9yZXR1cm4gPENvdW50ZG93biBkYXRlPXtuZXcgRGF0ZSgyMDIwLCAzLCAyMCl9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz47XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2dldFN0cmluZyhcInRpdGxlXCIsIGxhbmd1YWdlKX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9neWwydXhmLmNzc1wiXG4gICAgICAgID48L2xpbms+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9mYXYucG5nXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICBsYW5ndWFnZSA9PT0gXCJubFwiXG4gICAgICAgICAgICAgID8gYGh0dHBzOi8vcXVhcmFudGVpbmRlLmJlYFxuICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9maW5xdWFyYW50YWluZS5iZVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17Z2V0U3RyaW5nKFwidGl0bGVcIiwgbGFuZ3VhZ2UpfSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9e2dldFN0cmluZyhcImRlc2NyaXB0aW9uXCIsIGxhbmd1YWdlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgIGxhbmd1YWdlID09PSBcIm5sXCJcbiAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9xdWFyYW50ZWluZGUuYmUvb2cucG5nYFxuICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9maW5xdWFyYW50YWluZS5iZS9vZy5wbmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtnZXRTdHJpbmcoXCJ0aXRsZVwiLCBsYW5ndWFnZSl9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpsb2NhbGVcIlxuICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlID09PSBcIm5sXCIgPyBcIm5sX0JFXCIgOiBcImZyX0JFXCJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9e2dldFN0cmluZyhcImRlc2NyaXB0aW9uXCIsIGxhbmd1YWdlKX1cbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICAgIGhyZWY9e2Ake1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IFwibmxcIlxuICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9maW5xdWFyYW50YWluLmJlXCJcbiAgICAgICAgICAgICAgOiBcImh0dHBzOi8vcXVhcmFudGVpbmRlLmJlXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBocmVmTGFuZz17YCR7bGFuZ3VhZ2UgPT09IFwibmxcIiA/IFwiZnJcIiA6IFwibmxcIn1gfVxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogbGV0dGVyLWdvdGhpYy1zdGQsIG1vbm9zcGFjZTtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY3JlZGl0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNyZWRpdCBhIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtsb2FkZWQgPyAoXG4gICAgICAgICAgPENvdW50ZG93blxuICAgICAgICAgICAgZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfVxuICAgICAgICAgICAgcmVuZGVyZXI9e2NyZWF0ZVJlbmRlcmVyKGxhbmd1YWdlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPHA+e2dldFN0cmluZyhcImhlYWRpbmdcIiwgbGFuZ3VhZ2UpfTwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjcmVkaXRcIj57Z2V0U3RyaW5nKFwiY3JlZGl0XCIsIGxhbmd1YWdlKX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57Z2V0U3RyaW5nKFwiZGlzY2xhaW1lclwiLCBsYW5ndWFnZSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIHJlcSB9KSA9PiB7XG4gIGlmIChyZXEgJiYgcmVzKSB7XG4gICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMuaG9zdCk7XG4gICAgaWYgKHJlcS5oZWFkZXJzLmhvc3QuaW5kZXhPZihcImZpbnF1YXJhbnRhaW5lLmJlXCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2U6IFwibmxcIlxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgbGFuZ3VhZ2U6IFwibmxcIiB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
        className: "jsx-1710484668" + " " + "text",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, days), "\xA0", getString(days === 1 ? "day" : "days", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, hours), " ", getString(hours === 1 ? "hour" : "hours", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, minutes), " ", getString(minutes === 1 ? "minute" : "minutes", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, seconds), " ", getString(seconds === 1 ? "second" : "seconds", lang), "."));
    }
  };
};

var Index = function Index(_ref2) {
  var language = _ref2.language;
  Object(_useAnalytics__WEBPACK_IMPORTED_MODULE_8__["useAnalytics"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loaded = _useState[0],
      setLoaded = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setTimeout(function () {
      setLoaded(true);
    }, 50);
  }); //return <Countdown date={new Date(2020, 3, 20)} renderer={renderer} />;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, getString("title", language)), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/gyl2uxf.css",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "icon",
    type: "image/png",
    href: "/fav.png",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: language === "nl" ? "https://quaranteinde.be" : "https://finquarantaine.be",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: getString("title", language),
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: getString("description", language),
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: language === "nl" ? "https://quaranteinde.be/og.png" : "https://finquarantaine.be/og.png",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1200",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "630",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: getString("title", language),
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:locale",
    content: language === "nl" ? "nl_BE" : "fr_BE",
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: getString("description", language),
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "alternate",
    href: "".concat(language === "nl" ? "https://finquarantain.be" : "https://quaranteinde.be"),
    hrefLang: "".concat(language === "nl" ? "fr" : "nl"),
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2474381923",
    __self: _this
  }, ".container.jsx-2474381923{margin:0 auto;margin-top:100px;width:80vw;text-align:center;font-family:letter-gothic-std,monospace;font-weight:400;font-style:normal;}.credit.jsx-2474381923{background-color:black;color:white;display:inline-block;padding:3px;text-align:left;}.disclaimer.jsx-2474381923{margin-top:100px;}.credit.jsx-2474381923 a.jsx-2474381923{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSGtCLEFBR3lCLEFBYVMsQUFRTixBQUlMLFlBQ2QsRUF6Qm1CLEdBcUJuQixNQVJjLFFBWkQsSUFhVSxPQVpILGNBYU4sSUFYNkIsUUFZekIsZ0JBQ2xCLGdCQVhrQixnQkFFRSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3RpbWJyb2RkaW4vU2l0ZXMvcXVhcmFudGVpbmRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi4vc3RyaW5nc1wiO1xuaW1wb3J0IHsgdXNlQW5hbHl0aWNzIH0gZnJvbSBcIi4uL3VzZUFuYWx5dGljc1wiO1xuXG5jb25zdCBnZXRTdHJpbmcgPSAoc3RyLCBsYW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmdzW3N0cl1bbGFuZ107XG59O1xuXG5jb25zdCBjcmVhdGVSZW5kZXJlciA9IGxhbmcgPT4ge1xuICByZXR1cm4gKHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgLy8gUmVuZGVyIGEgY29tcGxldGVkIHN0YXRlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDb25mZXR0aSAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciBhIGNvdW50ZG93blxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e2RheXN9PC9zdHJvbmc+Jm5ic3A7XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKGRheXMgPT09IDEgPyBcImRheVwiIDogXCJkYXlzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPntob3Vyc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKGhvdXJzID09PSAxID8gXCJob3VyXCIgOiBcImhvdXJzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPnttaW51dGVzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcobWludXRlcyA9PT0gMSA/IFwibWludXRlXCIgOiBcIm1pbnV0ZXNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e3NlY29uZHN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhzZWNvbmRzID09PSAxID8gXCJzZWNvbmRcIiA6IFwic2Vjb25kc1wiLCBsYW5nKX0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBJbmRleCA9ICh7IGxhbmd1YWdlIH0pID0+IHtcbiAgdXNlQW5hbHl0aWNzKCk7XG4gIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkZWQodHJ1ZSk7XG4gICAgfSwgNTApO1xuICB9KTtcblxuICAvL3JldHVybiA8Q291bnRkb3duIGRhdGU9e25ldyBEYXRlKDIwMjAsIDMsIDIwKX0gcmVuZGVyZXI9e3JlbmRlcmVyfSAvPjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57Z2V0U3RyaW5nKFwidGl0bGVcIiwgbGFuZ3VhZ2UpfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2d5bDJ1eGYuY3NzXCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIHR5cGU9XCJpbWFnZS9wbmdcIiBocmVmPVwiL2Zhdi5wbmdcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIG1heGltdW0tc2NhbGU9MS4wLCB1c2VyLXNjYWxhYmxlPW5vXCJcbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgIGxhbmd1YWdlID09PSBcIm5sXCJcbiAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9xdWFyYW50ZWluZGUuYmVgXG4gICAgICAgICAgICAgIDogXCJodHRwczovL2ZpbnF1YXJhbnRhaW5lLmJlXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtnZXRTdHJpbmcoXCJ0aXRsZVwiLCBsYW5ndWFnZSl9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD17Z2V0U3RyaW5nKFwiZGVzY3JpcHRpb25cIiwgbGFuZ3VhZ2UpfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxuICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IFwibmxcIlxuICAgICAgICAgICAgICA/IGBodHRwczovL3F1YXJhbnRlaW5kZS5iZS9vZy5wbmdgXG4gICAgICAgICAgICAgIDogXCJodHRwczovL2ZpbnF1YXJhbnRhaW5lLmJlL29nLnBuZ1wiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOndpZHRoXCIgY29udGVudD1cIjEyMDBcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOmhlaWdodFwiIGNvbnRlbnQ9XCI2MzBcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2dldFN0cmluZyhcInRpdGxlXCIsIGxhbmd1YWdlKX0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiXG4gICAgICAgICAgY29udGVudD17bGFuZ3VhZ2UgPT09IFwibmxcIiA/IFwibmxfQkVcIiA6IFwiZnJfQkVcIn1cbiAgICAgICAgLz5cblxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD17Z2V0U3RyaW5nKFwiZGVzY3JpcHRpb25cIiwgbGFuZ3VhZ2UpfVxuICAgICAgICA+PC9tZXRhPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFsdGVybmF0ZVwiXG4gICAgICAgICAgaHJlZj17YCR7XG4gICAgICAgICAgICBsYW5ndWFnZSA9PT0gXCJubFwiXG4gICAgICAgICAgICAgID8gXCJodHRwczovL2ZpbnF1YXJhbnRhaW4uYmVcIlxuICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9xdWFyYW50ZWluZGUuYmVcIlxuICAgICAgICAgIH1gfVxuICAgICAgICAgIGhyZWZMYW5nPXtgJHtsYW5ndWFnZSA9PT0gXCJubFwiID8gXCJmclwiIDogXCJubFwifWB9XG4gICAgICAgID48L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBsZXR0ZXItZ290aGljLXN0ZCwgbW9ub3NwYWNlO1xuXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jcmVkaXQge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAuZGlzY2xhaW1lciB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY3JlZGl0IGEge1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge2xvYWRlZCA/IChcbiAgICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgICBkYXRlPXtuZXcgRGF0ZSgyMDIwLCAzLCAyMCl9XG4gICAgICAgICAgICByZW5kZXJlcj17Y3JlYXRlUmVuZGVyZXIobGFuZ3VhZ2UpfVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgICA8cD57Z2V0U3RyaW5nKFwiaGVhZGluZ1wiLCBsYW5ndWFnZSl9PC9wPlxuXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImNyZWRpdFwiPntnZXRTdHJpbmcoXCJjcmVkaXRcIiwgbGFuZ3VhZ2UpfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGlzY2xhaW1lclwiPntnZXRTdHJpbmcoXCJkaXNjbGFpbWVyXCIsIGxhbmd1YWdlKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcywgcmVxIH0pID0+IHtcbiAgaWYgKHJlcSAmJiByZXMpIHtcbiAgICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycy5ob3N0KTtcbiAgICBpZiAocmVxLmhlYWRlcnMuaG9zdC5pbmRleE9mKFwiZmlucXVhcmFudGFpbmUuYmVcIikgIT09IC0xKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYW5ndWFnZTogXCJmclwiXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYW5ndWFnZTogXCJubFwiXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBsYW5ndWFnZTogXCJubFwiIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
    className: "jsx-2474381923" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, loaded ? __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date: new Date(2020, 3, 20),
    renderer: createRenderer(language),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }) : null, __jsx("p", {
    className: "jsx-2474381923",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, getString("heading", language)), __jsx("p", {
    className: "jsx-2474381923" + " " + "credit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, getString("credit", language)), __jsx("p", {
    className: "jsx-2474381923" + " " + "disclaimer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, getString("disclaimer", language))));
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
//# sourceMappingURL=index.js.900a2b857a2cb8b33619.hot-update.js.map