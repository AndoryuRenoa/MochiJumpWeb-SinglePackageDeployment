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

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about works!\n</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <div *ngIf =\"showAppLogin;\"><app-login></app-login></div>\n  <div *ngIf =\"showAppLogout;\"><app-logout></app-logout> </div>\n  <p>This text comes from app.component. Below is the router:</p>\n  <router-outlet></router-outlet>\n  <nav>\n  </nav>\n  \n  </body>"

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
/* harmony import */ var _show_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./show-login.service */ "./src/app/show-login.service.ts");
/* harmony import */ var _show_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-logout.service */ "./src/app/show-logout.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(showLoginService, showLogout) {
        this.showLoginService = showLoginService;
        this.showLogout = showLogout;
        this.title = 'mj-web-front-end';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showLoginService.getStatus().subscribe(function (showAppLogin) { return _this.showAppLogin = showAppLogin; });
        this.showLoginService.changeShowStatus(true);
        this.showLogout.getStatus().subscribe(function (showAppLogout) { return _this.showAppLogout = showAppLogout; });
        this.showLogout.changeShowStatus(false);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_show_login_service__WEBPACK_IMPORTED_MODULE_1__["ShowLoginService"], _show_logout_service__WEBPACK_IMPORTED_MODULE_2__["ShowLogoutService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _draw_level_draw_level_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./draw-level/draw-level.component */ "./src/app/draw-level/draw-level.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-menu/main-menu.component */ "./src/app/main-menu/main-menu.component.ts");
