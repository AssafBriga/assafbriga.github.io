(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/movies-list/movies-list.component */ "./src/app/components/movies-list/movies-list.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'movies', component: _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_2__["MoviesListComponent"]
    },
    {
        path: '', redirectTo: '/movies', pathMatch: 'full'
    },
    {
        path: '**', component: _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Herolo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/movies-list/movies-list.component */ "./src/app/components/movies-list/movies-list.component.ts");
/* harmony import */ var _components_add_or_edit_popup_add_or_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/add-or-edit-popup/add-or-edit-popup.component */ "./src/app/components/add-or-edit-popup/add-or-edit-popup.component.ts");
/* harmony import */ var _shared_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/popup/popup.component */ "./src/app/shared/popup/popup.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/page-not-found/page-not-found.component */ "./src/app/shared/page-not-found/page-not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var _components_movies_list_movies_item_movies_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/movies-list/movies-item/movies-item.component */ "./src/app/components/movies-list/movies-item/movies-item.component.ts");
/* harmony import */ var _shared_cleanTitle_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/cleanTitle.pipe */ "./src/app/shared/cleanTitle.pipe.ts");
/* harmony import */ var _shared_camelCase_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/camelCase.pipe */ "./src/app/shared/camelCase.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_movies_list_movies_list_component__WEBPACK_IMPORTED_MODULE_5__["MoviesListComponent"],
                _components_add_or_edit_popup_add_or_edit_popup_component__WEBPACK_IMPORTED_MODULE_6__["AddOrEditPopupComponent"],
                _shared_popup_popup_component__WEBPACK_IMPORTED_MODULE_7__["PopupComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _shared_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_9__["PageNotFoundComponent"],
                _components_movies_list_movies_item_movies_item_component__WEBPACK_IMPORTED_MODULE_12__["MoviesItemComponent"],
                _shared_cleanTitle_pipe__WEBPACK_IMPORTED_MODULE_13__["CleanTitle"],
                _shared_camelCase_pipe__WEBPACK_IMPORTED_MODULE_14__["CamelCase"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            providers: [_services_movies_service_service__WEBPACK_IMPORTED_MODULE_11__["MoviesService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-or-edit-popup/add-or-edit-popup.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/add-or-edit-popup/add-or-edit-popup.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blackScreen{\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.6);\r\n    -webkit-filter:blur(0px);\r\n            filter:blur(0px)\r\n}\r\n\r\n#popupContainer{ \r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -webkit-filter:none !important;\r\n            filter:none !important;\r\n    \r\n}\r\n\r\n#popup{\r\n    background-color: white;\r\n    border: 2px solid #7637aa;\r\n    border-radius: 10px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 90%;\r\n    max-width: 400px;\r\n    max-height: 700px;\r\n    min-width: 280px;\r\n\r\n\r\n}\r\n\r\nform {\r\n    width: 90%;\r\n    max-width: 350px;\r\n    \r\n    max-height: 700px;\r\n}\r\n\r\n/* input::-webkit-input-placeholder{\r\n    color:red;\r\n} */\r\n\r\n.inputContainer {\r\n\r\n \r\n    height: 90px;\r\n}\r\n\r\ninput[type=number],\r\ninput[type=text] {\r\n    border: 0;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    width: 100%;\r\n    height: 30px;\r\n    border-radius: 50px;\r\n    padding-left: 10px;\r\n    box-sizing: border-box;\r\n}\r\n\r\nlabel {\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=text]:hover,input[type=number]:hover {\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\ninput[type=text]:focus, input[type=number]:focus{\r\n    outline: none;\r\n    border: 1px solid rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nh2 {\r\n    color: rgba(0,0,0,.87);\r\n}\r\n\r\nh4 {\r\n    line-height: 0;\r\n    color: rgba(0,0,0,.87);\r\n}\r\n\r\n.errorMessage {\r\n    color: #dc3545;\r\n    font-size: 0.8em;\r\n}\r\n\r\nbutton {\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: rgba(0, 0, 0, 0.1);\r\n    border: none;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n    margin:5px;\r\n    box-shadow: 1px 1px 2px 2px #999999;\r\n}\r\n\r\nbutton:focus{\r\n        outline: none;\r\n}\r\n\r\nbutton:hover{\r\n    box-shadow: 1px 1px 1px 1px #999999;\r\n}\r\n\r\n.buttonsContainer {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.purpleBackground {\r\n    background-color: #7637aa;\r\n    color:white;\r\n}\r\n\r\n.purpleBackground:hover {\r\n    color:#f2f2f2;\r\n    background-color: #622d8e;\r\n    \r\n\r\n}\r\n\r\n.disabledClick:hover{\r\n    cursor: not-allowed;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtb3ItZWRpdC1wb3B1cC9hZGQtb3ItZWRpdC1wb3B1cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsT0FBTztJQUNQLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHlCQUFnQjtZQUFoQixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLCtCQUF1QjtZQUF2Qix1QkFBdUI7O0NBRTFCOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLDBCQUEwQjtJQUMxQixvQkFBb0I7SUFDcEIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjs7O0NBR3BCOztBQU9EO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjs7SUFFakIsa0JBQWtCO0NBQ3JCOztBQUVEOztJQUVJOztBQUVKOzs7SUFHSSxhQUFhO0NBQ2hCOztBQUdEOztJQUVJLFVBQVU7SUFDVixxQ0FBcUM7SUFDckMsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHFDQUFxQztDQUN4Qzs7QUFFRDtJQUNJLGNBQWM7SUFDZCxxQ0FBcUM7Q0FDeEM7O0FBQ0Q7SUFDSSx1QkFBdUI7Q0FDMUI7O0FBQ0Q7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0NBQzFCOztBQUlEO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxvQ0FBb0M7Q0FDdkM7O0FBRUQ7UUFDUSxjQUFjO0NBQ3JCOztBQUVEO0lBQ0ksb0NBQW9DO0NBQ3ZDOztBQUVEO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtDQUNmOztBQUVEO0lBQ0ksY0FBYztJQUNkLDBCQUEwQjs7O0NBRzdCOztBQUdEO0lBQ0ksb0JBQW9CO0NBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtb3ItZWRpdC1wb3B1cC9hZGQtb3ItZWRpdC1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JsYWNrU2NyZWVue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGZpbHRlcjpibHVyKDBweClcclxufVxyXG5cclxuI3BvcHVwQ29udGFpbmVyeyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZpbHRlcjpub25lICFpbXBvcnRhbnQ7XHJcbiAgICBcclxufVxyXG5cclxuI3BvcHVwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNzYzN2FhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICAgIG1pbi13aWR0aDogMjgwcHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5mb3JtIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgXHJcbiAgICBtYXgtaGVpZ2h0OiA3MDBweDtcclxufVxyXG5cclxuLyogaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbn0gKi9cclxuXHJcbi5pbnB1dENvbnRhaW5lciB7XHJcblxyXG4gXHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbn1cclxuXHJcblxyXG5pbnB1dFt0eXBlPW51bWJlcl0sXHJcbmlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmhvdmVyLGlucHV0W3R5cGU9bnVtYmVyXTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMsIGlucHV0W3R5cGU9bnVtYmVyXTpmb2N1c3tcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuaDIge1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxufVxyXG5oNCB7XHJcbiAgICBsaW5lLWhlaWdodDogMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLC44Nyk7XHJcbn1cclxuXHJcblxyXG5cclxuLmVycm9yTWVzc2FnZSB7XHJcbiAgICBjb2xvcjogI2RjMzU0NTtcclxuICAgIGZvbnQtc2l6ZTogMC44ZW07XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAycHggIzk5OTk5OTtcclxufVxyXG5cclxuYnV0dG9uOmZvY3Vze1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjOTk5OTk5O1xyXG59XHJcblxyXG4uYnV0dG9uc0NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ucHVycGxlQmFja2dyb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYzN2FhO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn1cclxuXHJcbi5wdXJwbGVCYWNrZ3JvdW5kOmhvdmVyIHtcclxuICAgIGNvbG9yOiNmMmYyZjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIyZDhlO1xyXG4gICAgXHJcblxyXG59XHJcblxyXG5cclxuLmRpc2FibGVkQ2xpY2s6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/add-or-edit-popup/add-or-edit-popup.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/add-or-edit-popup/add-or-edit-popup.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"blackScreen\">\n    <div id=\"popupContainer\">\n        <div id=\"popup\">\n            <div><h2>{{formTitle}}</h2></div>\n            <form [formGroup]=\"movieForm\" (ngSubmit)=\"onSubmit(movieForm.value)\" id=\"movieForm\" novalidate>\n                <div class=\"inputContainer\">\n                    <label for=\"title\"><h4>Title</h4></label>\n                    <input type=\"text\" placeholder=\"Title\" id=\"title\" formControlName=\"title\" autofocus>\n                    <span class=\"errorMessage\" *ngIf=\"movieForm.get('title').hasError('required')&&(movieForm.get('title').touched || movieForm.get('title').dirty)\">*Title required</span>\n                    <span class=\"errorMessage\" *ngIf=\"movieForm.get('title').hasError('checkIfTitleExist')&&(movieForm.get('title').touched || movieForm.get('title').dirty)\">*Title already exist</span>\n                </div>\n                <div class=\"inputContainer\">\n                    <label for=\"year\"><h4>Year</h4></label>\n                    <input type=\"number\" placeholder=\"Year\" id=\"year\" formControlName=\"year\">\n                    <span class=\"errorMessage\" *ngIf=\"movieForm.get('year').hasError('required')&&(movieForm.get('year').touched || movieForm.get('year').dirty)\">*Year required</span>\n                </div>\n\n                <div class=\"inputContainer\">\n                    <label for=\"runtime\"><h4>Runtime</h4></label>\n                    <input type=\"text\" placeholder=\"Runtime\" id=\"runtime\" formControlName=\"runtime\">\n                    <span class=\"errorMessage\" *ngIf=\"movieForm.get('runtime').hasError('required')&&(movieForm.get('runtime').touched || movieForm.get('runtime').dirty)\">*Runtime required</span>\n                </div>\n\n\n                <div class=\"inputContainer\">\n                    <label for=\"genre\"><h4>Genre</h4></label>\n                    <input type=\"text\" placeholder=\"Genre\" id=\"genre\" formControlName=\"genre\">\n                    <span class=\"errorMessage\" *ngIf=\"movieForm.get('genre').hasError('required')&&(movieForm.get('genre').touched || movieForm.get('genre').dirty)\">*Genre required</span>\n                </div>\n\n\n                <div class=\"inputContainer\">\n                    <label for=\"director\"><h4>Director</h4></label>\n                    <input type=\"text\" placeholder=\"Director\" id=\"director\" formControlName=\"director\">\n                    <span class=\"errorMessage\" *ngIf=\"movieForm.get('director').hasError('required')&&(movieForm.get('director').touched || movieForm.get('director').dirty)\">*Director required</span>\n                </div>\n\n\n                <div class=\"inputContainer buttonsContainer\">\n                  <button type=\"submit\"[class.purpleBackground]=\"movieForm.valid\" [class.disabledClick]=\"!movieForm.valid\" [disabled]=\"!movieForm.valid\">Save</button>\n                  <button type=\"button\"(click)=\"cancelForm()\">Cancel</button>\n                </div>\n              </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/add-or-edit-popup/add-or-edit-popup.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/add-or-edit-popup/add-or-edit-popup.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AddOrEditPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrEditPopupComponent", function() { return AddOrEditPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _movies_list_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movies-list/movie */ "./src/app/components/movies-list/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddOrEditPopupComponent = /** @class */ (function () {
    function AddOrEditPopupComponent(fb) {
        this.fb = fb;
        this.formTitle = "Add Movie";
        this.formCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formNewData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.formEditedData = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AddOrEditPopupComponent.prototype.cancelForm = function () {
        this.formCanceled.emit();
    };
    AddOrEditPopupComponent.prototype.addNewMovie = function () {
        this.formNewData.emit(this.newMovie);
    };
    AddOrEditPopupComponent.prototype.editMovie = function () {
        this.formEditedData.emit(this.editedMovie);
    };
    AddOrEditPopupComponent.prototype.onSubmit = function (form) {
        console.log(form);
        if (this.movieToEdit) {
            this.editedMovie = form;
            this.editedMovie.id = this.movieToEdit.id;
            this.editMovie();
        }
        else {
            this.newMovie = form;
            this.addNewMovie();
        }
    };
    ;
    AddOrEditPopupComponent.prototype.addModeFormControls = function () {
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]);
        this.year = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.runtime = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.genre = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.director = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    };
    AddOrEditPopupComponent.prototype.editModeFormControls = function () {
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.movieToEdit.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,]);
        this.year = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.movieToEdit.year, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.runtime = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.movieToEdit.runtime, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.genre = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.movieToEdit.genre, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.director = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.movieToEdit.director, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
    };
    AddOrEditPopupComponent.prototype.createForm = function () {
        this.movieForm = this.fb.group({
            'title': this.title,
            'year': this.year,
            'runtime': this.runtime,
            'genre': this.genre,
            'director': this.director,
        });
    };
    AddOrEditPopupComponent.prototype.ngOnInit = function () {
        if (this.movieToEdit) {
            this.editModeFormControls();
        }
        else {
            this.addModeFormControls();
        }
        this.createForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _movies_list_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], AddOrEditPopupComponent.prototype, "movieToEdit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], AddOrEditPopupComponent.prototype, "moviesArr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddOrEditPopupComponent.prototype, "formCanceled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddOrEditPopupComponent.prototype, "formNewData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], AddOrEditPopupComponent.prototype, "formEditedData", void 0);
    AddOrEditPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'add-or-edit-popup',
            template: __webpack_require__(/*! ./add-or-edit-popup.component.html */ "./src/app/components/add-or-edit-popup/add-or-edit-popup.component.html"),
            styles: [__webpack_require__(/*! ./add-or-edit-popup.component.css */ "./src/app/components/add-or-edit-popup/add-or-edit-popup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], AddOrEditPopupComponent);
    return AddOrEditPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#logo{\r\n    height: 60px;;\r\n}\r\n\r\n#header-container{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    height: 80px;\r\n    width:100%;\r\n    background-color: white;\r\n    border-bottom: 2px solid #7637aa;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0NBQ2hCOztBQUVEO0lBQ0ksY0FBYztJQUNkLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsaUNBQWlDO0NBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbG9nb3tcclxuICAgIGhlaWdodDogNjBweDs7XHJcbn1cclxuXHJcbiNoZWFkZXItY29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzc2MzdhYTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"header-container\">\n    <img id=\"logo\" src=\"https://res.cloudinary.com/fillip/image/upload/v1538914165/jt2ux2zoqhe3whq3ieai.png\">\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/movies-list/movie.ts":
/*!*************************************************!*\
  !*** ./src/app/components/movies-list/movie.ts ***!
  \*************************************************/
/*! exports provided: Movie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Movie", function() { return Movie; });
var Movie = /** @class */ (function () {
    function Movie(title, year, runtime, genre, director) {
        this.id = Movie.getId();
        this.title = title;
        this.year = year;
        this.runtime = runtime;
        this.genre = genre;
        this.director = director;
    }
    Movie.getId = function () {
        this.nextId++;
        return this.nextId;
    };
    Movie.nextId = 0;
    return Movie;
}());



/***/ }),

