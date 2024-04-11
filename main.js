/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root{
    --nav-background-color: #DC144F;
    --nav-text-color: white;
}


body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    min-height: 100vh;
}

#app{
    display: flex;
    flex-direction: column;
}

/* Header */
header{
    height: 12vh;
    width: 100%;
    background-color: var(--nav-background-color);
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-buttons{
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
}

.nav-buttons > li{
    font-size: 1.3rem;
    cursor: pointer;
    color: var(--nav-text-color);
    margin-inline: 1.5rem;
    text-transform: uppercase;
}
.nav-buttons > li:hover{
    border-bottom: 2px solid var(--nav-text-color);
    padding-bottom: 5px;
}

main {
    margin: 0 auto;
    padding-block: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100vw;
    min-height: calc(100vh - 12vh - 1rem - 24px);
    display: flex;
    justify-content: center;
    overflow: scroll;
}

#content{
    max-width: 960px;
    padding: 1rem;
    max-width: 700px;
    min-width: 250px;
    width: 100vw;
}


/* Home */
.home-title{
    font-size: 3.5rem ;
    text-align: center;
}

.home-description{
    font-size: 2rem;
}


/* Contact */
.info{
    text-align: left;
    font-size: 1.5rem;
}


#form{
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
}

.row{
    display: flex;
    flex-direction: column;
}



.input{
    height: 3rem;
    font-size: 2rem;
}

#msg-input{
    height: 100px; /* Set a fixed height */
    resize: vertical; /* Allow horizontal resizing */
    overflow: scroll; 
    font-size: 0.8rem;
}



