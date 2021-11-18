/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  border: 0;\\r\\n  box-sizing: content-box;\\r\\n  font-family: 'Assistant', sans-serif;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --header-bg-color: dimgray;\\r\\n  --main-font-color: white;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: bisque;\\r\\n}\\r\\n\\r\\n.modal {\\r\\n  visibility: hidden;\\r\\n  position: absolute;\\r\\n  background-color: firebrick;\\r\\n  width: 100vw;\\r\\n  height: 100vh;\\r\\n}\\r\\n\\r\\n.hello {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.navul {\\r\\n  list-style-type: none;\\r\\n  background-color: var(--header-bg-color);\\r\\n  color: var(--main-font-color);\\r\\n  height: 50px;\\r\\n  width: 100vw;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: flex;\\r\\n  height: 10%;\\r\\n  border: 1px solid #333;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100vw;\\r\\n  background-color: var(--header-bg-color);\\r\\n  color: var(--main-font-color);\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  font-size: 25px;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.showslist {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n}\\r\\n\\r\\n.movietitle {\\r\\n  min-height: 80px;\\r\\n}\\r\\n\\r\\n.moviecard {\\r\\n  flex: 1 1 0%;\\r\\n  min-width: 200px;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\n.commentsandreservations {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.movieimage {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  padding: 5px;\\r\\n  border-radius: 0;\\r\\n}\\r\\n\\r\\n.modal-pop-up {\\r\\n  width: 100vw;\\r\\n  height: 90vh;\\r\\n  background-color: #1c1a195b;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  transform: scale(0);\\r\\n  transition: 0.25s ease-in-out;\\r\\n}\\r\\n\\r\\n.modal-pop-up.active {\\r\\n  transform: scale(1);\\r\\n}\\r\\n\\r\\n.cont-pop-up {\\r\\n  position: relative;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  z-index: 200;\\r\\n  width: 70%;\\r\\n  padding-bottom: 10%;\\r\\n  margin: 2% auto 10% auto;\\r\\n  max-height: 100%;\\r\\n  background-color: #fff;\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.close-button {\\r\\n  position: absolute;\\r\\n  right: 0;\\r\\n  display: block;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  background: none;\\r\\n  cursor: pointer;\\r\\n  color: black;\\r\\n  font-size: 5rem;\\r\\n  font-weight: bold;\\r\\n  margin: 3%;\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n.heart { cursor: pointer; }\\r\\n\\r\\n.modal-pop-img {\\r\\n  width: 50%;\\r\\n  margin-top: 5%;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  text-align: center;\\r\\n  margin-top: 4%;\\r\\n}\\r\\n\\r\\n.movie-info {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  margin: 2% 0;\\r\\n  width: 50%;\\r\\n  font-weight: bold;\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.modal-pop-up h4 {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  margin: 0 35%;\\r\\n}\\r\\n\\r\\n.username {\\r\\n  width: 250px;\\r\\n  border: 1px solid;\\r\\n  padding: 2%;\\r\\n  margin: 4% 0;\\r\\n}\\r\\n\\r\\n.insight {\\r\\n  width: 250px;\\r\\n  border: 1px solid;\\r\\n  height: 50px;\\r\\n  padding: 2%;\\r\\n  margin: 4% 0;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  list-style-type: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/MoviesAPI.js":
/*!**************************!*\
  !*** ./src/MoviesAPI.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getmovielist\": () => (/* binding */ getmovielist),\n/* harmony export */   \"openModal\": () => (/* binding */ openModal),\n/* harmony export */   \"updatelikes\": () => (/* binding */ updatelikes),\n/* harmony export */   \"postlike\": () => (/* binding */ postlike)\n/* harmony export */ });\n/* harmony import */ var _movieCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movieCounter.js */ \"./src/movieCounter.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n\n// eslint-disable-line\n\nconst moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';\nconst moviesoutput = document.querySelector('.showslist');\n\nconst openModal = () => {\n  document.querySelectorAll('.comments').forEach((elem) => {\n    elem.addEventListener('click', () => {\n      document.querySelector(`#modal-pop-up-${elem.dataset.id}`).classList.add('active');\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_1__.getComments)(elem.dataset.id);\n    });\n  });\n};\nconst updatelikes = async (id) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/likes?item_id=${id}`);\n  const data = await response.json();\n  data.shift();\n  document.querySelectorAll('.likesoutput').forEach((elem) => {\n    const found = data.find((element) => element.item_id === elem.dataset.id);\n    if (found !== undefined) {\n      elem.innerHTML = found.likes;\n    } else {\n      elem.innerHTML = 0;\n    }\n  });\n};\nconst getmovielist = () => {\n  // moviesoutput.innerHTML = 'hello';\n  fetch(moviesurl)\n    .then((response) => response.json())\n    .then((data) => data.forEach((row) => {\n      if (row.image != null && row.rating.average != null) {\n        moviesoutput.innerHTML += `<div class='moviecard' data-id='${row.id}'><div class='imgblock'><img class='movieimage' src=${row.image.medium}></div><div class='infoblock'><div class='likesandname'><h3 class='movietitle'>${row.name}</h3><div> <span data-id=${row.id} class=\"material-icons heart\">favorite</span>\n          \n          <span><span data-id='${row.id}' class='likesoutput'>0</span> likes</span></div></div><div class='commentsandreservations'><button data-id='${row.id}' class='comments' type='button'>comments</button><button type='button'>reservations</button></div></div></div>`;\n      }\n    }))\n    .then(() => {\n      openModal();\n\n      document.querySelectorAll('.heart').forEach((elem) => {\n        elem.addEventListener('click', () => { postlike(elem.dataset.id); });// eslint-disable-line\n      });\n      updatelikes();\n      (0,_movieCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n};\n\nconst postlike = (id) => {\n  const data = { item_id: id };\n\n  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/likes', {\n    method: 'POST', // or 'PUT'\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(data),\n  })\n    .then((response) => response.json())\n    .then((data) => {\n      console.log('Success:', data);\n    })\n    .then(getmovielist());\n};\n\n\n\n//# sourceURL=webpack://webpack-test/./src/MoviesAPI.js?");

