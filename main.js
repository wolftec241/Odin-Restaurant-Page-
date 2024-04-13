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
    --main-background-color: #e7e5e4;
    --item-background-color: #fafaf9;
}


body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    min-height: 100vh;
}

#app{
    display: flex;
    flex-direction: column;
    height: 100vh;
}

h2{
    font-size: 2rem;
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
    flex: 1;
    padding-block: 20px;
    background-color: var(--main-background-color);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100vw;
    min-height: 80vh;
    display: flex;
    justify-content: center;
    overflow: scroll;
}

#content{
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

#submit{
    margin-bottom: 1.2rem;
}

.input{
    height: 3rem;
    font-size: 1rem;
    min-width: 450px;
}

#msg-input{
    height: 100px; /* Set a fixed height */
    resize: vertical; /* Allow horizontal resizing */
    overflow: scroll; 
    font-size: 1rem;
    min-width: 450px;
}


/* Menu */
.items{
    display: flex;
    flex-direction: column;
}

.item{
    display: flex;
    flex-direction: column;
    margin: 2rem;
    background-color: var(--item-background-color);
    border: grey 2px solid;
}

.item-name,
.item-cost{
    font-size: 1.2rem;
    font-weight: bold;
    overflow: hidden;
}

.item-description{
    font-size: 1rem;
    color: gray;
    overflow: hidden;
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
}`, "",{"version":3,"sources":["webpack://./src/style/style.css"],"names":[],"mappings":"AAAA;IACI,+BAA+B;IAC/B,uBAAuB;IACvB,gCAAgC;IAChC,gCAAgC;AACpC;;;AAGA;IACI,8BAA8B;IAC9B,SAAS;IACT,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;AAEA,WAAW;AACX;IACI,YAAY;IACZ,WAAW;IACX,6CAA6C;IAC7C,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,4BAA4B;IAC5B,qBAAqB;IACrB,yBAAyB;AAC7B;AACA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,OAAO;IACP,mBAAmB;IACnB,8CAA8C;IAC9C,kBAAkB;IAClB,wCAAwC;IACxC,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;IAChB,aAAa;IACb,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;;;AAIA,SAAS;AACT;IACI,kBAAkB;IAClB,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;;AAGA,YAAY;AACZ;IACI,gBAAgB;IAChB,iBAAiB;AACrB;;;AAGA;IACI,aAAa;IACb,wBAAwB;IACxB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,aAAa,EAAE,uBAAuB;IACtC,gBAAgB,EAAE,8BAA8B;IAChD,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;;;AAGA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,8CAA8C;IAC9C,sBAAsB;AAC1B;;AAEA;;IAEI,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,gBAAgB;AACpB;;;;AAIA,WAAW;AACX;IACI,6CAA6C;IAC7C,eAAe;IACf,4BAA4B;IAC5B,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,SAAS;IACT,sBAAsB;AAC1B","sourcesContent":[":root{\n    --nav-background-color: #DC144F;\n    --nav-text-color: white;\n    --main-background-color: #e7e5e4;\n    --item-background-color: #fafaf9;\n}\n\n\nbody {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    min-height: 100vh;\n}\n\n#app{\n    display: flex;\n    flex-direction: column;\n    height: 100vh;\n}\n\nh2{\n    font-size: 2rem;\n}\n\n/* Header */\nheader{\n    height: 12vh;\n    width: 100%;\n    background-color: var(--nav-background-color);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.nav-buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    list-style-type: none;\n}\n\n.nav-buttons > li{\n    font-size: 1.3rem;\n    cursor: pointer;\n    color: var(--nav-text-color);\n    margin-inline: 1.5rem;\n    text-transform: uppercase;\n}\n.nav-buttons > li:hover{\n    border-bottom: 2px solid var(--nav-text-color);\n    padding-bottom: 5px;\n}\n\nmain {\n    margin: 0 auto;\n    flex: 1;\n    padding-block: 20px;\n    background-color: var(--main-background-color);\n    border-radius: 5px;\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    width: 100vw;\n    min-height: 80vh;\n    display: flex;\n    justify-content: center;\n    overflow: scroll;\n}\n\n#content{\n    padding: 1rem;\n    max-width: 700px;\n    min-width: 250px;\n    width: 100vw;\n}\n\n\n\n/* Home */\n.home-title{\n    font-size: 3.5rem ;\n    text-align: center;\n}\n\n.home-description{\n    font-size: 2rem;\n}\n\n\n/* Contact */\n.info{\n    text-align: left;\n    font-size: 1.5rem;\n}\n\n\n#form{\n    display: flex;\n    flex-flow: column nowrap;\n    text-align: left;\n}\n\n.row{\n    display: flex;\n    flex-direction: column;\n}\n\n#submit{\n    margin-bottom: 1.2rem;\n}\n\n.input{\n    height: 3rem;\n    font-size: 1rem;\n    min-width: 450px;\n}\n\n#msg-input{\n    height: 100px; /* Set a fixed height */\n    resize: vertical; /* Allow horizontal resizing */\n    overflow: scroll; \n    font-size: 1rem;\n    min-width: 450px;\n}\n\n\n/* Menu */\n.items{\n    display: flex;\n    flex-direction: column;\n}\n\n.item{\n    display: flex;\n    flex-direction: column;\n    margin: 2rem;\n    background-color: var(--item-background-color);\n    border: grey 2px solid;\n}\n\n.item-name,\n.item-cost{\n    font-size: 1.2rem;\n    font-weight: bold;\n    overflow: hidden;\n}\n\n.item-description{\n    font-size: 1rem;\n    color: gray;\n    overflow: hidden;\n}\n\n\n\n/* Footer */\nfooter{\n    background-color: var(--nav-background-color);\n    font-size: 1rem;\n    color: var(--nav-text-color);\n    padding: 12px;\n    text-align: center;\n    position: relative;\n    bottom: 0;\n    letter-spacing: 0 1rem;\n}"],"sourceRoot":""}]);
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
    SubmitButton.setAttribute('id', 'submit');
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
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function NewItem(name, description ,cost){
    const Item = document.createElement('div');
    const TextPart = document.createElement('div');
    const Name = document.createElement('h3');
    const Cost = document.createElement('p');
    const Description = document.createElement('p');

    Item.classList.add('item');
    Name.classList.add('item-name');
    Description.classList.add('item-description');
    Cost.classList.add('item-cost');

    Name.textContent = name;
    Description.textContent = description;
    Cost.textContent = cost + "$";
    TextPart.appendChild(Name);
    TextPart.appendChild(Description);
    TextPart.appendChild(Cost);
    Item.appendChild(TextPart);
    return Item;
}







function loadMenu(){
    const Content = document.getElementById("content");
    const Title = document.createElement("h2");
    const Items = document.createElement("div");

    Items.classList.add("items");

    Title.textContent = "Our Pancake Menu";


    removeAllChildNodes(Content);


    Items.appendChild(NewItem("Chocolate Peanut Butter",
     "Our homemade smooth peanut butter filling sandwiched between two chocolate pancakes. Topped with vanilla ice cream, cream then drizzled with smooth peanut butter sauce and chocolate sauce."
     , 20));
    Items.appendChild(NewItem("Lemon Meringue",
     "Buttermilk pancakes served with homemade lemon curd, topped with cream, vanilla ice cream and meringue."
     , 20));
    Items.appendChild(NewItem("Coco Berry",
     "Chocolate pancakes with coconut, cream, vanilla ice cream topped with our chocolate sauce and raspberry coulis…a perfect match."
     , 20));
    Items.appendChild(NewItem("Strawberry Patch",
     "Buttermilk pancakes with fresh strawberries, cream, vanilla ice cream and strawberry sauce."
     , 20));


    Content.appendChild(Title);
    Content.appendChild(Items);

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
    (0,_pages_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    setBtnEvent();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlDLHNDQUFzQyxtREFBUTtBQUM5Qyx5Q0FBeUMsc0RBQVc7QUFDcEQ7OztBQUdBO0FBQ0EsSUFBSSx1REFBUTtBQUNaO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL3NyYy9zdHlsZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9zcmMvc3R5bGUvc3R5bGUuY3NzP2M5ZjAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9zcmMvcGFnZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9zcmMvcGFnZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9zcmMvcGFnZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UtL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS0vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290e1xuICAgIC0tbmF2LWJhY2tncm91bmQtY29sb3I6ICNEQzE0NEY7XG4gICAgLS1uYXYtdGV4dC1jb2xvcjogd2hpdGU7XG4gICAgLS1tYWluLWJhY2tncm91bmQtY29sb3I6ICNlN2U1ZTQ7XG4gICAgLS1pdGVtLWJhY2tncm91bmQtY29sb3I6ICNmYWZhZjk7XG59XG5cblxuYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG4jYXBwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5oMntcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi8qIEhlYWRlciAqL1xuaGVhZGVye1xuICAgIGhlaWdodDogMTJ2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmF2LWJ1dHRvbnN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLm5hdi1idXR0b25zID4gbGl7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1uYXYtdGV4dC1jb2xvcik7XG4gICAgbWFyZ2luLWlubGluZTogMS41cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ubmF2LWJ1dHRvbnMgPiBsaTpob3ZlcntcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmF2LXRleHQtY29sb3IpO1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbm1haW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1ibG9jazogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogODB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cbiNjb250ZW50e1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICBtaW4td2lkdGg6IDI1MHB4O1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuXG5cbi8qIEhvbWUgKi9cbi5ob21lLXRpdGxle1xuICAgIGZvbnQtc2l6ZTogMy41cmVtIDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuXG4vKiBDb250YWN0ICovXG4uaW5mb3tcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG5cbiNmb3Jte1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4jc3VibWl0e1xuICAgIG1hcmdpbi1ib3R0b206IDEuMnJlbTtcbn1cblxuLmlucHV0e1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbWluLXdpZHRoOiA0NTBweDtcbn1cblxuI21zZy1pbnB1dHtcbiAgICBoZWlnaHQ6IDEwMHB4OyAvKiBTZXQgYSBmaXhlZCBoZWlnaHQgKi9cbiAgICByZXNpemU6IHZlcnRpY2FsOyAvKiBBbGxvdyBob3Jpem9udGFsIHJlc2l6aW5nICovXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDsgXG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1pbi13aWR0aDogNDUwcHg7XG59XG5cblxuLyogTWVudSAqL1xuLml0ZW1ze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLml0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pdGVtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlcjogZ3JleSAycHggc29saWQ7XG59XG5cbi5pdGVtLW5hbWUsXG4uaXRlbS1jb3N0e1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5pdGVtLWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cblxuLyogRm9vdGVyICovXG5mb290ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWJhY2tncm91bmQtY29sb3IpO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAgMXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxnQ0FBZ0M7QUFDcEM7OztBQUdBO0lBQ0ksOEJBQThCO0lBQzlCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxXQUFXO0FBQ1g7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDZDQUE2QztJQUM3QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDhDQUE4QztJQUM5QyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsT0FBTztJQUNQLG1CQUFtQjtJQUNuQiw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7Ozs7QUFJQSxTQUFTO0FBQ1Q7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBR0EsWUFBWTtBQUNaO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWEsRUFBRSx1QkFBdUI7SUFDdEMsZ0JBQWdCLEVBQUUsOEJBQThCO0lBQ2hELGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFHQSxTQUFTO0FBQ1Q7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osOENBQThDO0lBQzlDLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7O0FBSUEsV0FBVztBQUNYO0lBQ0ksNkNBQTZDO0lBQzdDLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULHNCQUFzQjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1uYXYtYmFja2dyb3VuZC1jb2xvcjogI0RDMTQ0RjtcXG4gICAgLS1uYXYtdGV4dC1jb2xvcjogd2hpdGU7XFxuICAgIC0tbWFpbi1iYWNrZ3JvdW5kLWNvbG9yOiAjZTdlNWU0O1xcbiAgICAtLWl0ZW0tYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmOTtcXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2FwcHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuaDJ7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuaGVhZGVye1xcbiAgICBoZWlnaHQ6IDEydmg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubmF2LWJ1dHRvbnN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5uYXYtYnV0dG9ucyA+IGxpe1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogdmFyKC0tbmF2LXRleHQtY29sb3IpO1xcbiAgICBtYXJnaW4taW5saW5lOiAxLjVyZW07XFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5uYXYtYnV0dG9ucyA+IGxpOmhvdmVye1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbmF2LXRleHQtY29sb3IpO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG5cXG5tYWluIHtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIGZsZXg6IDE7XFxuICAgIHBhZGRpbmctYmxvY2s6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1pbi1oZWlnaHQ6IDgwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG4gICAgbWluLXdpZHRoOiAyNTBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG5cXG5cXG4vKiBIb21lICovXFxuLmhvbWUtdGl0bGV7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtIDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaG9tZS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbn1cXG5cXG5cXG4vKiBDb250YWN0ICovXFxuLmluZm97XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5cXG4jZm9ybXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbn1cXG5cXG4ucm93e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc3VibWl0e1xcbiAgICBtYXJnaW4tYm90dG9tOiAxLjJyZW07XFxufVxcblxcbi5pbnB1dHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi13aWR0aDogNDUwcHg7XFxufVxcblxcbiNtc2ctaW5wdXR7XFxuICAgIGhlaWdodDogMTAwcHg7IC8qIFNldCBhIGZpeGVkIGhlaWdodCAqL1xcbiAgICByZXNpemU6IHZlcnRpY2FsOyAvKiBBbGxvdyBob3Jpem9udGFsIHJlc2l6aW5nICovXFxuICAgIG92ZXJmbG93OiBzY3JvbGw7IFxcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIG1pbi13aWR0aDogNDUwcHg7XFxufVxcblxcblxcbi8qIE1lbnUgKi9cXG4uaXRlbXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5pdGVte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWl0ZW0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGJvcmRlcjogZ3JleSAycHggc29saWQ7XFxufVxcblxcbi5pdGVtLW5hbWUsXFxuLml0ZW0tY29zdHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uaXRlbS1kZXNjcmlwdGlvbntcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuXFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHZhcigtLW5hdi10ZXh0LWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAgMXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VJbmZvKCl7XG4gICAgY29uc3QgSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgUGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuXG4gICAgUGhvbmVOdW1iZXIudGV4dENvbnRlbnQgPSBcIlBob25lIE51bWJlcjogOTczLTQwOS0zMzEzXCI7XG4gICAgRW1haWwudGV4dENvbnRlbnQgPSBcIkVtYWlsOiBQYW5jYWtlSG9tZUBnbWFpbC5jb21cIjtcbiAgICBBZGRyZXNzLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiAyMjFCIEJha2VyIFN0cmVldFwiO1xuXG5cbiAgICBJbmZvLmFwcGVuZENoaWxkKFBob25lTnVtYmVyKTtcbiAgICBJbmZvLmFwcGVuZENoaWxkKEVtYWlsKTtcbiAgICBJbmZvLmFwcGVuZENoaWxkKEFkZHJlc3MpO1xuXG4gICAgSW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcblxuICAgIHJldHVybiBJbmZvO1xufVxuXG5mdW5jdGlvbiBtYWtlRm9ybSgpe1xuICAgIGNvbnN0IEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIEZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdmb3JtJyk7XG4gICAgRm9ybS5zZXRBdHRyaWJ1dGUoJ2FjdGlvbicsICcjJyk7IC8vIFNwZWNpZnkgZm9ybSBhY3Rpb25cbiAgICBcbiAgICAvLyBDcmVhdGUgaW5wdXQgZmllbGQgZm9yIG5hbWVcbiAgICBjb25zdCBOYW1lUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBOYW1lUm93LmNsYXNzTGlzdC5hZGQoXCJyb3dcIik7XG4gICAgY29uc3QgTmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBOYW1lTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZTogJztcbiAgICBjb25zdCBOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIik7XG4gICAgTmFtZVJvdy5hcHBlbmRDaGlsZChOYW1lTGFiZWwpOyAvLyBBcHBlbmQgbGFiZWwgdG8gcm93XG4gICAgTmFtZVJvdy5hcHBlbmRDaGlsZChOYW1lSW5wdXQpOyAvLyBBcHBlbmQgaW5wdXQgdG8gcm93XG4gICAgRm9ybS5hcHBlbmRDaGlsZChOYW1lUm93KTsgLy8gQXBwZW5kIHJvdyB0byBmb3JtXG5cblxuICAgIC8vIENyZWF0ZSBpbnB1dCBmaWVsZCBmb3IgUGhvbmUgTnVtYmVyIFxuICAgIGNvbnN0IFBob25lUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBQaG9uZVJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIGNvbnN0IFBob25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIFBob25lTGFiZWwudGV4dENvbnRlbnQgPSAnUGhvbmUgTnVtYmVyOiAnO1xuICAgIGNvbnN0IFBob25lSW5wdXQ9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgUGhvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGVsJyk7XG4gICAgUGhvbmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncGhvbmUnKTtcbiAgICBQaG9uZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnB1dFwiKTtcbiAgICBQaG9uZVJvdy5hcHBlbmRDaGlsZChQaG9uZUxhYmVsKTsgLy8gQXBwZW5kIGxhYmVsIHRvIHJvd1xuICAgIFBob25lUm93LmFwcGVuZENoaWxkKFBob25lSW5wdXQpOyAvLyBBcHBlbmQgaW5wdXQgdG8gcm93XG4gICAgRm9ybS5hcHBlbmRDaGlsZChQaG9uZVJvdyk7IC8vIEFwcGVuZCByb3cgdG8gZm9ybVxuXG4gICAgLy8gQ3JlYXRlIGlucHV0IGZpZWxkIGZvciBlbWFpbFxuICAgIGNvbnN0IEVtYWlsUm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBFbWFpbFJvdy5jbGFzc0xpc3QuYWRkKFwicm93XCIpO1xuICAgIGNvbnN0IEVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIEVtYWlsTGFiZWwudGV4dENvbnRlbnQgPSAnRW1haWw6ICc7XG4gICAgY29uc3QgRW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgRW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcbiAgICBFbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbWFpbCcpO1xuICAgIEVtYWlsSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0XCIpO1xuICAgIEVtYWlsUm93LmFwcGVuZENoaWxkKEVtYWlsTGFiZWwpOyAvLyBBcHBlbmQgbGFiZWwgdG8gcm93XG4gICAgRW1haWxSb3cuYXBwZW5kQ2hpbGQoRW1haWxJbnB1dCk7IC8vIEFwcGVuZCBpbnB1dCB0byByb3dcbiAgICBGb3JtLmFwcGVuZENoaWxkKEVtYWlsUm93KTsgLy8gQXBwZW5kIHJvdyB0byBmb3JtXG5cblxuICAgIC8vIENyZWF0ZSB0ZXh0IGFyZWEgZm9yIG9wZW4gdGV4dCBpbnB1dFxuICAgIGNvbnN0IE1lc3NhZ2VSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIE1lc3NhZ2VSb3cuY2xhc3NMaXN0LmFkZChcInJvd1wiKTtcbiAgICBjb25zdCBNZXNzYWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIE1lc3NhZ2VMYWJlbC50ZXh0Q29udGVudCA9ICdNZXNzYWdlOiAnO1xuICAgIGNvbnN0IE1lc3NhZ2VUZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgTWVzc2FnZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgndHlwZScsICdtZXNzYWdlJyk7XG4gICAgTWVzc2FnZVRleHRhcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XG4gICAgTWVzc2FnZVRleHRhcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsICdtc2ctaW5wdXQnKTtcbiAgICBNZXNzYWdlVGV4dGFyZWEuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMTIwMCcpO1xuXG4gICAgY29uc3QgY2hhckNvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjaGFyQ291bnQudGV4dENvbnRlbnQ9XCIwLzEyMDBcIjtcbiAgICBjaGFyQ291bnQuc2V0QXR0cmlidXRlKCdpZCcsICdjaGFyLWNvdW50JylcblxuICAgIE1lc3NhZ2VUZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnN0IG1heExlbmd0aCA9IHBhcnNlSW50KE1lc3NhZ2VUZXh0YXJlYS5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpKTtcbiAgICAgICAgY29uc3QgY3VycmVudExlbmd0aCA9IE1lc3NhZ2VUZXh0YXJlYS52YWx1ZS5sZW5ndGg7XG4gICAgXG4gICAgICAgIC8vIFVwZGF0ZSBjaGFyYWN0ZXIgY291bnQgZGlzcGxheVxuICAgICAgICBjaGFyQ291bnQudGV4dENvbnRlbnQgPSBjdXJyZW50TGVuZ3RoICsgJy8nICsgbWF4TGVuZ3RoO1xuICAgIFxuICAgICAgICAvLyBDaGVjayBpZiBjaGFyYWN0ZXIgbGltaXQgaXMgZXhjZWVkZWRcbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIFRyaW0gdGhlIGV4Y2VzcyBjaGFyYWN0ZXJzXG4gICAgICAgICAgICBNZXNzYWdlVGV4dGFyZWEudmFsdWUgPSBNZXNzYWdlVGV4dGFyZWEudmFsdWUuc2xpY2UoMCwgbWF4TGVuZ3RoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBNZXNzYWdlUm93LmFwcGVuZENoaWxkKE1lc3NhZ2VMYWJlbCk7IC8vIEFwcGVuZCBsYWJlbCB0byByb3dcbiAgICBNZXNzYWdlUm93LmFwcGVuZENoaWxkKE1lc3NhZ2VUZXh0YXJlYSk7IC8vIEFwcGVuZCBpbnB1dCB0byByb3dcbiAgICBNZXNzYWdlUm93LmFwcGVuZENoaWxkKGNoYXJDb3VudCk7XG4gICAgRm9ybS5hcHBlbmRDaGlsZChNZXNzYWdlUm93KTsgLy8gQXBwZW5kIHJvdyB0byBmb3JtXG5cblxuICAgIC8vIENyZWF0ZSBzdWJtaXQgYnV0dG9uXG4gICAgY29uc3QgU3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBTdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgIFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgJ1N1Ym1pdCcpO1xuICAgIFN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdCcpO1xuICAgIEZvcm0uYXBwZW5kQ2hpbGQoU3VibWl0QnV0dG9uKTsgLy8gQXBwZW5kIHN1Ym1pdCBidXR0b24gdG8gZm9ybVxuXG4gICAgLy8gQWRkIGZvcm0gc3VibWl0IGV2ZW50IGxpc3RlbmVyXG4gICAgRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBQcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXNzaW9uIGJlaGF2aW9yXG4gICAgICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb24gKGUuZy4sIHZhbGlkYXRlIGlucHV0cywgc3VibWl0IGRhdGEpXG4gICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShGb3JtKTtcbiAgICAgICAgbGV0IGZvcm1EYXRhT2JqZWN0ID0ge307XG4gICAgICAgIGZvcm1EYXRhLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgZm9ybURhdGFPYmplY3Rba2V5XSA9IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coJ0Zvcm0gc3VibWl0dGVkOicsIGZvcm1EYXRhT2JqZWN0KTtcbiAgICB9KTtcblxuXG4gICAgcmV0dXJuIEZvcm07XG59XG5cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKXtcbiAgICBjb25zdCBDb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IEluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBJbmZvID0gbWFrZUluZm8oKTtcbiAgICBjb25zdCBGb3JtVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgY29uc3QgRm9ybSA9IG1ha2VGb3JtKCk7XG5cbiAgICBJbmZvVGl0bGUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgVXNcIjtcbiAgICBGb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkZvcm0gZm9yIENvbnRhY3QgdXNcIlxuXG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKENvbnRlbnQpO1xuXG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChJbmZvVGl0bGUpO1xuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoSW5mbyk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChGb3JtVGl0bGUpO1xuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoRm9ybSk7XG4gICAgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3Q7IiwiZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgY29uc3QgQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgVGl0bGUudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gUGFuY2FrZSBob3VzZVwiO1xuICAgIERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJUaGUgUGFuY2FrZSBIb3VzZSBtZW51IGlzIGFsbCBhIHRyaWJ1dGUgdG8gdGhlIGNsYXNzaWMgQW1lcmljYW4gZGluZXIgb2YgdGhlIDE5NTBzIGFuZCAxOTYwcy4gVGhlIHVzZSBvZiBmcmVzaCByYXcgbWF0ZXJpYWxzIGFuZCB0aGUgbWFpbnRlbmFuY2Ugb2YgcXVhbGl0eSBhcmUgYWxyZWFkeSBpbiBvdXIgc3Bpcml0IHRvZGF5LlwiO1xuXG4gICAgVGl0bGUuY2xhc3NMaXN0LmFkZChcImhvbWUtdGl0bGVcIik7XG4gICAgRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcImhvbWUtZGVzY3JpcHRpb25cIik7XG4gICAgXG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKENvbnRlbnQpO1xuXG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChUaXRsZSk7XG4gICAgQ29udGVudC5hcHBlbmRDaGlsZChEZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBsb2FkSG9tZTtcbiIsImZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICAgIHBhcmVudC5yZW1vdmVDaGlsZChwYXJlbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBOZXdJdGVtKG5hbWUsIGRlc2NyaXB0aW9uICxjb3N0KXtcbiAgICBjb25zdCBJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgVGV4dFBhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBDb3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IERlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgSXRlbS5jbGFzc0xpc3QuYWRkKCdpdGVtJyk7XG4gICAgTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICBEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgQ29zdC5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvc3QnKTtcblxuICAgIE5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG4gICAgQ29zdC50ZXh0Q29udGVudCA9IGNvc3QgKyBcIiRcIjtcbiAgICBUZXh0UGFydC5hcHBlbmRDaGlsZChOYW1lKTtcbiAgICBUZXh0UGFydC5hcHBlbmRDaGlsZChEZXNjcmlwdGlvbik7XG4gICAgVGV4dFBhcnQuYXBwZW5kQ2hpbGQoQ29zdCk7XG4gICAgSXRlbS5hcHBlbmRDaGlsZChUZXh0UGFydCk7XG4gICAgcmV0dXJuIEl0ZW07XG59XG5cblxuXG5cblxuXG5cbmZ1bmN0aW9uIGxvYWRNZW51KCl7XG4gICAgY29uc3QgQ29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBjb25zdCBJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICBJdGVtcy5jbGFzc0xpc3QuYWRkKFwiaXRlbXNcIik7XG5cbiAgICBUaXRsZS50ZXh0Q29udGVudCA9IFwiT3VyIFBhbmNha2UgTWVudVwiO1xuXG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKENvbnRlbnQpO1xuXG5cbiAgICBJdGVtcy5hcHBlbmRDaGlsZChOZXdJdGVtKFwiQ2hvY29sYXRlIFBlYW51dCBCdXR0ZXJcIixcbiAgICAgXCJPdXIgaG9tZW1hZGUgc21vb3RoIHBlYW51dCBidXR0ZXIgZmlsbGluZyBzYW5kd2ljaGVkIGJldHdlZW4gdHdvIGNob2NvbGF0ZSBwYW5jYWtlcy4gVG9wcGVkIHdpdGggdmFuaWxsYSBpY2UgY3JlYW0sIGNyZWFtIHRoZW4gZHJpenpsZWQgd2l0aCBzbW9vdGggcGVhbnV0IGJ1dHRlciBzYXVjZSBhbmQgY2hvY29sYXRlIHNhdWNlLlwiXG4gICAgICwgMjApKTtcbiAgICBJdGVtcy5hcHBlbmRDaGlsZChOZXdJdGVtKFwiTGVtb24gTWVyaW5ndWVcIixcbiAgICAgXCJCdXR0ZXJtaWxrIHBhbmNha2VzIHNlcnZlZCB3aXRowqBob21lbWFkZSBsZW1vbiBjdXJkLCB0b3BwZWQgd2l0aCBjcmVhbSwgdmFuaWxsYSBpY2UgY3JlYW0gYW5kIG1lcmluZ3VlLlwiXG4gICAgICwgMjApKTtcbiAgICBJdGVtcy5hcHBlbmRDaGlsZChOZXdJdGVtKFwiQ29jbyBCZXJyeVwiLFxuICAgICBcIkNob2NvbGF0ZSBwYW5jYWtlcyB3aXRoIGNvY29udXQsIGNyZWFtLCB2YW5pbGxhIGljZSBjcmVhbSB0b3BwZWQgd2l0aCBvdXIgY2hvY29sYXRlIHNhdWNlIGFuZCByYXNwYmVycnkgY291bGlz4oCmYSBwZXJmZWN0IG1hdGNoLlwiXG4gICAgICwgMjApKTtcbiAgICBJdGVtcy5hcHBlbmRDaGlsZChOZXdJdGVtKFwiU3RyYXdiZXJyeSBQYXRjaFwiLFxuICAgICBcIkJ1dHRlcm1pbGsgcGFuY2FrZXMgd2l0aCBmcmVzaCBzdHJhd2JlcnJpZXMsIGNyZWFtLCB2YW5pbGxhIGljZSBjcmVhbSBhbmQgc3RyYXdiZXJyeSBzYXVjZS5cIlxuICAgICAsIDIwKSk7XG5cblxuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoVGl0bGUpO1xuICAgIENvbnRlbnQuYXBwZW5kQ2hpbGQoSXRlbXMpO1xuXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBsb2FkTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgbG9hZEhvbWUgZnJvbSAnLi9wYWdlcy9ob21lJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL3BhZ2VzL21lbnUnO1xuaW1wb3J0IGxvYWRDb250YWN0IGZyb20gJy4vcGFnZXMvY29udGFjdCc7XG5pbXBvcnQgJy4vc3R5bGUvc3R5bGUuY3NzJztcblxuXG5pbml0KCk7XG5cbmZ1bmN0aW9uIHNldEJ0bkV2ZW50KCl7XG4gICAgY29uc3QgSG9tZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaG9tZUJ0blwiKVxuICAgIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCdG5cIilcbiAgICBjb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWN0QnRuXCIpXG5cbiAgICBIb21lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbG9hZEhvbWUpO1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkTWVudSk7XG4gICAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRDb250YWN0KTtcbn1cblxuXG5mdW5jdGlvbiBpbml0KCl7XG4gICAgbG9hZEhvbWUoKTtcbiAgICBzZXRCdG5FdmVudCgpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==