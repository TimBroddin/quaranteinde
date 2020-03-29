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
      }, ".text.jsx-1710484668{font-size:50px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnNCLEFBRzhCLGVBQ0csa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi4vc3RyaW5nc1wiO1xuXG5jb25zdCBnZXRTdHJpbmcgPSAoc3RyLCBsYW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmdzW3N0cl1bbGFuZ107XG59O1xuXG5jb25zdCBjcmVhdGVSZW5kZXJlciA9IGxhbmcgPT4ge1xuICByZXR1cm4gKHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgLy8gUmVuZGVyIGEgY29tcGxldGVkIHN0YXRlXG4gICAgICByZXR1cm4gPENvbmZldHRpIC8+O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8c3Ryb25nPntkYXlzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoZGF5cyA9PT0gMSA/IFwiZGF5XCIgOiBcImRheXNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e2hvdXJzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoaG91cnMgPT09IDEgPyBcImhvdXJcIiA6IFwiaG91cnNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e21pbnV0ZXN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhtaW51dGVzID09PSAxID8gXCJtaW51dGVcIiA6IFwibWludXRlc1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57c2Vjb25kc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKHNlY29uZHMgPT09IDEgPyBcInNlY29uZFwiIDogXCJzZWNvbmRzXCIsIGxhbmcpfS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IEluZGV4ID0gKHsgbGFuZ3VhZ2UgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhsYW5ndWFnZSk7XG4gIC8vcmV0dXJuIDxDb3VudGRvd24gZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfSByZW5kZXJlcj17cmVuZGVyZXJ9IC8+O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntnZXRTdHJpbmcoXCJ0aXRsZVwiLCBsYW5ndWFnZSl9PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvZ3lsMnV4Zi5jc3NcIlxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogbGV0dGVyLWdvdGhpYy1zdGQsIG1vbm9zcGFjZTtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICBkYXRlPXtuZXcgRGF0ZSgyMDIwLCAzLCAyMCl9XG4gICAgICAgICAgcmVuZGVyZXI9e2NyZWF0ZVJlbmRlcmVyKGxhbmd1YWdlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHA+e2dldFN0cmluZyhcImhlYWRpbmdcIiwgbGFuZ3VhZ2UpfTwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjcmVkaXRcIj57Z2V0U3RyaW5nKFwiY3JlZGl0XCIsIGxhbmd1YWdlKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICh7IHJlcywgcmVxIH0pID0+IHtcbiAgaWYgKHJlcSAmJiByZXMpIHtcbiAgICBjb25zb2xlLmxvZyhyZXEuaGVhZGVycy5ob3N0KTtcbiAgICBpZiAocmVxLmhlYWRlcnMuaG9zdC5pbmRleE9mKFwiZmlucXVhcmFudGFpbmUuYmVcIikgIT09IC0xKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYW5ndWFnZTogXCJmclwiXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsYW5ndWFnZTogXCJubFwiXG4gICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBsYW5ndWFnZTogXCJubFwiIH07XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
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
    className: "jsx-171345800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, getString("title", language)), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/gyl2uxf.css",
    className: "jsx-171345800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "171345800",
    __self: _this
  }, ".container.jsx-171345800{margin:0 auto;margin-top:100px;width:80vw;text-align:center;font-family:letter-gothic-std,monospace;font-weight:400;font-style:normal;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGtCLEFBR3lCLGNBQ0csaUJBQ04sV0FDTyxrQkFFdUIsd0NBRXpCLGdCQUVFLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvdGltYnJvZGRpbi9TaXRlcy9xdWFyYW50ZWluZGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3N0cmluZ3NcIjtcblxuY29uc3QgZ2V0U3RyaW5nID0gKHN0ciwgbGFuZykgPT4ge1xuICByZXR1cm4gc3RyaW5nc1tzdHJdW2xhbmddO1xufTtcblxuY29uc3QgY3JlYXRlUmVuZGVyZXIgPSBsYW5nID0+IHtcbiAgcmV0dXJuICh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSkgPT4ge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIC8vIFJlbmRlciBhIGNvbXBsZXRlZCBzdGF0ZVxuICAgICAgcmV0dXJuIDxDb25mZXR0aSAvPjtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVuZGVyIGEgY291bnRkb3duXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgPHN0cm9uZz57ZGF5c308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKGRheXMgPT09IDEgPyBcImRheVwiIDogXCJkYXlzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPntob3Vyc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKGhvdXJzID09PSAxID8gXCJob3VyXCIgOiBcImhvdXJzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPnttaW51dGVzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcobWludXRlcyA9PT0gMSA/IFwibWludXRlXCIgOiBcIm1pbnV0ZXNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e3NlY29uZHN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhzZWNvbmRzID09PSAxID8gXCJzZWNvbmRcIiA6IFwic2Vjb25kc1wiLCBsYW5nKX0uXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKTtcbiAgICB9XG4gIH07XG59O1xuXG5jb25zdCBJbmRleCA9ICh7IGxhbmd1YWdlIH0pID0+IHtcbiAgY29uc29sZS5sb2cobGFuZ3VhZ2UpO1xuICAvL3JldHVybiA8Q291bnRkb3duIGRhdGU9e25ldyBEYXRlKDIwMjAsIDMsIDIwKX0gcmVuZGVyZXI9e3JlbmRlcmVyfSAvPjtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57Z2V0U3RyaW5nKFwidGl0bGVcIiwgbGFuZ3VhZ2UpfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2d5bDJ1eGYuY3NzXCJcbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGxldHRlci1nb3RoaWMtc3RkLCBtb25vc3BhY2U7XG5cbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8Q291bnRkb3duXG4gICAgICAgICAgZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfVxuICAgICAgICAgIHJlbmRlcmVyPXtjcmVhdGVSZW5kZXJlcihsYW5ndWFnZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxwPntnZXRTdHJpbmcoXCJoZWFkaW5nXCIsIGxhbmd1YWdlKX08L3A+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3JlZGl0XCI+e2dldFN0cmluZyhcImNyZWRpdFwiLCBsYW5ndWFnZSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIHJlcSB9KSA9PiB7XG4gIGlmIChyZXEgJiYgcmVzKSB7XG4gICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMuaG9zdCk7XG4gICAgaWYgKHJlcS5oZWFkZXJzLmhvc3QuaW5kZXhPZihcImZpbnF1YXJhbnRhaW5lLmJlXCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2U6IFwibmxcIlxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgbGFuZ3VhZ2U6IFwibmxcIiB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
    className: "jsx-171345800" + " " + "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date: new Date(2020, 3, 20),
    renderer: createRenderer(language),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }), __jsx("p", {
    className: "jsx-171345800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, getString("heading", language)), __jsx("p", {
    className: "jsx-171345800" + " " + "credit",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, getString("credit", language))));
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
//# sourceMappingURL=index.js.7ed609926c7d42baeb25.hot-update.js.map