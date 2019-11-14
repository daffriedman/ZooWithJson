(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<app-header></app-header>\n<div class=\"beastClass\">\n        <app-beasts-panel *ngIf=\"paging.currentPanel == 'beasts'\"></app-beasts-panel>\n</div>\n<div class=\"birdClass\">\n        <app-birds-panel *ngIf=\"paging.currentPanel == 'birds'\"></app-birds-panel>\n</div>\n       \n      \n\n<div class=\"wildClass\">\n\n        <app-wilds-panel *ngIf=\"paging.currentPanel == 'wilds'\"></app-wilds-panel>\n</div>\n\n\n\n<app-paginator (moveItem)= \"getUp($event)\"></app-paginator>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/card/birds-card/birds-card.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/card/birds-card/birds-card.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n        <h3> {{birdsSvc.currentBird.name}}</h3>\n            <div>size: {{birdsSvc.currentBird.size}}</div>\n            <div>lifeSpan: {{birdsSvc.currentBird.lifeSpan}}</div>\n            <div>habitat:{{birdsSvc.currentBird.habitat}}</div>\n            <img [src]=\"birdsSvc.currentBird.img\"/>\n            \n        </div>\n        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n    <h3>{{beastsSvc.currentBeast.name}}</h3>\n    <div>size: {{beastsSvc.currentBeast.size}}</div>\n    <div>lifeSpan: {{beastsSvc.currentBeast.lifeSpan}}</div>\n    <div>habitat:{{beastsSvc.currentBeast.habitat}}</div>\n    <img [src]=\"beastsSvc.currentBeast.img\"/>\n    \n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    \n        <h3>{{wildSvc.currentWild.name}}</h3>\n            <div>size: {{wildSvc.currentWild.size}}</div>\n            <div>lifeSpan: {{wildSvc.currentWild.lifeSpan}}</div>\n            <div>habitat:{{wildSvc.currentWild.habitat}}</div>\n            <img [src]=\"wildSvc.currentWild.img\"/>\n            \n        \n        </div>\n        \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-header\">\n    <div class=\"logo\">\n        <img src=\"https://images.unsplash.com/photo-1531989636497-7691416050aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80\">\n    </div>\n<app-nav></app-nav>\n<div class=\"login-user\">\n    Hello Daniel\n\n\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"nav-ul\">\n<li (click)=\"navTo('birds')\">birds</li>\n<li (click)=\"navTo('beasts')\">beasts</li>\n<li (click)=\"navTo('wilds')\">wilds</li>\n\n\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"flex\">\n    <div (click)=\"moveItemPage(-1)\">\n        <img src=\"https://images.unsplash.com/photo-1454702762838-a6df8cc3517f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\">\n    </div>\n    <div (click)=\"moveItemPage(1)\">\n        <img src=\"https://images.unsplash.com/photo-1562008752-2459495a0c05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60\">\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Welcome to the Beast Corral </h1>\n<div class=\"flex\">\n     <div class=\"beastList\">\n        <h2>List Of beast:</h2> \n        <ul>\n            <li *ngFor=\"let b of beastsSvc.beasts\"> {{ b.name }} </li>\n        </ul>\n    </div>\n\n\n    <div class=\"beastcard\">\n        <app-beast-card></app-beast-card>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h1>Welcome to the birds observatory</h1>\n\n<div class=\"flex\">\n    <div class=\"birdList\">\n        <h2> Birds list:</h2>\n        <ul>\n            <li *ngFor=\"let b of birdsSvc.birds\"> {{ b.name }} </li>\n        </ul>\n    </div>\n\n\n    <div class = \"birdCard\">\n        <app-birds-card></app-birds-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("   <h1>Welcome to the Wild!!!</h1>\n<div class=\"flex\">\n         <div class=\"wildList\">\n             <h2> Wilds list:</h2>\n             <ul>\n                 <li *ngFor=\"let b of wildSvc.wilds\"> {{ b.name }} </li>\n             </ul>\n        </div>\n     <div class=\"wildCard\">\n             <app-wild-card></app-wild-card>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".beastClass{\r\n     display: flex;\r\n    justify-content: space-evenly; \r\n    \r\n    background-color: red;\r\n}\r\n.birdClass{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    \r\n    background-color: blue;\r\n}\r\n.wildClass{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    background-color: brown;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxhQUFhO0lBQ2QsNkJBQTZCOztJQUU3QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7O0lBRTdCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3Qix1QkFBdUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZWFzdENsYXNze1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgXHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4uYmlyZENsYXNze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG59XHJcbi53aWxkQ2xhc3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBicm93bjtcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/paging.service */ "./src/app/services/paging.service.ts");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/birds.service */ "./src/app/services/birds.service.ts");
/* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/beasts.service */ "./src/app/services/beasts.service.ts");
/* harmony import */ var _services_wilds_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/wilds.service */ "./src/app/services/wilds.service.ts");