/* Footer */
footer{
    background-color: var(--nav-background-color);
    font-size: 1rem;
    color: var(--nav-text-color);
    padding: 12px;
    text-align: center;
    position: relative;
    bottom: 0;
    letter-spacing: 0 1rem;
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,uBAAuB;AAC3B;;;AAGA;IACI,8BAA8B;IAC9B,yBAAyB;IACzB,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA,WAAW;AACX;IACI,YAAY;IACZ,WAAW;IACX,6CAA6C;IAC7C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,4BAA4B;IAC5B,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,4CAA4C;IAC5C,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;;AAGA,SAAS;AACT;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;;;AAIA;IACI,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,aAAa,EAAE,uBAAuB;IACtC,gBAAgB,EAAE,8BAA8B;IAChD,gBAAgB;IAChB,iBAAiB;AACrB;;;;AAIA,WAAW;AACX;IACI,6CAA6C;IAC7C,eAAe;IACf,4BAA4B;IAC5B,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,sBAAsB;AAC1B","sourcesContent":[":root{\n    --nav-background-color: #DC144F;\n    --nav-text-color: white;\n}\n\n\nbody {\n    font-family: Arial, sans-serif;\n    background-color: #f0f0f0;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n}\n\n#app{\n    display: flex;\n    flex-direction: column;\n}\n\n/* Header */\nheader{\n    height: 12vh;\n    width: 100%;\n    background-color: var(--nav-background-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.nav-buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style-type: none;\n}\n\n.nav-buttons > li{\n    font-size: 1.3rem;\n    cursor: pointer;\n    color: var(--nav-text-color);\n    margin-inline: 1.5rem;\n    text-transform: uppercase;\n}\n.nav-buttons > li:hover{\n    border-bottom: 2px solid var(--nav-text-color);\n    padding-bottom: 5px;\n}\n\nmain {\n    margin: 0 auto;\n    padding-block: 20px;\n    background-color: #fff;\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    width: 100vw;\n    min-height: calc(100vh - 12vh - 1rem - 24px);\n    display: flex;\n    justify-content: center;\n    overflow: scroll;\n}\n\n#content{\n    max-width: 960px;\n    padding: 1rem;\n    max-width: 700px;\n    min-width: 250px;\n    width: 100vw;\n}\n\n\n/* Home */\n.home-title{\n    font-size: 3.5rem ;\n    text-align: center;\n}\n\n.home-description{\n    font-size: 2rem;\n}\n\n\n/* Contact */\n.info{\n    text-align: left;\n    font-size: 1.5rem;\n}\n\n\n#form{\n    display: flex;\n    flex-flow: column nowrap;\n    text-align: left;\n}\n\n.row{\n    display: flex;\n    flex-direction: column;\n}\n\n\n\n.input{\n    height: 3rem;\n    font-size: 2rem;\n}\n\n#msg-input{\n    height: 100px; /* Set a fixed height */\n    resize: vertical; /* Allow horizontal resizing */\n    overflow: scroll; \n    font-size: 0.8rem;\n}\n\n\n\n/* Footer */\nfooter{\n    background-color: var(--nav-background-color);\n    font-size: 1rem;\n    color: var(--nav-text-color);\n    padding: 12px;\n    text-align: center;\n    position: relative;\n    bottom: 0;\n    letter-spacing: 0 1rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/pages/contact.js":
/*!******************************!*\
  !*** ./src/pages/contact.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function makeInfo(){
    const Info = document.createElement("div");
    const PhoneNumber = document.createElement("p");
    const Email = document.createElement("p");
    const Address = document.createElement("p");


    PhoneNumber.textContent = "Phone Number: 973-409-3313";
    Email.textContent = "Email: PancakeHome@gmail.com";
    Address.textContent = "Address: 221B Baker Street";


    Info.appendChild(PhoneNumber);
    Info.appendChild(Email);
    Info.appendChild(Address);

    Info.classList.add("info");

    return Info;
}

function makeForm(){
    const Form = document.createElement("div");
    Form.setAttribute('id', 'form');
    Form.setAttribute('action', '#'); // Specify form action
    
    // Create input field for name
    const NameRow = document.createElement("div");
    NameRow.classList.add("row");
    const NameLabel = document.createElement('label');
    NameLabel.textContent = 'Name: ';
    const NameInput = document.createElement('input');
    NameInput.setAttribute('type', 'text');
    NameInput.setAttribute('name', 'name');
    NameInput.classList.add("input");
    NameRow.appendChild(NameLabel); // Append label to row
    NameRow.appendChild(NameInput); // Append input to row
    Form.appendChild(NameRow); // Append row to form


    // Create input field for Phone Number 
    const PhoneRow = document.createElement("div");
    PhoneRow.classList.add("row");
    const PhoneLabel = document.createElement('label');
    PhoneLabel.textContent = 'Phone Number: ';
    const PhoneInput= document.createElement('input');
    PhoneInput.setAttribute('type', 'tel');
    PhoneInput.setAttribute('name', 'phone');
    PhoneInput.classList.add("input");
    PhoneRow.appendChild(PhoneLabel); // Append label to row
    PhoneRow.appendChild(PhoneInput); // Append input to row
    Form.appendChild(PhoneRow); // Append row to form

    // Create input field for email
    const EmailRow = document.createElement("div");
    EmailRow.classList.add("row");
    const EmailLabel = document.createElement('label');
    EmailLabel.textContent = 'Email: ';
    const EmailInput = document.createElement('input');
    EmailInput.setAttribute('type', 'email');
    EmailInput.setAttribute('name', 'email');
    EmailInput.classList.add("input");
    EmailRow.appendChild(EmailLabel); // Append label to row
    EmailRow.appendChild(EmailInput); // Append input to row
    Form.appendChild(EmailRow); // Append row to form


    // Create text area for open text input
    const MessageRow = document.createElement("div");
    MessageRow.classList.add("row");
    const MessageLabel = document.createElement('label');
    MessageLabel.textContent = 'Message: ';
    const MessageTextarea = document.createElement('textarea');
    MessageTextarea.setAttribute('type', 'message');
    MessageTextarea.setAttribute('name', 'message');
    MessageTextarea.setAttribute("id", 'msg-input');
    MessageTextarea.setAttribute('maxlength', '1200');

    const charCount = document.createElement("div");
    charCount.textContent="0/1200";
    charCount.setAttribute('id', 'char-count')

    MessageTextarea.addEventListener('input', function(){
        const maxLength = parseInt(MessageTextarea.getAttribute('maxlength'));
        const currentLength = MessageTextarea.value.length;
    
        // Update character count display
        charCount.textContent = currentLength + '/' + maxLength;
    
        // Check if character limit is exceeded
        if (currentLength > maxLength) {
            // Trim the excess characters
            MessageTextarea.value = MessageTextarea.value.slice(0, maxLength);
        }
    });


    MessageRow.appendChild(MessageLabel); // Append label to row
    MessageRow.appendChild(MessageTextarea); // Append input to row
    MessageRow.appendChild(charCount);
    Form.appendChild(MessageRow); // Append row to form


    // Create submit button
    const SubmitButton = document.createElement('input');
    SubmitButton.setAttribute('type', 'submit');
    SubmitButton.setAttribute('value', 'Submit');
    Form.appendChild(SubmitButton); // Append submit button to form

    // Add form submit event listener
    Form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        // Handle form submission (e.g., validate inputs, submit data)
        let formData = new FormData(Form);
        let formDataObject = {};
        formData.forEach(function(value, key) {
            formDataObject[key] = value;
        });
        console.log('Form submitted:', formDataObject);
    });


    return Form;
}


function loadContact(){
    const Content = document.getElementById("content");
    const InfoTitle = document.createElement("h2");
    const Info = makeInfo();
    const FormTitle = document.createElement("h2");
    const Form = makeForm();

    InfoTitle.textContent = "Contact Us";
    FormTitle.textContent = "Form for Contact us"



    removeAllChildNodes(Content);

    Content.appendChild(InfoTitle);
    Content.appendChild(Info);
    Content.appendChild(FormTitle);
    Content.appendChild(Form);
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function loadHome() {
    const Content = document.getElementById("content");
    const Title = document.createElement("h2");
    const Description = document.createElement("p");

    Title.textContent = "Welcome to Pancake house";
    Description.textContent = "The Pancake House menu is all a tribute to the classic American diner of the 1950s and 1960s. The use of fresh raw materials and the maintenance of quality are already in our spirit today.";

    Title.classList.add("home-title");
    Description.classList.add("home-description");
    

    removeAllChildNodes(Content);

    Content.appendChild(Title);
    Content.appendChild(Description);
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);


/***/ }),