/***/ }),

/***/ "./src/commentCounter.js":
/*!*******************************!*\
  !*** ./src/commentCounter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (id) => {\n  const list = document.querySelectorAll(`.list-item-${id}`);\n  const counts = document.querySelector(`.comment-${id}`);\n  if (list) {\n    counts.textContent = `Comments (${list.length})`;\n  } else {\n    counts.textContent = 'Comments (0)';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://webpack-test/./src/commentCounter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _MoviesAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MoviesAPI.js */ \"./src/MoviesAPI.js\");\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.js */ \"./src/popup.js\");\n\n\n// eslint-disable-line\n\n(0,_MoviesAPI_js__WEBPACK_IMPORTED_MODULE_1__.getmovielist)();\n(0,_popup_js__WEBPACK_IMPORTED_MODULE_2__.getmovie)();\n\n\n//# sourceURL=webpack://webpack-test/./src/index.js?");

/***/ }),

/***/ "./src/movieCounter.js":
/*!*****************************!*\
  !*** ./src/movieCounter.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst movieCounter = () => {\n  const movie = document.querySelectorAll('.moviecard');\n  const counts = document.querySelector('.counter');\n  if (movie) {\n    counts.innerHTML = `${movie.length}`;\n  } else {\n    counts.innerHTML = '0';\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieCounter);\n\n//# sourceURL=webpack://webpack-test/./src/movieCounter.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment),\n/* harmony export */   \"getmovie\": () => (/* binding */ getmovie)\n/* harmony export */ });\n/* harmony import */ var _commentCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter */ \"./src/commentCounter.js\");\n\n\nconst moviesurl = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';\nconst body = document.querySelector('body');\nconst popUpCont = document.createElement('section');\n\nbody.appendChild(popUpCont);\npopUpCont.classList.add('pop-up');\n\nconst addCommentToList = (userComment, id) => {\n  const list = document.querySelector(`.comment-list-${id}`);\n\n  const listItem = document.createElement('li');\n  listItem.classList.add(`list-item-${id}`);\n\n  listItem.innerHTML = `\n          <p>${userComment.creation_date} ${userComment.username} ${userComment.comment}</p>\n          `;\n\n  list.appendChild(listItem);\n};\n\nconst getComments = async (id) => {\n  const request = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/comments?item_id=${id}`);\n  const comments = await request.json();\n  comments.forEach((comment) => {\n    addCommentToList(comment, id);\n  });\n  (0,_commentCounter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\n};\n\nconst postComment = async (id) => {\n  const newComment = {\n    item_id: id,\n    username: document.getElementById(`username-${id}`).value,\n    comment: document.getElementById(`insight-${id}`).value,\n  };\n  (await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/6osTugMui25VcqKgDEZF/comments', {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json',\n      Accept: 'application/json',\n    },\n    body: JSON.stringify(newComment),\n  })).json();\n  getComments(id);\n};\n\nconst postComments = () => {\n  document.querySelectorAll('.addnew-btn').forEach((elem) => {\n    elem.addEventListener('click', (e) => {\n      e.preventDefault();\n      postComment(elem.dataset.id);\n      document.getElementById(`username-${elem.dataset.id}`).value = '';\n      document.getElementById(`insight-${elem.dataset.id}`).value = '';\n      document.querySelector(`.comment-list-${elem.dataset.id}`).innerHTML = '';\n    });\n  });\n};\n\nconst closeModal = () => {\n  document.querySelectorAll('.close-button').forEach((elem) => {\n    elem.addEventListener('click', () => {\n      document.querySelector(`#modal-pop-up-${elem.dataset.id}`).classList.remove('active');\n      document.querySelector(`.comment-list-${elem.dataset.id}`).innerHTML = '';\n    });\n  });\n};\n\nconst getmovie = () => {\n  fetch(moviesurl)\n    .then((response) => response.json())\n    .then((movies) => movies.forEach((movie) => {\n      if (movie.image != null && movie.rating.average != null) {\n        popUpCont.innerHTML\n    += `\n    <div id=\"modal-pop-up-${movie.id}\" class=\"modal-pop-up\">\n        <div class=\"cont-pop-up\">\n            <button data-id='${movie.id}' class=\"close-button\">&times;</button>\n            <img class=\"modal-pop-img\" src=\"${movie.image.original}\">\n            <h2 class=\"movie-title\">${movie.name}</h2>\n            <div class=\"movie-info\">\n                <div class=\"movie-info1\">\n                    <p>Rating: ${movie.rating.average}</p>\n                    <p>Type: ${movie.type}</p>\n                </div>\n                <div class=\"movie-info2\">\n                    <p>Runtime: ${movie.runtime}</p>\n                    <p>Season: ${movie.season}</p>\n                </div>\n            </div>\n            <h4 class=\"comment-${movie.id}\"></h4>\n            <ul class=\"comment-list-${movie.id} comment-list\"></ul>\n            <form class=\"comment-form\">\n                <h4>Add comment</h4>\n                <input type=\"text\" id=\"username-${movie.id}\" class=\"username\" placeholder=\"Your name\"><br>\n                <textarea type=\"text\" id=\"insight-${movie.id}\" class=\"insight\" placeholder=\"Your insight\"></textarea><br>\n                <button type=\"submit\" id=\"addnew\" data-id='${movie.id}' class=\"addnew-btn\">Comment</button>\n            </form>\n        </div>\n    </div>`;\n      }\n    }))\n    .then(() => {\n      postComments();\n      closeModal();\n    });\n};\n\n\n\n//# sourceURL=webpack://webpack-test/./src/popup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;