// import { getUnpackedSettings } from 'http2';
let AppComponent = class AppComponent {
    constructor(paging, birds, beasts, wilds) {
        this.paging = paging;
        this.birds = birds;
        this.beasts = beasts;
        this.wilds = wilds;
        this.title = 'Avra-Zoo';
    }
    getUp(ev) {
        console.log('AppComponent  getUp', ev);
        switch (this.paging.currentPanel) {
            case 'birds':
                let newBirdIndex = this.getNewCurrentIndex(this.birds.currentBirdIndex, ev, this.birds.birds);
                this.birds.currentBirdIndex = newBirdIndex;
                this.birds.currentBird = this.birds.birds[newBirdIndex];
                break;
            case 'beasts':
                let newBeastIndex = this.getNewCurrentIndex(this.beasts.currentBeastIndex, ev, this.beasts.beasts);
                this.beasts.currentBeastIndex = newBeastIndex;
                this.beasts.currentBeast = this.beasts.beasts[newBeastIndex];
                break;
            case 'wilds':
                let newWildIndex = this.getNewCurrentIndex(this.wilds.currentWildIndex, ev, this.wilds.wilds);
                this.wilds.currentWildIndex = newWildIndex;
                this.wilds.currentWild = this.wilds.wilds[newWildIndex];
                break;
            default:
                break;
        }
    }
    getNewCurrentIndex(current, delta, array) {
        let max = array.length - 1;
        let newIndex = current + delta;
        if (newIndex > max) {
            newIndex = 0;
        }
        if (newIndex < 0) {
            newIndex = max;
        }
        return newIndex;
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] },
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_3__["BirdsService"] },
    { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_4__["BeastsService"] },
    { type: _services_wilds_service__WEBPACK_IMPORTED_MODULE_5__["WildsService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/general/header/header.component */ "./src/app/comps/general/header/header.component.ts");
/* harmony import */ var _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/general/nav/nav.component */ "./src/app/comps/general/nav/nav.component.ts");
/* harmony import */ var _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comps/panels/beasts-panel/beasts-panel.component */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts");
/* harmony import */ var _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./comps/cards/beast-card/beast-card.component */ "./src/app/comps/cards/beast-card/beast-card.component.ts");
/* harmony import */ var _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./comps/panels/birds-panel/birds-panel.component */ "./src/app/comps/panels/birds-panel/birds-panel.component.ts");
/* harmony import */ var _comps_card_birds_card_birds_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comps/card/birds-card/birds-card.component */ "./src/app/comps/card/birds-card/birds-card.component.ts");
/* harmony import */ var _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comps/panels/wilds-panel/wilds-panel.component */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts");
/* harmony import */ var _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comps/cards/wild-card/wild-card.component */ "./src/app/comps/cards/wild-card/wild-card.component.ts");
/* harmony import */ var _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comps/general/paginator/paginator.component */ "./src/app/comps/general/paginator/paginator.component.ts");
/* harmony import */ var _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./comps/general/footer/footer.component */ "./src/app/comps/general/footer/footer.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _comps_general_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
            _comps_general_nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
            _comps_panels_beasts_panel_beasts_panel_component__WEBPACK_IMPORTED_MODULE_6__["BeastsPanelComponent"],
            _comps_cards_beast_card_beast_card_component__WEBPACK_IMPORTED_MODULE_7__["BeastCardComponent"],
            _comps_panels_birds_panel_birds_panel_component__WEBPACK_IMPORTED_MODULE_8__["BirdsPanelComponent"],
            _comps_card_birds_card_birds_card_component__WEBPACK_IMPORTED_MODULE_9__["BirdsCardComponent"],
            _comps_panels_wilds_panel_wilds_panel_component__WEBPACK_IMPORTED_MODULE_10__["WildsPanelComponent"],
            _comps_cards_wild_card_wild_card_component__WEBPACK_IMPORTED_MODULE_11__["WildCardComponent"],
            _comps_general_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_12__["PaginatorComponent"],
            _comps_general_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/comps/card/birds-card/birds-card.component.css":