/* harmony import */ var _mochi_face_mochi_face_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mochi-face/mochi-face.component */ "./src/app/mochi-face/mochi-face.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _main_menu_about_button_about_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main-menu/about-button/about-button.component */ "./src/app/main-menu/about-button/about-button.component.ts");
/* harmony import */ var _main_menu_level_edit_button_level_edit_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main-menu/level-edit-button/level-edit-button.component */ "./src/app/main-menu/level-edit-button/level-edit-button.component.ts");
/* harmony import */ var _sign_up_sign_up_complete_sign_up_complete_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sign-up/sign-up-complete/sign-up-complete.component */ "./src/app/sign-up/sign-up-complete/sign-up-complete.component.ts");
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/login-page/login-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'mainmenu', component: _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__["MainMenuComponent"] },
    { path: 'levelEditor', component: _draw_level_draw_level_component__WEBPACK_IMPORTED_MODULE_8__["DrawLevelComponent"] },
    { path: 'signUp', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"] },
    { path: 'signUpComplete', component: _sign_up_sign_up_complete_sign_up_complete_component__WEBPACK_IMPORTED_MODULE_16__["SignUpCompleteComponent"] },
    { path: 'login', component: _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_17__["LoginPageComponent"] },
    { path: '', redirectTo: '/mainmenu', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                _draw_level_draw_level_component__WEBPACK_IMPORTED_MODULE_8__["DrawLevelComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"],
                _main_menu_main_menu_component__WEBPACK_IMPORTED_MODULE_11__["MainMenuComponent"],
                _mochi_face_mochi_face_component__WEBPACK_IMPORTED_MODULE_12__["MochiFaceComponent"],
                _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_13__["SignUpComponent"],
                _main_menu_about_button_about_button_component__WEBPACK_IMPORTED_MODULE_14__["AboutButtonComponent"],
                _main_menu_level_edit_button_level_edit_button_component__WEBPACK_IMPORTED_MODULE_15__["LevelEditButtonComponent"],
                _sign_up_sign_up_complete_sign_up_complete_component__WEBPACK_IMPORTED_MODULE_16__["SignUpCompleteComponent"],
                _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_17__["LoginPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/draw-level/draw-level.component.css":
/*!*****************************************************!*\
  !*** ./src/app/draw-level/draw-level.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/draw-level/draw-level.component.html":
/*!******************************************************!*\
  !*** ./src/app/draw-level/draw-level.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  draw-level works!\n</p>\n"

/***/ }),

/***/ "./src/app/draw-level/draw-level.component.ts":
/*!****************************************************!*\
  !*** ./src/app/draw-level/draw-level.component.ts ***!
  \****************************************************/
/*! exports provided: DrawLevelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawLevelComponent", function() { return DrawLevelComponent; });
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

var DrawLevelComponent = /** @class */ (function () {
    function DrawLevelComponent() {
    }
    DrawLevelComponent.prototype.ngOnInit = function () {
    };
    DrawLevelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-draw-level',
            template: __webpack_require__(/*! ./draw-level.component.html */ "./src/app/draw-level/draw-level.component.html"),
            styles: [__webpack_require__(/*! ./draw-level.component.css */ "./src/app/draw-level/draw-level.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DrawLevelComponent);
    return DrawLevelComponent;
}());



/***/ }),

/***/ "./src/app/login-page/login-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-page/login-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login-page/login-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-page/login-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'loginBody'>\n  <div class= 'loginForm'>\n    \n    User Name: <input #userName (keyup.enter)=\"attemptLogin(userName.value, password.value)\"><p></p>\n    Password: <input type = \"password\" #password (keyup.enter)=\"attemptLogin(userName.value, password.value)\">\n  &nbsp;&nbsp;&nbsp;\n  <button class =\"loginButton\" (click)=\"attemptLogin(userName.value, password.value)\">&nbsp;Login&nbsp;</button>\n  <p></p>\n  <a  (click) = hideMe(); [routerLink] = \"['/signUp']\">\n    <button class=\"signUpButton\"> Sign Up </button>\n    </a>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/login-page/login-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-page/login-page.component.ts ***!
  \****************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-login.service */ "./src/app/show-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(showLoginService) {
        this.showLoginService = showLoginService;
    }
    LoginPageComponent.prototype.ngOnInit = function () {
    };
    LoginPageComponent.prototype.hideMe = function () {
        this.showLoginService.changeShowStatus(false);
    };
    LoginPageComponent.prototype.attemptLogin = function (userName, password) {
        if (confirm("This isn't live and will currently only show you the username and password \nHit ok to confirm or cancel to stop"))
            alert("Okay, inputed \nUser Name: " + userName +
                "\nPassword: " + password);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/login-page/login-page.component.css")]
        }),
        __metadata("design:paramtypes", [_show_login_service__WEBPACK_IMPORTED_MODULE_1__["ShowLoginService"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginBody{\r\n    position: relative;\r\n   margin:0px;\r\n   background-color :darkslategray;\r\n   overflow: hidden;\r\n }\r\n .loginForm{\r\n   margin:0px;\r\n   color:white;\r\n   text-align: right;\r\n }\r\n .loginButton{\r\n   padding: 5px;\r\n }\r\n .signUpButton{\r\n   padding: 5px;\r\n }\r\n "

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class = 'loginBody'>\n  <div class= 'loginForm'>\n    <form #loginForm= \"ngForm\" (ngSubmit)=\"attemptLogin(username.value, password.value)\">\n      <a  (click) = hideMe(); [routerLink] = \"['/signUp']\">\n        <button class=\"signUpButton\" (keydown.enter) = \"doNothing()\"> Sign Up </button>\n        </a>\n    User Name: <input #username (keyup.enter)=\"attemptLogin(username.value, password.value)\" name=\"username\"\n    [(ngModel)] =\"usernameText\">\n    Password: <input  #password (keyup.enter)=\"attemptLogin(username.value, password.value)\" name=\"password\"\n    [(ngModel)] =\"passwordText\" type=\"password\">\n  &nbsp;&nbsp;&nbsp;\n  <button type = \"submit\" class =\"loginButton\" >&nbsp;Login&nbsp;</button>\n    </form>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-login.service */ "./src/app/show-login.service.ts");
/* harmony import */ var _perform_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../perform-login.service */ "./src/app/perform-login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(showLoginService, peformLogin) {
        this.showLoginService = showLoginService;
        this.peformLogin = peformLogin;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.hideMe = function () {
        this.showLoginService.changeShowStatus(false);
    };
    LoginComponent.prototype.attemptLogin = function (username, password) {
        this.peformLogin.postLogin(username, password);
    };
    LoginComponent.prototype.doNothing = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_show_login_service__WEBPACK_IMPORTED_MODULE_1__["ShowLoginService"],
            _perform_login_service__WEBPACK_IMPORTED_MODULE_2__["PerformLoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loginBody{\r\n    position: relative;\r\n   margin:0px;\r\n   background-color :darkslategray;\r\n   overflow: hidden;\r\n }\r\n .loginForm{\r\n   margin:0px;\r\n   color:white;\r\n   text-align: center;\r\n }\r\n .logoutButton{\r\n   float: right;\r\n }"

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = 'loginBody'>\n  <form class= 'loginForm'>\n    Welcome {{userName}}\n  <button class=\"logoutButton\" (click)=\"logUserOut()\">Logout</button>\n  </form>\n  \n  </div>"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-login.service */ "./src/app/show-login.service.ts");
/* harmony import */ var _show_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show-logout.service */ "./src/app/show-logout.service.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-info.service */ "./src/app/user-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(showLoginService, showLogout, userInfo) {
        this.showLoginService = showLoginService;
        this.showLogout = showLogout;
        this.userInfo = userInfo;
        this.userName = "New User";
    }
    LogoutComponent.prototype.ngOnInit = function () {
        this.userName = this.userInfo.getUserNameNoSub();
    };
    LogoutComponent.prototype.ngAfterViewInit = function () {
    };
    LogoutComponent.prototype.logUserOut = function () {
        this.showLogout.changeShowStatus(false);
        this.showLoginService.changeShowStatus(true);
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_show_login_service__WEBPACK_IMPORTED_MODULE_1__["ShowLoginService"], _show_logout_service__WEBPACK_IMPORTED_MODULE_2__["ShowLogoutService"],
            _user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/about-button/about-button.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/main-menu/about-button/about-button.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-menu/about-button/about-button.component.html":
/*!********************************************************************!*\
  !*** ./src/app/main-menu/about-button/about-button.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  about-button works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-menu/about-button/about-button.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/main-menu/about-button/about-button.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutButtonComponent", function() { return AboutButtonComponent; });
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

var AboutButtonComponent = /** @class */ (function () {
    function AboutButtonComponent() {
    }
    AboutButtonComponent.prototype.ngOnInit = function () {
    };
    AboutButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-button',
            template: __webpack_require__(/*! ./about-button.component.html */ "./src/app/main-menu/about-button/about-button.component.html"),
            styles: [__webpack_require__(/*! ./about-button.component.css */ "./src/app/main-menu/about-button/about-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutButtonComponent);
    return AboutButtonComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/level-edit-button/level-edit-button.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/main-menu/level-edit-button/level-edit-button.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-menu/level-edit-button/level-edit-button.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/main-menu/level-edit-button/level-edit-button.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  level-edit-button works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-menu/level-edit-button/level-edit-button.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/main-menu/level-edit-button/level-edit-button.component.ts ***!
  \****************************************************************************/
/*! exports provided: LevelEditButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevelEditButtonComponent", function() { return LevelEditButtonComponent; });
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

var LevelEditButtonComponent = /** @class */ (function () {
    function LevelEditButtonComponent() {
    }
    LevelEditButtonComponent.prototype.ngOnInit = function () {
    };
    LevelEditButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-level-edit-button',
            template: __webpack_require__(/*! ./level-edit-button.component.html */ "./src/app/main-menu/level-edit-button/level-edit-button.component.html"),
            styles: [__webpack_require__(/*! ./level-edit-button.component.css */ "./src/app/main-menu/level-edit-button/level-edit-button.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LevelEditButtonComponent);
    return LevelEditButtonComponent;
}());



/***/ }),

/***/ "./src/app/main-menu/main-menu.component.css":
/*!***************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.html":
/*!****************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-mochi-face></app-mochi-face>\n<app-level-edit-button></app-level-edit-button>\n<app-about-button></app-about-button>"

/***/ }),

/***/ "./src/app/main-menu/main-menu.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-menu/main-menu.component.ts ***!
  \**************************************************/
/*! exports provided: MainMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuComponent", function() { return MainMenuComponent; });
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

var MainMenuComponent = /** @class */ (function () {
    function MainMenuComponent() {
    }
    MainMenuComponent.prototype.ngOnInit = function () {
    };
    MainMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-menu',
            template: __webpack_require__(/*! ./main-menu.component.html */ "./src/app/main-menu/main-menu.component.html"),
            styles: [__webpack_require__(/*! ./main-menu.component.css */ "./src/app/main-menu/main-menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MainMenuComponent);
    return MainMenuComponent;
}());



/***/ }),

/***/ "./src/app/mochi-face/mochi-face.component.css":
/*!*****************************************************!*\
  !*** ./src/app/mochi-face/mochi-face.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/mochi-face/mochi-face.component.html":
/*!******************************************************!*\
  !*** ./src/app/mochi-face/mochi-face.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<img src=\"https://github.com/AndoryuRenoa/MochiJump/blob/master/bin/background.png?raw=true\">\n"

/***/ }),

/***/ "./src/app/mochi-face/mochi-face.component.ts":
/*!****************************************************!*\
  !*** ./src/app/mochi-face/mochi-face.component.ts ***!
  \****************************************************/
/*! exports provided: MochiFaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MochiFaceComponent", function() { return MochiFaceComponent; });
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

var MochiFaceComponent = /** @class */ (function () {
    function MochiFaceComponent() {
    }
    MochiFaceComponent.prototype.ngOnInit = function () {
    };
    MochiFaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mochi-face',
            template: __webpack_require__(/*! ./mochi-face.component.html */ "./src/app/mochi-face/mochi-face.component.html"),
            styles: [__webpack_require__(/*! ./mochi-face.component.css */ "./src/app/mochi-face/mochi-face.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MochiFaceComponent);
    return MochiFaceComponent;
}());



/***/ }),

/***/ "./src/app/perform-login.service.ts":
/*!******************************************!*\
  !*** ./src/app/perform-login.service.ts ***!
  \******************************************/
/*! exports provided: PerformLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformLoginService", function() { return PerformLoginService; });
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


var PerformLoginService = /** @class */ (function () {
    function PerformLoginService(http) {
        this.http = http;
        this.loginURL = "/loginProcessor";
    }
    PerformLoginService.prototype.postLogin = function (username, password) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': 'basic' + btoa(username + ':' + password),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = {
            headers: headers
        };
        console.log("Hello!!!");
        console.log({ username: username, password: password });
        console.log("{username: " + username + "password :" + password + "}");
        return this.http.post(this.loginURL, { username: username, password: password }, options).subscribe(function (res) {
            return console.log(JSON.stringify(res));
        });
    };
    PerformLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PerformLoginService);
    return PerformLoginService;
}());



/***/ }),