/***/ "./src/app/components/movies-list/movies-item/movies-item.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/movies-list/movies-item/movies-item.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n.movieItemContainer{\r\n    display: flex;\r\n    width: 25vw;\r\n    height: 100px;\r\n    background-color: rgba(256, 256, 256, 1.0);\r\n    margin:1vw;\r\n    border: 2px solid #7637aa;\r\n    border-radius: 10px;\r\n    position: relative;\r\n    \r\n}\r\n\r\n@media  (max-width: 900px) {\r\n    .movieItemContainer {\r\n        width: 40vw;\r\n    }\r\n}\r\n\r\n@media  (max-width: 500px) {\r\n    .movieItemContainer {\r\n        width: 90vw;\r\n    }\r\n}\r\n\r\n.buttonsContainer{\r\n    display: none;\r\n    flex-direction: row;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    border-radius: 8px;\r\n    z-index: 1;\r\n    \r\n}\r\n\r\n.movieItemContainer:hover .dataContainer{\r\n    filter: blur(3px);\r\n    -webkit-filter: blur(3px);\r\n}\r\n\r\n.movieItemContainer:hover .buttonsContainer{\r\n    display: flex;\r\n    \r\n}\r\n\r\n.button{\r\n    flex:2;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 5px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover{\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.dataContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    width:100%\r\n\r\n}\r\n\r\n.titleContainer{\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n    flex:2;\r\n    background-color: #7637aa;\r\n    color: white;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    padding:5px;\r\n    font-weight: 400;\r\n}\r\n\r\n.restOfTheMovieDataContainer{\r\n    flex:3;\r\n    padding:5px;\r\n    color:#4f4f4f;\r\n    font-weight: 100;\r\n    font-size: 0.9em\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9tb3ZpZXMtaXRlbS9tb3ZpZXMtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLFlBQVk7SUFDWixjQUFjO0lBQ2QsMkNBQTJDO0lBQzNDLFdBQVc7SUFDWCwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLG1CQUFtQjs7Q0FFdEI7O0FBRUQ7SUFDSTtRQUNJLFlBQVk7S0FDZjtDQUNKOztBQUVEO0lBQ0k7UUFDSSxZQUFZO0tBQ2Y7Q0FDSjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsbUJBQW1CO0lBQ25CLFdBQVc7O0NBRWQ7O0FBSUQ7SUFDSSxrQkFBa0I7SUFDbEIsMEJBQTBCO0NBQzdCOztBQUNEO0lBQ0ksY0FBYzs7Q0FFakI7O0FBQ0Q7SUFDSSxPQUFPO0lBQ1AsY0FBYztJQUNkLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7Q0FDbkI7O0FBRUQ7SUFDSSxxQ0FBcUM7Q0FDeEM7O0FBR0Q7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLFVBQVU7O0NBRWI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxPQUFPO0lBQ1AsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCOztDQUVuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWVzLWxpc3QvbW92aWVzLWl0ZW0vbW92aWVzLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5tb3ZpZUl0ZW1Db250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTYsIDI1NiwgMjU2LCAxLjApO1xyXG4gICAgbWFyZ2luOjF2dztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3NjM3YWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5tb3ZpZUl0ZW1Db250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgIChtYXgtd2lkdGg6IDUwMHB4KSB7XHJcbiAgICAubW92aWVJdGVtQ29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogOTB2dztcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbnNDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBcclxufVxyXG5cclxuXHJcblxyXG4ubW92aWVJdGVtQ29udGFpbmVyOmhvdmVyIC5kYXRhQ29udGFpbmVye1xyXG4gICAgZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogYmx1cigzcHgpO1xyXG59XHJcbi5tb3ZpZUl0ZW1Db250YWluZXI6aG92ZXIgLmJ1dHRvbnNDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbn1cclxuLmJ1dHRvbntcclxuICAgIGZsZXg6MjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcblxyXG4uZGF0YUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJVxyXG5cclxufVxyXG5cclxuLnRpdGxlQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4OjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzYzN2FhO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLnJlc3RPZlRoZU1vdmllRGF0YUNvbnRhaW5lcntcclxuICAgIGZsZXg6MztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgY29sb3I6IzRmNGY0ZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmb250LXNpemU6IDAuOWVtXHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/movies-list/movies-item/movies-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/movies-list/movies-item/movies-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"movieItemContainer\">\n    <div class=\"buttonsContainer\">\n        <div class=\"button\" (click)=\"editItem($event)\">Edit</div>\n        <div class=\"button\" (click)=\"deleteItem($event)\">Delete</div>\n    </div>\n    <div class=\"dataContainer\">\n        <div class=\"titleContainer\">\n            {{movieData.title | cleanTitle | camelCase}}\n        </div>\n        <div class=\"restOfTheMovieDataContainer\">\n            {{movieData.year}} \\ {{movieData.director}}<br>\n            {{movieData.genre}}\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/movies-list/movies-item/movies-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/movies-list/movies-item/movies-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: MoviesItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesItemComponent", function() { return MoviesItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../movie */ "./src/app/components/movies-list/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesItemComponent = /** @class */ (function () {
    function MoviesItemComponent() {
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MoviesItemComponent.prototype.editItem = function (event) {
        this.edit.emit();
    };
    MoviesItemComponent.prototype.deleteItem = function (event) {
        this.delete.emit();
    };
    MoviesItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _movie__WEBPACK_IMPORTED_MODULE_1__["Movie"])
    ], MoviesItemComponent.prototype, "movieData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MoviesItemComponent.prototype, "delete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MoviesItemComponent.prototype, "edit", void 0);
    MoviesItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movies-item',
            template: __webpack_require__(/*! ./movies-item.component.html */ "./src/app/components/movies-list/movies-item/movies-item.component.html"),
            styles: [__webpack_require__(/*! ./movies-item.component.css */ "./src/app/components/movies-list/movies-item/movies-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MoviesItemComponent);
    return MoviesItemComponent;
}());



