module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countdown */ "react-countdown");
/* harmony import */ var react_countdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-confetti */ "react-confetti");
/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../strings */ "./strings.js");
/* harmony import */ var _useAnalytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../useAnalytics */ "./useAnalytics.js");
var _jsxFileName = "/Users/timbroddin/Sites/quaranteinde/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const getString = (str, lang) => {
  return _strings__WEBPACK_IMPORTED_MODULE_6__["strings"][str][lang];
};

const createRenderer = lang => {
  return ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }) => {
    if (completed) {
      // Render a completed state
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(react_confetti__WEBPACK_IMPORTED_MODULE_4___default.a, {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }
      }));
    } else {
      // Render a countdown
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        id: "1710484668",
        __self: undefined
      }, ".text.jsx-1710484668{font-size:50px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QnNCLEFBRzhCLGVBQ0csa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IENvdW50ZG93biBmcm9tIFwicmVhY3QtY291bnRkb3duXCI7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSBcInJlYWN0LWNvbmZldHRpXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBzdHJpbmdzIH0gZnJvbSBcIi4uL3N0cmluZ3NcIjtcbmltcG9ydCB7IHVzZUFuYWx5dGljcyB9IGZyb20gXCIuLi91c2VBbmFseXRpY3NcIjtcblxuY29uc3QgZ2V0U3RyaW5nID0gKHN0ciwgbGFuZykgPT4ge1xuICByZXR1cm4gc3RyaW5nc1tzdHJdW2xhbmddO1xufTtcblxuY29uc3QgY3JlYXRlUmVuZGVyZXIgPSBsYW5nID0+IHtcbiAgcmV0dXJuICh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSkgPT4ge1xuICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgIC8vIFJlbmRlciBhIGNvbXBsZXRlZCBzdGF0ZVxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8Q29uZmV0dGkgLz5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZW5kZXIgYSBjb3VudGRvd25cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgICAgICA8c3Ryb25nPntkYXlzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoZGF5cyA9PT0gMSA/IFwiZGF5XCIgOiBcImRheXNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e2hvdXJzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoaG91cnMgPT09IDEgPyBcImhvdXJcIiA6IFwiaG91cnNcIiwgbGFuZyl9LHtcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+e21pbnV0ZXN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhtaW51dGVzID09PSAxID8gXCJtaW51dGVcIiA6IFwibWludXRlc1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57c2Vjb25kc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKHNlY29uZHMgPT09IDEgPyBcInNlY29uZFwiIDogXCJzZWNvbmRzXCIsIGxhbmcpfS5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApO1xuICAgIH1cbiAgfTtcbn07XG5cbmNvbnN0IEluZGV4ID0gKHsgbGFuZ3VhZ2UgfSkgPT4ge1xuICB1c2VBbmFseXRpY3MoKTtcbiAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRlZCh0cnVlKTtcbiAgICB9LCA1MCk7XG4gIH0pO1xuXG4gIC8vcmV0dXJuIDxDb3VudGRvd24gZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfSByZW5kZXJlcj17cmVuZGVyZXJ9IC8+O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntnZXRTdHJpbmcoXCJ0aXRsZVwiLCBsYW5ndWFnZSl9PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvZ3lsMnV4Zi5jc3NcIlxuICAgICAgICA+PC9saW5rPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIGhyZWY9XCIvZmF2LnBuZ1wiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm9cIlxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IFwibmxcIlxuICAgICAgICAgICAgICA/IGBodHRwczovL3F1YXJhbnRlaW5kZS5iZWBcbiAgICAgICAgICAgICAgOiBcImh0dHBzOi8vZmlucXVhcmFudGFpbmUuYmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2dldFN0cmluZyhcInRpdGxlXCIsIGxhbmd1YWdlKX0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PXtnZXRTdHJpbmcoXCJkZXNjcmlwdGlvblwiLCBsYW5ndWFnZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzppbWFnZVwiXG4gICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICBsYW5ndWFnZSA9PT0gXCJubFwiXG4gICAgICAgICAgICAgID8gYGh0dHBzOi8vcXVhcmFudGVpbmRlLmJlL29nLnBuZ2BcbiAgICAgICAgICAgICAgOiBcImh0dHBzOi8vZmlucXVhcmFudGFpbmUuYmUvb2cucG5nXCJcbiAgICAgICAgICB9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6d2lkdGhcIiBjb250ZW50PVwiMTIwMFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2U6aGVpZ2h0XCIgY29udGVudD1cIjYzMFwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17Z2V0U3RyaW5nKFwidGl0bGVcIiwgbGFuZ3VhZ2UpfSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6bG9jYWxlXCJcbiAgICAgICAgICBjb250ZW50PXtsYW5ndWFnZSA9PT0gXCJubFwiID8gXCJubF9CRVwiIDogXCJmcl9CRVwifVxuICAgICAgICAvPlxuXG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PXtnZXRTdHJpbmcoXCJkZXNjcmlwdGlvblwiLCBsYW5ndWFnZSl9XG4gICAgICAgID48L21ldGE+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYWx0ZXJuYXRlXCJcbiAgICAgICAgICBocmVmPXtgJHtcbiAgICAgICAgICAgIGxhbmd1YWdlID09PSBcIm5sXCJcbiAgICAgICAgICAgICAgPyBcImh0dHBzOi8vZmlucXVhcmFudGFpbi5iZVwiXG4gICAgICAgICAgICAgIDogXCJodHRwczovL3F1YXJhbnRlaW5kZS5iZVwiXG4gICAgICAgICAgfWB9XG4gICAgICAgICAgaHJlZkxhbmc9e2Ake2xhbmd1YWdlID09PSBcIm5sXCIgPyBcImZyXCIgOiBcIm5sXCJ9YH1cbiAgICAgICAgPjwvbGluaz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICAgICAgd2lkdGg6IDgwdnc7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGxldHRlci1nb3RoaWMtc3RkLCBtb25vc3BhY2U7XG5cbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNyZWRpdCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXNjbGFpbWVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jcmVkaXQgYSB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7bG9hZGVkID8gKFxuICAgICAgICAgIDxDb3VudGRvd25cbiAgICAgICAgICAgIGRhdGU9e25ldyBEYXRlKDIwMjAsIDMsIDIwKX1cbiAgICAgICAgICAgIHJlbmRlcmVyPXtjcmVhdGVSZW5kZXJlcihsYW5ndWFnZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxwPntnZXRTdHJpbmcoXCJoZWFkaW5nXCIsIGxhbmd1YWdlKX08L3A+XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiY3JlZGl0XCI+e2dldFN0cmluZyhcImNyZWRpdFwiLCBsYW5ndWFnZSl9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJkaXNjbGFpbWVyXCI+e2dldFN0cmluZyhcImRpc2NsYWltZXJcIiwgbGFuZ3VhZ2UpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVzLCByZXEgfSkgPT4ge1xuICBpZiAocmVxICYmIHJlcykge1xuICAgIGNvbnNvbGUubG9nKHJlcS5oZWFkZXJzLmhvc3QpO1xuICAgIGlmIChyZXEuaGVhZGVycy5ob3N0LmluZGV4T2YoXCJmaW5xdWFyYW50YWluZS5iZVwiKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhbmd1YWdlOiBcImZyXCJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGxhbmd1YWdlOiBcIm5sXCJcbiAgICAgIH07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGxhbmd1YWdlOiBcIm5sXCIgfTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
        className: "jsx-1710484668" + " " + "text",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }, __jsx("strong", {
        className: "jsx-1710484668",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }
      }, days), " ", getString(days === 1 ? "day" : "days", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 13
        }
      }, hours), " ", getString(hours === 1 ? "hour" : "hours", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 13
        }
      }, minutes), " ", getString(minutes === 1 ? "minute" : "minutes", lang), ",", " ", __jsx("strong", {
        className: "jsx-1710484668",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }
      }, seconds), " ", getString(seconds === 1 ? "second" : "seconds", lang), "."));
    }
  };
};