/*!****************************************************************!*\
  !*** ./src/app/comps/card/birds-card/birds-card.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n  width:300px;\r\n  height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZC9iaXJkcy1jYXJkL2JpcmRzLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkL2JpcmRzLWNhcmQvYmlyZHMtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gIHdpZHRoOjMwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/card/birds-card/birds-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/comps/card/birds-card/birds-card.component.ts ***!
  \***************************************************************/
/*! exports provided: BirdsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsCardComponent", function() { return BirdsCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");



let BirdsCardComponent = class BirdsCardComponent {
    constructor(birdsSvc) {
        this.birdsSvc = birdsSvc;
        console.log("in the birdscard constructor ");
    }
    ngOnInit() {
    }
};
BirdsCardComponent.ctorParameters = () => [
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
];
BirdsCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birds-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/card/birds-card/birds-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-card.component.css */ "./src/app/comps/card/birds-card/birds-card.component.css")).default]
    })
], BirdsCardComponent);



/***/ }),

/***/ "./src/app/comps/cards/beast-card/beast-card.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/cards/beast-card/beast-card.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width:300px;\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvYmVhc3QtY2FyZC9iZWFzdC1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2NhcmRzL2JlYXN0LWNhcmQvYmVhc3QtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6MzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/comps/cards/beast-card/beast-card.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/cards/beast-card/beast-card.component.ts ***!
  \****************************************************************/
/*! exports provided: BeastCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastCardComponent", function() { return BeastCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/beasts.service */ "./src/app/services/beasts.service.ts");



let BeastCardComponent = class BeastCardComponent {
    constructor(beastsSvc) {
        this.beastsSvc = beastsSvc;
    }
    ngOnInit() {
    }
};
BeastCardComponent.ctorParameters = () => [
    { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
];
BeastCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beast-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beast-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/beast-card/beast-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beast-card.component.css */ "./src/app/comps/cards/beast-card/beast-card.component.css")).default]
    })
], BeastCardComponent);



/***/ }),

/***/ "./src/app/comps/cards/wild-card/wild-card.component.css":
/*!***************************************************************!*\
  !*** ./src/app/comps/cards/wild-card/wild-card.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    width:300px;\r\n    height: 300px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvY2FyZHMvd2lsZC1jYXJkL3dpbGQtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jYXJkcy93aWxkLWNhcmQvd2lsZC1jYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/cards/wild-card/wild-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/comps/cards/wild-card/wild-card.component.ts ***!
  \**************************************************************/
/*! exports provided: WildCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildCardComponent", function() { return WildCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wilds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wilds.service */ "./src/app/services/wilds.service.ts");



let WildCardComponent = class WildCardComponent {
    constructor(wildSvc) {
        this.wildSvc = wildSvc;
    }
    ngOnInit() {
    }
};
WildCardComponent.ctorParameters = () => [
    { type: _services_wilds_service__WEBPACK_IMPORTED_MODULE_2__["WildsService"] }
];
WildCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wild-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wild-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/cards/wild-card/wild-card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wild-card.component.css */ "./src/app/comps/cards/wild-card/wild-card.component.css")).default]
    })
], WildCardComponent);



/***/ }),

/***/ "./src/app/comps/general/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/general/footer/footer.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{display:block; width: 25%;margin:auto;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsRUFBRSxhQUFhLEVBQUUsVUFBVSxDQUFDLFdBQVcsQ0FBQyIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtkaXNwbGF5OmJsb2NrOyB3aWR0aDogMjUlO21hcmdpbjphdXRvO30iXX0= */");

/***/ }),