/***/ }),

/***/ "./src/app/components/movies-list/movies-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/movies-list/movies-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#listNavbar{\r\n    height: 25px;\r\n    border-bottom: 2px dashed #7637aa;\r\n    display:flex;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n#addMovieButton{\r\n    background-color: #7637aa;\r\n    border-radius: 5px;\r\n    border:none;\r\n    color: white;\r\n    margin-left:5px;\r\n    box-shadow: 1px 1px 2px 2px #999999;\r\n    cursor: pointer;\r\n}\r\n\r\n#addMovieButton:hover{\r\n    background-color: #622d8e;\r\n    color:#f2f2f2;\r\n    box-shadow: 1px 1px 1px 1px #999999;\r\n\r\n}\r\n\r\n#noDataContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n\r\nh1{\r\n    text-align: center\r\n}\r\n\r\n#moviesListContainer{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    width: 100%; \r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZXMtbGlzdC9tb3ZpZXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLG9CQUFvQjtDQUN2Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2Qsb0NBQW9DOztDQUV2Qzs7QUFHRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9COztDQUV2Qjs7QUFFRDtJQUNJLGtCQUFrQjtDQUNyQjs7QUFHRDtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vdmllcy1saXN0L21vdmllcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbGlzdE5hdmJhcntcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBkYXNoZWQgIzc2MzdhYTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNhZGRNb3ZpZUJ1dHRvbntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjM3YWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjOTk5OTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jYWRkTW92aWVCdXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIyZDhlO1xyXG4gICAgY29sb3I6I2YyZjJmMjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjOTk5OTk5O1xyXG5cclxufVxyXG5cclxuXHJcbiNub0RhdGFDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuaDF7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuXHJcbiNtb3ZpZXNMaXN0Q29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/movies-list/movies-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/movies-list/movies-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"listNavbar\">\n  <button (click)=\"openAddModal()\" id=\"addMovieButton\">+ Add Movie</button>\n</div>\n<div id=\"noDataContainer\" *ngIf=\"moviesList.length == 0\">\n    <h1>No Data To Display</h1>\n  </div>\n<div id=\"moviesListContainer\" *ngIf=\"moviesList\">\n  <movies-item *ngFor=\"let movie of moviesList\" [movieData]=\"movie\" (delete)=\"onDeleteClick(movie)\" (edit)=\"onEditClick(movie)\"></movies-item>\n</div>\n\n<add-or-edit-popup *ngIf=\"movieModal\" [moviesArr]=\"moviesList\" [movieToEdit]=\"movieToEdit\" (formCanceled)=\"cancelModal($event)\" (formNewData)=\"addNewMovie($event)\" (formEditedData)=\"editMovie($event)\"></add-or-edit-popup>\n<app-popup *ngIf=\"popupTitle\"  [title]=\"popupTitle\" [itemToDelete]=\"movieToDelete\" (deleteApproved)=\"deleteMovie($event)\" (deleteCanceled)=\"deleteCanceled()\" ></app-popup>"