const Index = ({
  language
}) => {
  Object(_useAnalytics__WEBPACK_IMPORTED_MODULE_7__["useAnalytics"])();
  const {
    0: loaded,
    1: setLoaded
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 50);
  }); //return <Countdown date={new Date(2020, 3, 20)} renderer={renderer} />;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, getString("title", language)), __jsx("link", {
    rel: "stylesheet",
    href: "https://use.typekit.net/gyl2uxf.css",
    className: "jsx-2474381923",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: language === "nl" ? `https://quaranteinde.be` : "https://finquarantaine.be",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: getString("title", language),
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: getString("description", language),
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: language === "nl" ? `https://quaranteinde.be/og.png` : "https://finquarantaine.be/og.png",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:width",
    content: "1200",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image:height",
    content: "630",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:site_name",
    content: getString("title", language),
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:locale",
    content: language === "nl" ? "nl_BE" : "fr_BE",
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: getString("description", language),
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("link", {
    rel: "alternate",
    href: `${language === "nl" ? "https://finquarantain.be" : "https://quaranteinde.be"}`,
    hrefLang: `${language === "nl" ? "fr" : "nl"}`,
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2474381923",
    __self: undefined
  }, ".container.jsx-2474381923{margin:0 auto;margin-top:100px;width:80vw;text-align:center;font-family:letter-gothic-std,monospace;font-weight:400;font-style:normal;}.credit.jsx-2474381923{background-color:black;color:white;display:inline-block;padding:3px;text-align:left;}.disclaimer.jsx-2474381923{margin-top:100px;}.credit.jsx-2474381923 a.jsx-2474381923{color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90aW1icm9kZGluL1NpdGVzL3F1YXJhbnRlaW5kZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrSGtCLEFBR3lCLEFBYVMsQUFRTixBQUlMLFlBQ2QsRUF6Qm1CLEdBcUJuQixNQVJjLFFBWkQsSUFhVSxPQVpILGNBYU4sSUFYNkIsUUFZekIsZ0JBQ2xCLGdCQVhrQixnQkFFRSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3RpbWJyb2RkaW4vU2l0ZXMvcXVhcmFudGVpbmRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQ291bnRkb3duIGZyb20gXCJyZWFjdC1jb3VudGRvd25cIjtcbmltcG9ydCBDb25mZXR0aSBmcm9tIFwicmVhY3QtY29uZmV0dGlcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHN0cmluZ3MgfSBmcm9tIFwiLi4vc3RyaW5nc1wiO1xuaW1wb3J0IHsgdXNlQW5hbHl0aWNzIH0gZnJvbSBcIi4uL3VzZUFuYWx5dGljc1wiO1xuXG5jb25zdCBnZXRTdHJpbmcgPSAoc3RyLCBsYW5nKSA9PiB7XG4gIHJldHVybiBzdHJpbmdzW3N0cl1bbGFuZ107XG59O1xuXG5jb25zdCBjcmVhdGVSZW5kZXJlciA9IGxhbmcgPT4ge1xuICByZXR1cm4gKHsgZGF5cywgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGNvbXBsZXRlZCB9KSA9PiB7XG4gICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgLy8gUmVuZGVyIGEgY29tcGxldGVkIHN0YXRlXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxDb25mZXR0aSAvPlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbmRlciBhIGNvdW50ZG93blxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRcIj5cbiAgICAgICAgICAgIDxzdHJvbmc+e2RheXN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhkYXlzID09PSAxID8gXCJkYXlcIiA6IFwiZGF5c1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57aG91cnN9PC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAge2dldFN0cmluZyhob3VycyA9PT0gMSA/IFwiaG91clwiIDogXCJob3Vyc1wiLCBsYW5nKX0se1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz57bWludXRlc308L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICB7Z2V0U3RyaW5nKG1pbnV0ZXMgPT09IDEgPyBcIm1pbnV0ZVwiIDogXCJtaW51dGVzXCIsIGxhbmcpfSx7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPntzZWNvbmRzfTwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgIHtnZXRTdHJpbmcoc2Vjb25kcyA9PT0gMSA/IFwic2Vjb25kXCIgOiBcInNlY29uZHNcIiwgbGFuZyl9LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgICk7XG4gICAgfVxuICB9O1xufTtcblxuY29uc3QgSW5kZXggPSAoeyBsYW5ndWFnZSB9KSA9PiB7XG4gIHVzZUFuYWx5dGljcygpO1xuICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGVkKHRydWUpO1xuICAgIH0sIDUwKTtcbiAgfSk7XG5cbiAgLy9yZXR1cm4gPENvdW50ZG93biBkYXRlPXtuZXcgRGF0ZSgyMDIwLCAzLCAyMCl9IHJlbmRlcmVyPXtyZW5kZXJlcn0gLz47XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e2dldFN0cmluZyhcInRpdGxlXCIsIGxhbmd1YWdlKX08L3RpdGxlPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9neWwydXhmLmNzc1wiXG4gICAgICAgID48L2xpbms+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiB0eXBlPVwiaW1hZ2UvcG5nXCIgaHJlZj1cIi9mYXYucG5nXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wLCBtYXhpbXVtLXNjYWxlPTEuMCwgdXNlci1zY2FsYWJsZT1ub1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgY29udGVudD17XG4gICAgICAgICAgICBsYW5ndWFnZSA9PT0gXCJubFwiXG4gICAgICAgICAgICAgID8gYGh0dHBzOi8vcXVhcmFudGVpbmRlLmJlYFxuICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9maW5xdWFyYW50YWluZS5iZVwiXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17Z2V0U3RyaW5nKFwidGl0bGVcIiwgbGFuZ3VhZ2UpfSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9e2dldFN0cmluZyhcImRlc2NyaXB0aW9uXCIsIGxhbmd1YWdlKX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcbiAgICAgICAgICBjb250ZW50PXtcbiAgICAgICAgICAgIGxhbmd1YWdlID09PSBcIm5sXCJcbiAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9xdWFyYW50ZWluZGUuYmUvb2cucG5nYFxuICAgICAgICAgICAgICA6IFwiaHR0cHM6Ly9maW5xdWFyYW50YWluZS5iZS9vZy5wbmdcIlxuICAgICAgICAgIH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp3aWR0aFwiIGNvbnRlbnQ9XCIxMjAwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTpoZWlnaHRcIiBjb250ZW50PVwiNjMwXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtnZXRTdHJpbmcoXCJ0aXRsZVwiLCBsYW5ndWFnZSl9IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzpsb2NhbGVcIlxuICAgICAgICAgIGNvbnRlbnQ9e2xhbmd1YWdlID09PSBcIm5sXCIgPyBcIm5sX0JFXCIgOiBcImZyX0JFXCJ9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9e2dldFN0cmluZyhcImRlc2NyaXB0aW9uXCIsIGxhbmd1YWdlKX1cbiAgICAgICAgPjwvbWV0YT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhbHRlcm5hdGVcIlxuICAgICAgICAgIGhyZWY9e2Ake1xuICAgICAgICAgICAgbGFuZ3VhZ2UgPT09IFwibmxcIlxuICAgICAgICAgICAgICA/IFwiaHR0cHM6Ly9maW5xdWFyYW50YWluLmJlXCJcbiAgICAgICAgICAgICAgOiBcImh0dHBzOi8vcXVhcmFudGVpbmRlLmJlXCJcbiAgICAgICAgICB9YH1cbiAgICAgICAgICBocmVmTGFuZz17YCR7bGFuZ3VhZ2UgPT09IFwibmxcIiA/IFwiZnJcIiA6IFwibmxcIn1gfVxuICAgICAgICA+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgICAgICAgICB3aWR0aDogODB2dztcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICBmb250LWZhbWlseTogbGV0dGVyLWdvdGhpYy1zdGQsIG1vbm9zcGFjZTtcblxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIH1cblxuICAgICAgICAuY3JlZGl0IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpc2NsYWltZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNyZWRpdCBhIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHtsb2FkZWQgPyAoXG4gICAgICAgICAgPENvdW50ZG93blxuICAgICAgICAgICAgZGF0ZT17bmV3IERhdGUoMjAyMCwgMywgMjApfVxuICAgICAgICAgICAgcmVuZGVyZXI9e2NyZWF0ZVJlbmRlcmVyKGxhbmd1YWdlKX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPHA+e2dldFN0cmluZyhcImhlYWRpbmdcIiwgbGFuZ3VhZ2UpfTwvcD5cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJjcmVkaXRcIj57Z2V0U3RyaW5nKFwiY3JlZGl0XCIsIGxhbmd1YWdlKX08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImRpc2NsYWltZXJcIj57Z2V0U3RyaW5nKFwiZGlzY2xhaW1lclwiLCBsYW5ndWFnZSl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoeyByZXMsIHJlcSB9KSA9PiB7XG4gIGlmIChyZXEgJiYgcmVzKSB7XG4gICAgY29uc29sZS5sb2cocmVxLmhlYWRlcnMuaG9zdCk7XG4gICAgaWYgKHJlcS5oZWFkZXJzLmhvc3QuaW5kZXhPZihcImZpbnF1YXJhbnRhaW5lLmJlXCIpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2U6IFwiZnJcIlxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbGFuZ3VhZ2U6IFwibmxcIlxuICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHsgbGFuZ3VhZ2U6IFwibmxcIiB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/timbroddin/Sites/quaranteinde/pages/index.js */"), __jsx("div", {
    className: "jsx-2474381923" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 7
    }
  }, loaded ? __jsx(react_countdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
    date: new Date(2020, 3, 20),
    renderer: createRenderer(language),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }) : null, __jsx("p", {
    className: "jsx-2474381923",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 9
    }
  }, getString("heading", language)), __jsx("p", {
    className: "jsx-2474381923" + " " + "credit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, getString("credit", language)), __jsx("p", {
    className: "jsx-2474381923" + " " + "disclaimer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 9
    }
  }, getString("disclaimer", language))));
};