/***/ "./src/app/comps/general/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/general/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/comps/general/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/comps/general/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/comps/general/header/header.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg-header{\r\n    background:steelblue;\r\n    display:flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n}\r\n\r\n\r\n.logo{\r\n    width:25%;}\r\n\r\n\r\n.logo > img{width:100%;}\r\n\r\n\r\napp-nav{\r\n    display: block;\r\n    width:50%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksU0FBUyxDQUFDOzs7QUFFVixZQUFZLFVBQVUsQ0FBQzs7O0FBSTNCO0lBQ0ksY0FBYztJQUNkLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWhlYWRlcntcclxuICAgIGJhY2tncm91bmQ6c3RlZWxibHVlO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLmxvZ297XHJcbiAgICB3aWR0aDoyNSU7fVxyXG5cclxuICAgIC5sb2dvID4gaW1ne3dpZHRoOjEwMCU7fVxyXG5cclxuXHJcblxyXG5hcHAtbmF2e1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDo1MCU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/comps/general/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/comps/general/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/comps/general/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/comps/general/nav/nav.component.css":
/*!*****************************************************!*\
  !*** ./src/app/comps/general/nav/nav.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-ul{\r\n    display:flex;\r\n    justify-content:space-around;\r\n    width:50%;\r\n}\r\nli:hover{\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZiwwQkFBMEI7QUFDOUIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9nZW5lcmFsL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtdWx7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6NTAlO1xyXG59XHJcbmxpOmhvdmVye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/comps/general/nav/nav.component.ts":
/*!****************************************************!*\
  !*** ./src/app/comps/general/nav/nav.component.ts ***!
  \****************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_paging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/paging.service */ "./src/app/services/paging.service.ts");



let NavComponent = class NavComponent {
    constructor(paging) {
        this.paging = paging;
    }
    ngOnInit() {
    }
    navTo(pagename) {
        console.log(`navTo(${pagename})`);
        this.paging.currentPanel = pagename;
    }
};
NavComponent.ctorParameters = () => [
    { type: _services_paging_service__WEBPACK_IMPORTED_MODULE_2__["PagingService"] }
];
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/comps/general/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/comps/general/paginator/paginator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/comps/general/paginator/paginator.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{width:10vw;\r\nheight:60% ;}\r\n\r\n.flex{\r\n    display: flex; justify-content: space-around;\r\n    width: 30vw;\r\n    margin: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvZ2VuZXJhbC9wYWdpbmF0b3IvcGFnaW5hdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxVQUFVO0FBQ2QsV0FBVyxDQUFDOztBQUVaO0lBQ0ksYUFBYSxFQUFFLDZCQUE2QjtJQUM1QyxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2dlbmVyYWwvcGFnaW5hdG9yL3BhZ2luYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne3dpZHRoOjEwdnc7XHJcbmhlaWdodDo2MCUgO31cclxuXHJcbi5mbGV4e1xyXG4gICAgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIG1hcmdpbjogYXV0bztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/general/paginator/paginator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/comps/general/paginator/paginator.component.ts ***!
  \****************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


// import { EventEmitter } from 'events';
let PaginatorComponent = class PaginatorComponent {
    constructor() {
        this.moveItem = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    moveItemPage(delta) {
        console.log('PaginatorComponent moveItemPage ' + delta);
        this.moveItem.emit(delta);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PaginatorComponent.prototype, "moveItem", void 0);
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-paginator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./paginator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/general/paginator/paginator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./paginator.component.css */ "./src/app/comps/general/paginator/paginator.component.css")).default]
    })
], PaginatorComponent);



/***/ }),

/***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20%;\r\n}\r\n.beastcard{\r\n    display: inline-block;\r\n    width: 50%;\r\n   \r\n}\r\n.beastList{\r\n    display: inline-block;\r\n    width: 50%;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGFuZWxzL2JlYXN0cy1wYW5lbC9iZWFzdHMtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTs7QUFFZDtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7O0FBRWQiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9wYW5lbHMvYmVhc3RzLXBhbmVsL2JlYXN0cy1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luOiAyMCU7XHJcbn1cclxuLmJlYXN0Y2FyZHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgIFxyXG59XHJcbi5iZWFzdExpc3R7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/panels/beasts-panel/beasts-panel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/comps/panels/beasts-panel/beasts-panel.component.ts ***!
  \*********************************************************************/