/***/ }),

/***/ "./src/app/components/movies-list/movies-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/movies-list/movies-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MoviesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesListComponent", function() { return MoviesListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/movies-service.service */ "./src/app/services/movies-service.service.ts");
/* harmony import */ var _movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movie */ "./src/app/components/movies-list/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesListComponent = /** @class */ (function () {
    function MoviesListComponent(moviesService) {
        this.moviesService = moviesService;
        this.popupTitle = null;
        this.formTitle = null;
        this.movieModal = false;
        this.moviesList = [];
        this.moviesTitlesArray = ['The Lion King', 'The Shawshank Redemption', 'Inception', 'Jurassic Park', 'The Lord of the Rings'];
    }
    MoviesListComponent.prototype.openAddModal = function () {
        this.movieModal = true;
    };
    MoviesListComponent.prototype.addNewMovie = function (data) {
        var movieItem = new _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"](data['title'], data['year'], data['runtime'], data['genre'], data['director']);
        this.moviesList.push(movieItem);
        this.movieModal = null;
    };
    MoviesListComponent.prototype.onEditClick = function (movie) {
        this.movieToEdit = movie;
        this.movieModal = true;
    };
    MoviesListComponent.prototype.cancelModal = function (e) {
        this.movieToEdit = null;
        this.movieModal = null;
    };
    MoviesListComponent.prototype.editMovie = function (movie) {
        console.log(movie);
        for (var i = 0; this.moviesList.length > i; i++) {
            console.log(movie);
            if (this.moviesList[i].id == movie.id) {
                console.log(movie);
                this.moviesList[i] = movie;
                this.movieToEdit = null;
                this.movieModal = null;
                break;
            }
            continue;
        }
    };
    MoviesListComponent.prototype.deleteMovie = function () {
        var index = this.moviesList.map(function (x) {
            return x.id;
        }).indexOf(this.movieIdToDelete);
        this.moviesList.splice(index, 1);
        this.popupTitle = null;
    };
    MoviesListComponent.prototype.deleteCanceled = function () {
        console.log("delete canceled");
        this.popupTitle = null;
    };
    MoviesListComponent.prototype.onDeleteClick = function (movie) {
        console.log(movie);
        this.movieIdToDelete = movie.id;
        this.movieToDelete = movie;
        this.popupTitle = "Are you sure that you want to delete ";
    };
    MoviesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.moviesTitlesArray.forEach(function (title) {
            _this.moviesService.getMovieData(title).subscribe(function (data) {
                var movieItem = new _movie__WEBPACK_IMPORTED_MODULE_2__["Movie"](data['Title'], data['Year'], data['Runtime'], data['Genre'], data['Director']);
                _this.moviesList.push(movieItem);
            });
        });
        console.log(this.moviesList);
    };
    MoviesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'movies-list',
            template: __webpack_require__(/*! ./movies-list.component.html */ "./src/app/components/movies-list/movies-list.component.html"),
            styles: [__webpack_require__(/*! ./movies-list.component.css */ "./src/app/components/movies-list/movies-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_movies_service_service__WEBPACK_IMPORTED_MODULE_1__["MoviesService"]])
    ], MoviesListComponent);
    return MoviesListComponent;
}());