/***/ "./src/pages/menu.js":
/*!***************************!*\
  !*** ./src/pages/menu.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

function loadMenu(){
    const Content = document.getElementById("content");
    const Title = document.createElement("h2");
    const Description = document.createElement("p");

    Title.textContent = "Welcome to Pancake house menu";
    Description.textContent = "The Pancake House menu is all a tribute to the classic American diner of the 1950s and 1960s. The use of fresh raw materials and the maintenance of quality are already in our spirit today.";

    removeAllChildNodes(Content);

    Content.appendChild(Title);
    Content.appendChild(Description);

}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/menu */ "./src/pages/menu.js");
/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact */ "./src/pages/contact.js");
/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/style.css */ "./src/style/style.css");






init();

function setBtnEvent(){
    const HomeBtn = document.getElementById("homeBtn")
    const menuBtn = document.getElementById("menuBtn")
    const contactBtn = document.getElementById("contactBtn")

    HomeBtn.addEventListener('click', _pages_home__WEBPACK_IMPORTED_MODULE_0__["default"]);
    menuBtn.addEventListener('click', _pages_menu__WEBPACK_IMPORTED_MODULE_1__["default"]);
    contactBtn.addEventListener('click', _pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"]);
}


function init(){
    (0,_pages_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
    setBtnEvent();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQixzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sc0ZBQXNGLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxRQUFRLFVBQVUsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsUUFBUSxVQUFVLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFNBQVMsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLHNCQUFzQix5QkFBeUIsYUFBYSxhQUFhLFNBQVMsVUFBVSxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxnQ0FBZ0Msc0NBQXNDLDhCQUE4QixHQUFHLFlBQVkscUNBQXFDLGdDQUFnQyxnQkFBZ0IsaUJBQWlCLHdCQUF3QixHQUFHLFNBQVMsb0JBQW9CLDZCQUE2QixHQUFHLHlCQUF5QixtQkFBbUIsa0JBQWtCLG9EQUFvRCxvQkFBb0IsOEJBQThCLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0IsOEJBQThCLDBCQUEwQiw0QkFBNEIsR0FBRyxzQkFBc0Isd0JBQXdCLHNCQUFzQixtQ0FBbUMsNEJBQTRCLGdDQUFnQyxHQUFHLDBCQUEwQixxREFBcUQsMEJBQTBCLEdBQUcsVUFBVSxxQkFBcUIsMEJBQTBCLDZCQUE2Qix5QkFBeUIsK0NBQStDLHlCQUF5QixtQkFBbUIsbURBQW1ELG9CQUFvQiw4QkFBOEIsdUJBQXVCLEdBQUcsYUFBYSx1QkFBdUIsb0JBQW9CLHVCQUF1Qix1QkFBdUIsbUJBQW1CLEdBQUcsOEJBQThCLHlCQUF5Qix5QkFBeUIsR0FBRyxzQkFBc0Isc0JBQXNCLEdBQUcsMkJBQTJCLHVCQUF1Qix3QkFBd0IsR0FBRyxZQUFZLG9CQUFvQiwrQkFBK0IsdUJBQXVCLEdBQUcsU0FBUyxvQkFBb0IsNkJBQTZCLEdBQUcsZUFBZSxtQkFBbUIsc0JBQXNCLEdBQUcsZUFBZSxxQkFBcUIsZ0RBQWdELHVEQUF1RCx3QkFBd0IsR0FBRyw2QkFBNkIsb0RBQW9ELHNCQUFzQixtQ0FBbUMsb0JBQW9CLHlCQUF5Qix5QkFBeUIsZ0JBQWdCLDZCQUE2QixHQUFHLG1CQUFtQjtBQUM5d0c7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNySTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUFzRztBQUN0RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSWdEO0FBQ3hFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSxzRkFBTyxVQUFVLHNGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG9DQUFvQztBQUNwQywrQkFBK0I7OztBQUcvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDLHNDQUFzQztBQUN0QyxnQ0FBZ0M7OztBQUdoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsMENBQTBDO0FBQzFDLDZDQUE2QztBQUM3QztBQUNBLGtDQUFrQzs7O0FBR2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DOztBQUVwQztBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUMzSjFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxpRUFBZSxRQUFROzs7Ozs7VUN4QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBb0M7QUFDQTtBQUNNO0FBQ2Y7OztBQUczQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQ0FBc0MsbURBQVE7QUFDOUMsc0NBQXNDLG1EQUFRO0FBQzlDLHlDQUF5QyxzREFBVztBQUNwRDs7O0FBR0E7QUFDQSxJQUFJLDBEQUFXO0FBQ2Y7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtLy4vc3JjL3N0eWxlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9zdHlsZS9zdHlsZS5jc3M/YzlmMCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9wYWdlcy9jb250YWN0LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9wYWdlcy9ob21lLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9wYWdlcy9tZW51LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3R7XG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogI0RDMTQ0RjtcbiAgICAtLW5hdi10ZXh0LWNvbG9yOiB3aGl0ZTtcbn1cblxuXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI2FwcHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIEhlYWRlciAqL1xuaGVhZGVye1xuICAgIGhlaWdodDogMTJ2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5hdi1idXR0b25zID4gbGl7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XG4gICAgbWFyZ2luLWlubGluZTogMS41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubmF2LWJ1dHRvbnMgPiBsaTpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmF2LXRleHQtY29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbm1haW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxMnZoIC0gMXJlbSAtIDI0cHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2NvbnRlbnR7XG4gICAgbWF4LXdpZHRoOiA5NjBweDtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgbWluLXdpZHRoOiAyNTBweDtcbiAgICB3aWR0aDogMTAwdnc7XG59XG5cblxuLyogSG9tZSAqL1xuLmhvbWUtdGl0bGV7XG4gICAgZm9udC1zaXplOiAzLjVyZW0gO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmhvbWUtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG5cbi8qIENvbnRhY3QgKi9cbi5pbmZve1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cblxuI2Zvcm17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cblxuXG4uaW5wdXR7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuI21zZy1pbnB1dHtcbiAgICBoZWlnaHQ6IDEwMHB4OyAvKiBTZXQgYSBmaXhlZCBoZWlnaHQgKi9cbiAgICByZXNpemU6IHZlcnRpY2FsOyAvKiBBbGxvdyBob3Jpem9udGFsIHJlc2l6aW5nICovXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgXG4gICAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cblxuXG4vKiBGb290ZXIgKi9cbmZvb3RlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMCAxcmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw2Q0FBNkM7SUFDN0MsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSw4Q0FBOEM7SUFDOUMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDRDQUE0QztJQUM1QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOzs7QUFHQSxTQUFTO0FBQ1Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7Ozs7QUFJQTtJQUNJLFlBQVk7SUFDWixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYSxFQUFFLHVCQUF1QjtJQUN0QyxnQkFBZ0IsRUFBRSw4QkFBOEI7SUFDaEQsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7OztBQUlBLFdBQVc7QUFDWDtJQUNJLDZDQUE2QztJQUM3QyxlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxzQkFBc0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tbmF2LWJhY2tncm91bmQtY29sb3I6ICNEQzE0NEY7XFxuICAgIC0tbmF2LXRleHQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5ib2R5IHtcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jYXBwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5oZWFkZXJ7XFxuICAgIGhlaWdodDogMTJ2aDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5uYXYtYnV0dG9uc3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm5hdi1idXR0b25zID4gbGl7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XFxuICAgIG1hcmdpbi1pbmxpbmU6IDEuNXJlbTtcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG59XFxuLm5hdi1idXR0b25zID4gbGk6aG92ZXJ7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcblxcbm1haW4ge1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZy1ibG9jazogMjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDEydmggLSAxcmVtIC0gMjRweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5cXG4vKiBIb21lICovXFxuLmhvbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtIDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4vKiBDb250YWN0ICovXFxuLmluZm97XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG4jZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG5cXG5cXG4uaW5wdXR7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG4jbXNnLWlucHV0e1xcbiAgICBoZWlnaHQ6IDEwMHB4OyAvKiBTZXQgYSBmaXhlZCBoZWlnaHQgKi9cXG4gICAgcmVzaXplOiB2ZXJ0aWNhbDsgLyogQWxsb3cgaG9yaXpvbnRhbCByZXNpemluZyAqL1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsOyBcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcblxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxldHRlci1zcGFjaW5nOiAwIDFyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtYWtlSW5mbygpe1xuICAgIGNvbnN0IEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IFBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cblxuICAgIFBob25lTnVtYmVyLnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXI6IDk3My00MDktMzMxM1wiO1xuICAgIEVtYWlsLnRleHRDb250ZW50ID0gXCJFbWFpbDogUGFuY2FrZUhvbWVAZ21haWwuY29tXCI7XG4gICAgQWRkcmVzcy50ZXh0Q29udGVudCA9IFwiQWRkcmVzczogMjIxQiBCYWtlciBTdHJlZXRcIjtcblxuXG4gICAgSW5mby5hcHBlbmRDaGlsZChQaG9uZU51bWJlcik7XG4gICAgSW5mby5hcHBlbmRDaGlsZChFbWFpbCk7XG4gICAgSW5mby5hcHBlbmRDaGlsZChBZGRyZXNzKTtcblxuICAgIEluZm8uY2xhc3NMaXN0LmFkZChcImluZm9cIik7XG5cbiAgICByZXR1cm4gSW5mbztcbn1cblxuZnVuY3Rpb24gbWFrZUZvcm0oKXtcbiAgICBjb25zdCBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBGb3JtLnNldEF0dHJpYnV0ZSgnaWQnLCAnZm9ybScpO1xuICAgIEZvcm0uc2V0QXR0cmlidXRlKCdhY3Rpb24nLCAnIycpOyAvLyBTcGVjaWZ5IGZvcm0gYWN0aW9uXG4gICAgXG4gICAgLy8gQ3JlYXRlIGlucHV0IGZpZWxkIGZvciBuYW1lXG4gICAgY29uc3QgTmFtZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgTmFtZVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIGNvbnN0IE5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgTmFtZUxhYmVsLnRleHRDb250ZW50ID0gJ05hbWU6ICc7XG4gICAgY29uc3QgTmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBOYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25hbWUnKTtcbiAgICBOYW1lSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIE5hbWVSb3cuYXBwZW5kQ2hpbGQoTmFtZUxhYmVsKTsgLy8gQXBwZW5kIGxhYmVsIHRvIHJvd1xuICAgIE5hbWVSb3cuYXBwZW5kQ2hpbGQoTmFtZUlucHV0KTsgLy8gQXBwZW5kIGlucHV0IHRvIHJvd1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoTmFtZVJvdyk7IC8vIEFwcGVuZCByb3cgdG8gZm9ybVxuXG5cbiAgICAvLyBDcmVhdGUgaW5wdXQgZmllbGQgZm9yIFBob25lIE51bWJlciBcbiAgICBjb25zdCBQaG9uZVJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgUGhvbmVSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICBjb25zdCBQaG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBQaG9uZUxhYmVsLnRleHRDb250ZW50ID0gJ1Bob25lIE51bWJlcjogJztcbiAgICBjb25zdCBQaG9uZUlucHV0PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIFBob25lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RlbCcpO1xuICAgIFBob25lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3Bob25lJyk7XG4gICAgUGhvbmVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgUGhvbmVSb3cuYXBwZW5kQ2hpbGQoUGhvbmVMYWJlbCk7IC8vIEFwcGVuZCBsYWJlbCB0byByb3dcbiAgICBQaG9uZVJvdy5hcHBlbmRDaGlsZChQaG9uZUlucHV0KTsgLy8gQXBwZW5kIGlucHV0IHRvIHJvd1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoUGhvbmVSb3cpOyAvLyBBcHBlbmQgcm93IHRvIGZvcm1cblxuICAgIC8vIENyZWF0ZSBpbnB1dCBmaWVsZCBmb3IgZW1haWxcbiAgICBjb25zdCBFbWFpbFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgRW1haWxSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICBjb25zdCBFbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBFbWFpbExhYmVsLnRleHRDb250ZW50ID0gJ0VtYWlsOiAnO1xuICAgIGNvbnN0IEVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIEVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XG4gICAgRW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZW1haWwnKTtcbiAgICBFbWFpbElucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBFbWFpbFJvdy5hcHBlbmRDaGlsZChFbWFpbExhYmVsKTsgLy8gQXBwZW5kIGxhYmVsIHRvIHJvd1xuICAgIEVtYWlsUm93LmFwcGVuZENoaWxkKEVtYWlsSW5wdXQpOyAvLyBBcHBlbmQgaW5wdXQgdG8gcm93XG4gICAgRm9ybS5hcHBlbmRDaGlsZChFbWFpbFJvdyk7IC8vIEFwcGVuZCByb3cgdG8gZm9ybVxuXG5cbiAgICAvLyBDcmVhdGUgdGV4dCBhcmVhIGZvciBvcGVuIHRleHQgaW5wdXRcbiAgICBjb25zdCBNZXNzYWdlUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBNZXNzYWdlUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgY29uc3QgTWVzc2FnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBNZXNzYWdlTGFiZWwudGV4dENvbnRlbnQgPSAnTWVzc2FnZTogJztcbiAgICBjb25zdCBNZXNzYWdlVGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIE1lc3NhZ2VUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbWVzc2FnZScpO1xuICAgIE1lc3NhZ2VUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpO1xuICAgIE1lc3NhZ2VUZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCAnbXNnLWlucHV0Jyk7XG4gICAgTWVzc2FnZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzEyMDAnKTtcblxuICAgIGNvbnN0IGNoYXJDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2hhckNvdW50LnRleHRDb250ZW50PVwiMC8xMjAwXCI7XG4gICAgY2hhckNvdW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY2hhci1jb3VudCcpXG5cbiAgICBNZXNzYWdlVGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpe1xuICAgICAgICBjb25zdCBtYXhMZW5ndGggPSBwYXJzZUludChNZXNzYWdlVGV4dGFyZWEuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKSk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRMZW5ndGggPSBNZXNzYWdlVGV4dGFyZWEudmFsdWUubGVuZ3RoO1xuICAgIFxuICAgICAgICAvLyBVcGRhdGUgY2hhcmFjdGVyIGNvdW50IGRpc3BsYXlcbiAgICAgICAgY2hhckNvdW50LnRleHRDb250ZW50ID0gY3VycmVudExlbmd0aCArICcvJyArIG1heExlbmd0aDtcbiAgICBcbiAgICAgICAgLy8gQ2hlY2sgaWYgY2hhcmFjdGVyIGxpbWl0IGlzIGV4Y2VlZGVkXG4gICAgICAgIGlmIChjdXJyZW50TGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBUcmltIHRoZSBleGNlc3MgY2hhcmFjdGVyc1xuICAgICAgICAgICAgTWVzc2FnZVRleHRhcmVhLnZhbHVlID0gTWVzc2FnZVRleHRhcmVhLnZhbHVlLnNsaWNlKDAsIG1heExlbmd0aCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgTWVzc2FnZVJvdy5hcHBlbmRDaGlsZChNZXNzYWdlTGFiZWwpOyAvLyBBcHBlbmQgbGFiZWwgdG8gcm93XG4gICAgTWVzc2FnZVJvdy5hcHBlbmRDaGlsZChNZXNzYWdlVGV4dGFyZWEpOyAvLyBBcHBlbmQgaW5wdXQgdG8gcm93XG4gICAgTWVzc2FnZVJvdy5hcHBlbmRDaGlsZChjaGFyQ291bnQpO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoTWVzc2FnZVJvdyk7IC8vIEFwcGVuZCByb3cgdG8gZm9ybVxuXG5cbiAgICAvLyBDcmVhdGUgc3VibWl0IGJ1dHRvblxuICAgIGNvbnN0IFN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgU3VibWl0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICBTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcbiAgICBGb3JtLmFwcGVuZENoaWxkKFN1Ym1pdEJ1dHRvbik7IC8vIEFwcGVuZCBzdWJtaXQgYnV0dG9uIHRvIGZvcm1cblxuICAgIC8vIEFkZCBmb3JtIHN1Ym1pdCBldmVudCBsaXN0ZW5lclxuICAgIEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBkZWZhdWx0IGZvcm0gc3VibWlzc2lvbiBiZWhhdmlvclxuICAgICAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uIChlLmcuLCB2YWxpZGF0ZSBpbnB1dHMsIHN1Ym1pdCBkYXRhKVxuICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoRm9ybSk7XG4gICAgICAgIGxldCBmb3JtRGF0YU9iamVjdCA9IHt9O1xuICAgICAgICBmb3JtRGF0YS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGZvcm1EYXRhT2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGb3JtIHN1Ym1pdHRlZDonLCBmb3JtRGF0YU9iamVjdCk7XG4gICAgfSk7XG5cblxuICAgIHJldHVybiBGb3JtO1xufVxuXG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgY29uc3QgQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBJbmZvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgSW5mbyA9IG1ha2VJbmZvKCk7XG4gICAgY29uc3QgRm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IEZvcm0gPSBtYWtlRm9ybSgpO1xuXG4gICAgSW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgRm9ybVRpdGxlLnRleHRDb250ZW50ID0gXCJGb3JtIGZvciBDb250YWN0IHVzXCJcblxuXG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKENvbnRlbnQpO1xuXG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChJbmZvVGl0bGUpO1xuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoSW5mbyk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChGb3JtVGl0bGUpO1xuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoRm9ybSk7XG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gUGFuY2FrZSBob3VzZVwiO1xuICAgIERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJUaGUgUGFuY2FrZSBIb3VzZSBtZW51IGlzIGFsbCBhIHRyaWJ1dGUgdG8gdGhlIGNsYXNzaWMgQW1lcmljYW4gZGluZXIgb2YgdGhlIDE5NTBzIGFuZCAxOTYwcy4gVGhlIHVzZSBvZiBmcmVzaCByYXcgbWF0ZXJpYWxzIGFuZCB0aGUgbWFpbnRlbmFuY2Ugb2YgcXVhbGl0eSBhcmUgYWxyZWFkeSBpbiBvdXIgc3Bpcml0IHRvZGF5LlwiO1xuXG4gICAgVGl0bGUuY2xhc3NMaXN0LmFkZChcImhvbWUtdGl0bGVcIik7XG4gICAgRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtZGVzY3JpcHRpb25cIik7XG4gICAgXG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKENvbnRlbnQpO1xuXG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChUaXRsZSk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChEZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsIlxuZnVuY3Rpb24gbG9hZE1lbnUoKXtcbiAgICBjb25zdCBDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGNvbnN0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgICBUaXRsZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBQYW5jYWtlIGhvdXNlIG1lbnVcIjtcbiAgICBEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiVGhlIFBhbmNha2UgSG91c2UgbWVudSBpcyBhbGwgYSB0cmlidXRlIHRvIHRoZSBjbGFzc2ljIEFtZXJpY2FuIGRpbmVyIG9mIHRoZSAxOTUwcyBhbmQgMTk2MHMuIFRoZSB1c2Ugb2YgZnJlc2ggcmF3IG1hdGVyaWFscyBhbmQgdGhlIG1haW50ZW5hbmNlIG9mIHF1YWxpdHkgYXJlIGFscmVhZHkgaW4gb3VyIHNwaXJpdCB0b2RheS5cIjtcblxuICAgIHJlbW92ZUFsbENoaWxkTm9kZXMoQ29udGVudCk7XG5cbiAgICBDb250ZW50LmFwcGVuZENoaWxkKFRpdGxlKTtcbiAgICBDb250ZW50LmFwcGVuZENoaWxkKERlc2NyaXB0aW9uKTtcblxufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBsb2FkSG9tZSBmcm9tICcuL3BhZ2VzL2hvbWUnO1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vcGFnZXMvbWVudSc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9wYWdlcy9jb250YWN0JztcbmltcG9ydCAnLi9zdHlsZS9zdHlsZS5jc3MnO1xuXG5cbmluaXQoKTtcblxuZnVuY3Rpb24gc2V0QnRuRXZlbnQoKXtcbiAgICBjb25zdCBIb21lQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lQnRuXCIpXG4gICAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJ0blwiKVxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RCdG5cIilcblxuICAgIEhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkSG9tZSk7XG4gICAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRNZW51KTtcbiAgICBjb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZENvbnRhY3QpO1xufVxuXG5cbmZ1bmN0aW9uIGluaXQoKXtcbiAgICBsb2FkQ29udGFjdCgpO1xuICAgIHNldEJ0bkV2ZW50KCk7XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9