Index.getInitialProps = async ({
  res,
  req
}) => {
  if (req && res) {
    console.log(req.headers.host);

    if (req.headers.host.indexOf("finquarantaine.be") !== -1) {
      return {
        language: "fr"
      };
    } else {
      return {
        language: "nl"
      };
    }
  } else {
    return {
      language: "nl"
    };
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./strings.js":
/*!********************!*\
  !*** ./strings.js ***!
  \********************/
/*! exports provided: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/timbroddin/Sites/quaranteinde/strings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const strings = {
  title: {
    nl: "Quaranteinde",
    fr: "Fin quarantaine"
  },
  description: {
    nl: "Samen aftellen naar het einde van de quarantaine.",
    fr: "Compte à rebours jusqu'à la fin de la quarantaine."
  },
  heading: {
    nl: "tot het einde van de quarantaine",
    fr: "jusqu'à la fin de la quarantaine"
  },
  disclaimer: {
    nl: "(wordt geupdate met gegevens van de betrokken ministeries)",
    fr: "(sera mis à jour avec les données des ministères concernés)"
  },
  credit: {
    nl: __jsx("a", {
      href: "https://broddin.be",
      style: {
        color: "white"
      },
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, "gemaakt door Tim Broddin"),
    fr: __jsx("a", {
      href: "https://broddin.be",
      style: {
        color: "white"
      },
      target: "_blank",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, "cr\xE9\xE9 par Tim Broddin")
  },
  days: {
    nl: "dagen",
    fr: "jours"
  },
  day: {
    nl: "dag",
    fr: "jour"
  },
  hours: {
    nl: "uren",
    fr: "heures"
  },
  hour: {
    nl: "uur",
    fr: "heur"
  },
  minutes: {
    nl: "minuten",
    fr: "minutes"
  },
  minuut: {
    nl: "minuut",
    fr: "minute"
  },
  seconds: {
    nl: "seconden",
    fr: "secondes"
  },
  second: {
    nl: "seconde",
    fr: "seconde"
  }
};

/***/ }),