/***/ }),

/***/ "./src/app/services/movies-service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/movies-service.service.ts ***!
  \****************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesService = /** @class */ (function () {
    function MoviesService(http) {
        this.http = http;
        this.omdbApikey = "aa39bf52";
        this.uri = "https://www.omdbapi.com/?apikey=" + this.omdbApikey;
    }
    MoviesService.prototype.getMovieData = function (title) {
        return this.http.get(this.uri + "&t=" + title);
    };
    MoviesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/app/shared/camelCase.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/shared/camelCase.pipe.ts ***!
  \******************************************/
/*! exports provided: CamelCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CamelCase", function() { return CamelCase; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CamelCase = /** @class */ (function () {
    function CamelCase() {
    }
    CamelCase.prototype.transform = function (value) {
        var camelCase = value.toLowerCase().split(' ')
            .map(function (s) { return s.charAt(0).toUpperCase() + s.substring(1); })
            .join(' ');
        return camelCase;
    };
    CamelCase = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'camelCase'
        })
    ], CamelCase);
    return CamelCase;
}());



/***/ }),

/***/ "./src/app/shared/cleanTitle.pipe.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/cleanTitle.pipe.ts ***!
  \*******************************************/
/*! exports provided: CleanTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CleanTitle", function() { return CleanTitle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CleanTitle = /** @class */ (function () {
    function CleanTitle() {
    }
    CleanTitle.prototype.transform = function (value) {
        var cleanValue = value.replace(/[^a-z\s]/gi, '');
        return cleanValue;
    };
    CleanTitle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'cleanTitle'
        })
    ], CleanTitle);
    return CleanTitle;
}());