/*! exports provided: BeastsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsPanelComponent", function() { return BeastsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/beasts.service */ "./src/app/services/beasts.service.ts");



let BeastsPanelComponent = class BeastsPanelComponent {
    constructor(beastsSvc) {
        this.beastsSvc = beastsSvc;
        console.log('BeastsPanelComponent ctor');
    }
    ngOnInit() {
    }
};
BeastsPanelComponent.ctorParameters = () => [
    { type: _services_beasts_service__WEBPACK_IMPORTED_MODULE_2__["BeastsService"] }
];
BeastsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beasts-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beasts-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/beasts-panel/beasts-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beasts-panel.component.css */ "./src/app/comps/panels/beasts-panel/beasts-panel.component.css")).default]
    })
], BeastsPanelComponent);



/***/ }),

/***/ "./src/app/comps/panels/birds-panel/birds-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comps/panels/birds-panel/birds-panel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20%;\r\n}\r\n.birdCard{\r\n    display: inline-block;\r\n    width: 50%;\r\n   \r\n}\r\n.birdList{\r\n    display: inline-block;\r\n    width: 50%;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGFuZWxzL2JpcmRzLXBhbmVsL2JpcmRzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcGFuZWxzL2JpcmRzLXBhbmVsL2JpcmRzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDIwJTtcclxufVxyXG4uYmlyZENhcmR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufVxyXG4uYmlyZExpc3R7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/panels/birds-panel/birds-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/panels/birds-panel/birds-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: BirdsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsPanelComponent", function() { return BirdsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_birds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/birds.service */ "./src/app/services/birds.service.ts");



let BirdsPanelComponent = class BirdsPanelComponent {
    constructor(birdsSvc) {
        this.birdsSvc = birdsSvc;
        console.log("in the birdspanelcomponent constructor ");
    }
    ngOnInit() {
    }
};
BirdsPanelComponent.ctorParameters = () => [
    { type: _services_birds_service__WEBPACK_IMPORTED_MODULE_2__["BirdsService"] }
];
BirdsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-birds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./birds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/birds-panel/birds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./birds-panel.component.css */ "./src/app/comps/panels/birds-panel/birds-panel.component.css")).default]
    })
], BirdsPanelComponent);



/***/ }),

/***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css":
/*!********************************************************************!*\
  !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flex{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 20%;\r\n}\r\n.wildCard{\r\n    display: inline-block;\r\n    width: 50%;\r\n   \r\n}\r\n.wildList{\r\n    display: inline-block;\r\n    width: 50%;\r\n   \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvcGFuZWxzL3dpbGRzLXBhbmVsL3dpbGRzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFdBQVc7QUFDZjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVOztBQUVkIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvcGFuZWxzL3dpbGRzLXBhbmVsL3dpbGRzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDIwJTtcclxufVxyXG4ud2lsZENhcmR7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufVxyXG4ud2lsZExpc3R7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/comps/panels/wilds-panel/wilds-panel.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/comps/panels/wilds-panel/wilds-panel.component.ts ***!
  \*******************************************************************/
/*! exports provided: WildsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildsPanelComponent", function() { return WildsPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_wilds_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/wilds.service */ "./src/app/services/wilds.service.ts");



let WildsPanelComponent = class WildsPanelComponent {
    constructor(wildSvc) {
        this.wildSvc = wildSvc;
        console.log('in the wilds panel constructor');
    }
    ngOnInit() {
    }
};
WildsPanelComponent.ctorParameters = () => [
    { type: _services_wilds_service__WEBPACK_IMPORTED_MODULE_2__["WildsService"] }
];
WildsPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wilds-panel',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wilds-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/comps/panels/wilds-panel/wilds-panel.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wilds-panel.component.css */ "./src/app/comps/panels/wilds-panel/wilds-panel.component.css")).default]
    })
], WildsPanelComponent);



/***/ }),

/***/ "./src/app/services/beasts.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/beasts.service.ts ***!
  \********************************************/