/***/ "./useAnalytics.js":
/*!*************************!*\
  !*** ./useAnalytics.js ***!
  \*************************/
/*! exports provided: initGA, logPageView, logEvent, logException, useAnalytics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logEvent", function() { return logEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logException", function() { return logException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAnalytics", function() { return useAnalytics; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "react-ga");
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_ga__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initGA = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.initialize("UA-157732787-3");
};
const logPageView = () => {
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.set({
    page: window.location.pathname
  });
  react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.pageview(window.location.pathname);
};
const logEvent = (category = "", action = "") => {
  if (category && action) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.event({
      category,
      action
    });
  }
};
const logException = (description = "", fatal = false) => {
  if (description) {
    react_ga__WEBPACK_IMPORTED_MODULE_0___default.a.exception({
      description,
      fatal
    });
  }
};
const useAnalytics = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (true) {
      if (!window.GA_INITIALIZED) {
        initGA();
        window.GA_INITIALIZED = true;
      }

      logPageView();
    }
  }, []);
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timbroddin/Sites/quaranteinde/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-confetti":
/*!*********************************!*\
  !*** external "react-confetti" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-confetti");

/***/ }),

/***/ "react-countdown":
/*!**********************************!*\
  !*** external "react-countdown" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countdown");

/***/ }),

/***/ "react-ga":
/*!***************************!*\
  !*** external "react-ga" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-ga");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map