/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageNotFoundContainer{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHdCQUF3QjtJQUN4QixvQkFBb0I7O0NBRXZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZU5vdEZvdW5kQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageNotFoundContainer\">\n    <h1>Page Not Found</h1>\n    <h5>Redirecting to home page</h5>\n  </div>"

/***/ }),

/***/ "./src/app/shared/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.router.navigate(['/']);
        }, 3000);
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/shared/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/shared/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shared/popup/popup.component.css":
/*!**************************************************!*\
  !*** ./src/app/shared/popup/popup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#blackScreen{\r\n    position: fixed;\r\n    z-index: 1;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.6);\r\n    -webkit-filter:blur(0px);\r\n            filter:blur(0px)\r\n}\r\n\r\n#popupContainer{\r\n    display: flex;\r\n    width: 100%;\r\n    height: 50%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    -webkit-filter:none !important;\r\n            filter:none !important;\r\n    \r\n}\r\n\r\n#popup{\r\n    background-color: white;\r\n    border: 2px solid #7637aa;\r\n    width: 90%;\r\n    max-width: 400px;\r\n    height: 150px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center; \r\n    border-radius: 10px;\r\n    padding: 5px;\r\n\r\n}\r\n\r\n#titleContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    flex:3;\r\n    color:#4f4f4f\r\n}\r\n\r\n#buttonsContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center; \r\n    flex:2\r\n}\r\n\r\nbutton{\r\n    margin: 5px;\r\n    background-color: #7637aa;\r\n    border-radius: 5px;\r\n    border:none;\r\n    color: white;\r\n    margin-left:5px;\r\n    box-shadow: 1px 1px 2px 2px #999999;\r\n    cursor: pointer;\r\n    width:40px;\r\n    height:20px;\r\n}\r\n\r\nbutton:hover{\r\n    background-color: #622d8e;\r\n    color:#f2f2f2;\r\n    box-shadow: 1px 1px 1px 1px #999999;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3BvcHVwL3BvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFFBQVE7SUFDUixPQUFPO0lBQ1AsWUFBWTtJQUNaLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMseUJBQWdCO1lBQWhCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixvQkFBb0I7SUFDcEIsK0JBQXVCO1lBQXZCLHVCQUF1Qjs7Q0FFMUI7O0FBRUQ7SUFDSSx3QkFBd0I7SUFDeEIsMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsYUFBYTs7Q0FFaEI7O0FBRUQ7SUFDSSxjQUFjO0lBQ2Qsd0JBQXdCO0lBQ3hCLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsb0JBQW9CO0lBQ3BCLE1BQU07Q0FDVDs7QUFFRDtJQUNJLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2Qsb0NBQW9DOztDQUV2QyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9wb3B1cC9wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2JsYWNrU2NyZWVue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICAgIGZpbHRlcjpibHVyKDBweClcclxufVxyXG5cclxuI3BvcHVwQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmaWx0ZXI6bm9uZSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuXHJcbiNwb3B1cHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzc2MzdhYTtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcblxyXG59XHJcblxyXG4jdGl0bGVDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGZsZXg6MztcclxuICAgIGNvbG9yOiM0ZjRmNGZcclxufVxyXG5cclxuI2J1dHRvbnNDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyBcclxuICAgIGZsZXg6MlxyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NjM3YWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OjVweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDJweCAjOTk5OTk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDoyMHB4O1xyXG59XHJcblxyXG5idXR0b246aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjIyZDhlO1xyXG4gICAgY29sb3I6I2YyZjJmMjtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMXB4IDFweCAjOTk5OTk5O1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/popup/popup.component.html":
/*!***************************************************!*\
  !*** ./src/app/shared/popup/popup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"blackScreen\">\n    <div id=\"popupContainer\">\n        <div id=\"popup\">\n            <div id=\"titleContainer\">\n                {{title}}{{itemTitle | cleanTitle | camelCase}}?\n            </div>\n            <div id=\"buttonsContainer\">\n                <button (click)=\"onApproved()\">Yes</button>\n                <button (click)=\"onCancel()\">No</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shared/popup/popup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/popup/popup.component.ts ***!
  \*************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_components_movies_list_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/movies-list/movie */ "./src/app/components/movies-list/movie.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PopupComponent = /** @class */ (function () {
    function PopupComponent(document) {
        this.document = document;
        this.deleteApproved = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteCanceled = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PopupComponent.prototype.onApproved = function () {
        this.deleteApproved.emit();
    };
    PopupComponent.prototype.onCancel = function () {
        this.deleteCanceled.emit();
    };
    PopupComponent.prototype.ngOnInit = function () {
        this.itemTitle = this.itemToDelete.title;
        // this.document.body.classList.add('blur');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PopupComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", src_app_components_movies_list_movie__WEBPACK_IMPORTED_MODULE_2__["Movie"])
    ], PopupComponent.prototype, "itemToDelete", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PopupComponent.prototype, "deleteApproved", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PopupComponent.prototype, "deleteCanceled", void 0);
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-popup',
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/shared/popup/popup.component.html"),
            styles: [__webpack_require__(/*! ./popup.component.css */ "./src/app/shared/popup/popup.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document])
    ], PopupComponent);
    return PopupComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Assaf\Desktop\Herolo\herolo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map