/*! exports provided: BeastsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeastsService", function() { return BeastsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BeastsService = class BeastsService {
    constructor() {
        this.beasts = [
            { name: 'Cow', size: 'large', lifeSpan: 'dinner', habitat: 'Texas', img: 'https://images.unsplash.com/photo-1546445317-29f4545e9d53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'Ram', size: 'big', lifeSpan: 'Rosh Hashana', habitat: 'Sudan', img: 'https://images.unsplash.com/photo-1490739043913-239b6cdf4084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'Sheep', size: 'medium', lifeSpan: 'Shabbos Seuda', habitat: 'Montana', img: 'https://images.unsplash.com/photo-1533415648777-407b626eb0fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'Chicken', size: 'small', lifeSpan: 'supper', habitat: 'Fine house', img: 'https://cdn.pixabay.com/photo/2018/08/15/11/49/hahn-3607868__340.jpg' },
        ];
        this.currentBeastIndex = 0;
        this.currentBeast = this.beasts[this.currentBeastIndex];
        console.log('ctor BeastsService', this.beasts);
    }
};
BeastsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BeastsService);



/***/ }),

/***/ "./src/app/services/birds.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/birds.service.ts ***!
  \*******************************************/
/*! exports provided: BirdsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BirdsService", function() { return BirdsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BirdsService = class BirdsService {
    constructor() {
        this.birds = [
            { name: 'blue-tail', size: 'small', lifeSpan: '15y', habitat: 'africa', img: 'https://st2.depositphotos.com/1578496/5184/i/950/depositphotos_51844897-stock-photo-blue-tailed-bee-eater-bird.jpg' },
            { name: 'Parakeet', size: 'small', lifeSpan: '2y', habitat: 'Amazon', img: 'https://media.timeout.com/images/105447019/630/472/image.jpg' },
            { name: 'Eagle', size: 'Big', lifeSpan: '5y', habitat: 'Mountains', img: 'https://images.unsplash.com/photo-1504350440606-81847d413a13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'falcon', size: 'large', lifeSpan: '115y', habitat: 'africa', img: 'https://images.unsplash.com/photo-1491168023551-478e768c038c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'flamingo', size: 'extra large', lifeSpan: '5m', habitat: 'africa', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzuiUGDRhXgJiQJuV-peWGfd5WuItJG4hGqQkuR6_a5ef0e0jSmA&s' },
        ];
        this.currentBirdIndex = 0;
        this.currentBird = this.birds[this.currentBirdIndex];
        console.log('ctor BirdService', this.birds);
    }
};
BirdsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BirdsService);



/***/ }),

/***/ "./src/app/services/paging.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/paging.service.ts ***!
  \********************************************/
/*! exports provided: PagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagingService", function() { return PagingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PagingService = class PagingService {
    constructor() {
        this.currentPanel = 'birds';
        console.log('pagingService ctor, currentPanel = ' + this.currentPanel);
    }
};
PagingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PagingService);



/***/ }),

/***/ "./src/app/services/wilds.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/wilds.service.ts ***!
  \*******************************************/
/*! exports provided: WildsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WildsService", function() { return WildsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WildsService = class WildsService {
    constructor() {
        this.wilds = [
            { name: 'Lion', size: 'Big', lifeSpan: '20y', habitat: 'africa', img: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'Tiger', size: 'Big', lifeSpan: '21y', habitat: 'Sahara', img: 'https://images.unsplash.com/photo-1526034332220-067b0f400e06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'Hyena', size: 'Medium', lifeSpan: '19y', habitat: 'Jungle', img: 'https://images.unsplash.com/photo-1564099441295-5a6eaab94716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
            { name: 'Cheetah', size: 'Medium', lifeSpan: '24y', habitat: 'africa', img: 'https://images.unsplash.com/photo-1526246708488-d433888791b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' },
            { name: 'Hippo', size: 'extra large', lifeSpan: '30y', habitat: 'africa', img: 'https://images.unsplash.com/photo-1520862250813-0cdd3841102b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
        ];
        this.currentWildIndex = 0;
        this.currentWild = this.wilds[this.currentWildIndex];
        console.log('ctor BeastService', this.wilds);
    }
};
WildsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WildsService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\stu.RAVTECH\Desktop\AvraZooProject\Avra-Zoo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map