/***/ "./src/app/show-login.service.ts":
/*!***************************************!*\
  !*** ./src/app/show-login.service.ts ***!
  \***************************************/
/*! exports provided: ShowLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLoginService", function() { return ShowLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowLoginService = /** @class */ (function () {
    function ShowLoginService() {
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ShowLoginService.prototype.getStatus = function () {
        return this.show.asObservable();
    };
    ShowLoginService.prototype.changeShowStatus = function (showAppLogin) {
        this.show.next(showAppLogin);
    };
    ShowLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShowLoginService);
    return ShowLoginService;
}());



/***/ }),

/***/ "./src/app/show-logout.service.ts":
/*!****************************************!*\
  !*** ./src/app/show-logout.service.ts ***!
  \****************************************/
/*! exports provided: ShowLogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLogoutService", function() { return ShowLogoutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowLogoutService = /** @class */ (function () {
    function ShowLogoutService() {
        this.show = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ShowLogoutService.prototype.getStatus = function () {
        return this.show.asObservable();
    };
    ShowLogoutService.prototype.changeShowStatus = function (showAppLogout) {
        this.show.next(showAppLogout);
    };
    ShowLogoutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ShowLogoutService);
    return ShowLogoutService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up-complete/sign-up-complete.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/sign-up/sign-up-complete/sign-up-complete.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sign-up/sign-up-complete/sign-up-complete.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/sign-up/sign-up-complete/sign-up-complete.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"thisBody\">\n  <a [routerLink] = \"['/']\">\n  <h2> Click here to go back to main menu </h2>\n  </a>\n  \n  <p>\n  Congratulations on using the fake sign up button! (also programatic routing works!)\n  </p>\n  </div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up-complete/sign-up-complete.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/sign-up/sign-up-complete/sign-up-complete.component.ts ***!
  \************************************************************************/
/*! exports provided: SignUpCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpCompleteComponent", function() { return SignUpCompleteComponent; });
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

var SignUpCompleteComponent = /** @class */ (function () {
    function SignUpCompleteComponent() {
    }
    SignUpCompleteComponent.prototype.ngOnInit = function () {
    };
    SignUpCompleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up-complete',
            template: __webpack_require__(/*! ./sign-up-complete.component.html */ "./src/app/sign-up/sign-up-complete/sign-up-complete.component.html"),
            styles: [__webpack_require__(/*! ./sign-up-complete.component.css */ "./src/app/sign-up/sign-up-complete/sign-up-complete.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SignUpCompleteComponent);
    return SignUpCompleteComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thisBody{\r\n    padding-left: 10px;\r\n  }"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = thisBody>\n  <a [routerLink] = \"['/']\">\n  <h2> Click here to go back </h2>\n  </a>\n  <p>\n  This will be the signup page. It is currently not connected to the backend hence will not work.\n  </p>\n  <p> for now this field and button will simulate signing up </p>\n  Enter your name here:&nbsp;&nbsp;\n  <input #name (keyup.enter)= \"saveName(name.value)\"> &nbsp;\n  <button (click)=\"saveName(name.value)\"> Sign me Up! </button>\n  </div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _show_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../show-login.service */ "./src/app/show-login.service.ts");
/* harmony import */ var _show_logout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../show-logout.service */ "./src/app/show-logout.service.ts");
/* harmony import */ var _user_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-info.service */ "./src/app/user-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(showLoginService, showLogout, router, userInfo) {
        this.showLoginService = showLoginService;
        this.showLogout = showLogout;
        this.router = router;
        this.userInfo = userInfo;
        this.signupComplete = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.saveName = function (userName) {
        this.userInfo.setUserName(userName);
        this.signUpCompleted();
    };
    SignUpComponent.prototype.signUpCompleted = function () {
        this.signupComplete = true;
        console.log("signup button pressed");
        this.showLoginService.changeShowStatus(false);
        this.showLogout.changeShowStatus(true);
        this.router.navigate(['/signUpComplete']);
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        if (this.signupComplete === false) {
            this.showLoginService.changeShowStatus(true);
        }
        else {
        }
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_show_login_service__WEBPACK_IMPORTED_MODULE_1__["ShowLoginService"], _show_logout_service__WEBPACK_IMPORTED_MODULE_2__["ShowLogoutService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _user_info_service__WEBPACK_IMPORTED_MODULE_3__["UserInfoService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user-info.service.ts":
/*!**************************************!*\
  !*** ./src/app/user-info.service.ts ***!
  \**************************************/
/*! exports provided: UserInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfoService", function() { return UserInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserInfoService = /** @class */ (function () {
    function UserInfoService() {
        this.userName = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UserInfoService.prototype.getUserNameNoSub = function () {
        return this.userNameStorage;
    };
    UserInfoService.prototype.getUserNameSub = function () {
        console.log('name get ' + this.userName);
        return this.userName.asObservable();
    };
    UserInfoService.prototype.setUserName = function (userName) {
        this.userName.next(userName);
        this.userNameStorage = userName;
    };
    UserInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], UserInfoService);
    return UserInfoService;
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

module.exports = __webpack_require__(/*! C:\Users\Andrew\Documents\GitHub\MochiJumpWeb-SinglePackageDeployment\MochiWebDeploy\MochiJumpFront\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map