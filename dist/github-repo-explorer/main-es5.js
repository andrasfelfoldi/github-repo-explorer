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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/background-message/background-message.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/background-message/background-message.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>\n        {{topMessage}}\n    </p>\n    <p>\n        {{bottomMessage}}\n    </p>\n    <div class=\"icon\">\n        <i class=\"im {{iconName}}\"></i>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  Copyright &copy; {{ year }} Felföldi András. All Rights Reserved.\n</footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/issue-card/issue-card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/issue-card/issue-card.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card border\" [class.border-success]=\"issue.state === 'open'\"\n    [class.border-danger]=\"issue.state === 'closed'\">\n    <div class=\"card-header bg-success text-light\" [class.bg-danger.text-light]=\"issue.state === 'closed'\">\n        {{issue.state | titlecase}} &ndash; {{ issue.title }}\n    </div>\n    <div class=\"card-header text-dark\">\n        <h6 class=\"card-subtitle mb-1 mt-1 text-muted\">\n            <a class=\"\" href=\"{{issue.html_url}}\">{{issue.html_url}}</a>\n        </h6>\n    </div>\n    <div class=\"card-body\">\n        <blockquote class=\"blockquote mb-0\">\n            <div [id]=\"issue.id\" class=\"markdown-container\"></div>\n            <footer class=\"blockquote-footer\">\n                Created by <cite title=\"Source Title\"><a class=\"\"\n                        href=\"{{issue.user.html_url}}\">{{ issue.user.login }}</a></cite> at\n                {{issue.created_at | date:'medium'}}\n            </footer>\n        </blockquote>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\"\n      [routerLink]=\"sharedDataService.searchTerm ? ['/repositories', sharedDataService.searchTerm] : ['']\">Github Repo\n      Explorer</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\"\n      aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\"\n            [routerLink]=\"sharedDataService.searchTerm ? ['/repositories', sharedDataService.searchTerm] : ['']\">Home</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input type=\"search\" class=\"form-control mr-sm-2 mb-3 mb-lg-0\" placeholder=\"Search repository\"\n          aria-label=\"Search repository\" aria-describedby=\"button-addon2\" [(ngModel)]=\"searchTerm\" name=\"search\"\n          (keyup.enter)=\"onSearch()\" />\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-light bg-primary text-white\" type=\"button\" id=\"button-addon2\" (click)=\"onSearch()\">\n            Search\n          </button>\n        </div>\n      </form>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/pie-chart/pie-chart.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/pie-chart/pie-chart.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\" [style.width.px]=\"width\">\n    <div id=\"{{idSelector}}\"></div>\n    <div class=\"badge-container\">\n        <span *ngFor=\"let colorDomain of chartData.colorDomains; let i = index\"\n            [style.background-color]=\"chartData.colors[i]\" class=\"badge\">{{colorDomain}}:\n            {{chartData.values[colorDomain]}}</span>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/repo-card/repo-card.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/repo-card/repo-card.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"height: 100%\">\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{ repo.name }}</h5>\n        <h6 class=\"card-subtitle mb-2 text-muted\">{{ repo.owner.login }}</h6>\n        <h6 class=\"card-subtitle mb-2 text-muted\">\n            <a class=\"\" href=\"{{repo.html_url}}\">{{repo.html_url}}</a>\n        </h6>\n        <p class=\"card-text\">{{ repo.description }}</p>\n    </div>\n    <div class=\"card-footer bottom\">\n        <div *ngIf=\"repo.open_issues_count || repo.forks_count || repo.stargazers_count\" class=\"chart\">\n            <app-pie-chart idSelector=\"repo-{{repo.id}}\" [chartData]=\"chartData\" [isDonut]=\"true\">\n            </app-pie-chart>\n        </div>\n        <div class=\"footer-bottom\">\n            <a [routerLink]=\"['issues', repo.owner.login, repo.name]\" class=\"btn btn-primary\">Issues</a>\n            <span *ngIf=\"repo.license !== null\" class=\"badge badge-light license\">{{repo.license.name}}</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/screens/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/screens/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!loading\" [ngSwitch]=\"message\">\n  <!-- Content for when there is an error while fetching the repositories -->\n  <app-background-message *ngSwitchCase=\"'error'\"\n    topMessage=\"Sorry, we failed to retrieve the repositories you are looking for.\"\n    bottomMessage=\"Please, check your internet connection and try again.\" iconName=\"im-frown-o\">\n  </app-background-message>\n  <!-- Content for when the user did not search for anything yet -->\n  <app-background-message *ngSwitchCase=\"'no-search'\" topMessage=\"You haven't searched for anything yet.\"\n    bottomMessage=\"Search for something using the search field above!\" iconName=\"im-magnifier\">\n  </app-background-message>\n  <!-- Content for not getting any matches for the search -->\n  <app-background-message *ngSwitchCase=\"'no-match'\" topMessage=\"Alas, nothing is found.\"\n    bottomMessage=\"Perhaps, you should try checking out a different repository.\" iconName=\"im-frown-o\">\n  </app-background-message>\n  <!-- Content otherwise -->\n  <div *ngSwitchDefault class=\"container\">\n    <div class=\"row\">\n      <div *ngFor=\"let repo of repos\" class=\"col-sm-12 col-md-6 mt-5\">\n        <app-repo-card [repo]=\"repo\"></app-repo-card>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"loading\" class=\"loading-container\">\n  <div class=\"spinner-border text-primary\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/screens/issues/issues.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/screens/issues/issues.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Content for when there is an error while fetching the repositories -->\n<div *ngIf=\"isError\">\n  <app-background-message topMessage=\"Sorry, we failed to retrieve the issues for the repository.\"\n    bottomMessage=\"Please, check your internet connection and try again.\" iconName=\"im-frown-o\">\n  </app-background-message>\n</div>\n<div *ngIf=\"issues.length === 0 && sharedDataService.searchTerm !== '' && !loading\">\n  <app-background-message topMessage=\"It seems, that this repository has no issues to display.\"\n    bottomMessage=\"You can always check out another repository.\" iconName=\"im-git\">\n  </app-background-message>\n</div>\n<div class=\"container\">\n  <div *ngIf=\"loading\" class=\"loading-container\">\n    <div class=\"spinner-border text-primary\" role=\"status\">\n      <span class=\"sr-only\">Loading...</span>\n    </div>\n  </div>\n  <div *ngIf=\"issues.length > 0\" class=\"chart\">\n    <app-pie-chart idSelector=\"issueChart\" [chartData]=\"chartData\" [isDonut]=\"false\">\n    </app-pie-chart>\n  </div>\n  <app-issue-card *ngFor=\"let issue of issues\" [issue]=\"issue\"></app-issue-card>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/screens/not-found404/not-found404.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/screens/not-found404/not-found404.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <p>\n        Oh, would you look at that!\n        A 404 page!\n    </p>\n    <p>\n        This means, that the page you are looking for does not exists.\n    </p>\n    <p>\n        <a [routerLink]=\"[ '/' ]\" class=\"btn btn-primary btn-lg\" tabindex=\"-1\" role=\"button\" aria-disabled=\"true\">Click\n            here</a>\n    </p>\n    <p>\n        ...to go back to the <a [routerLink]=\"[ '/' ]\">Home Page</a>\n    </p>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./screens/home/home.component */ "./src/app/screens/home/home.component.ts");
/* harmony import */ var _screens_issues_issues_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./screens/issues/issues.component */ "./src/app/screens/issues/issues.component.ts");
/* harmony import */ var _screens_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./screens/not-found404/not-found404.component */ "./src/app/screens/not-found404/not-found404.component.ts");






var routes = [
    { path: "repositories/:searchTerm/issues/:owner/:repoName", component: _screens_issues_issues_component__WEBPACK_IMPORTED_MODULE_4__["IssuesComponent"] },
    { path: "repositories/:searchTerm", component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "repositories", pathMatch: 'full', redirectTo: '' },
    { path: "", component: _screens_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: "**", component: _screens_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_5__["NotFound404Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _screens_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./screens/home/home.component */ "./src/app/screens/home/home.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _screens_issues_issues_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./screens/issues/issues.component */ "./src/app/screens/issues/issues.component.ts");
/* harmony import */ var _screens_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./screens/not-found404/not-found404.component */ "./src/app/screens/not-found404/not-found404.component.ts");
/* harmony import */ var _components_background_message_background_message_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/background-message/background-message.component */ "./src/app/components/background-message/background-message.component.ts");
/* harmony import */ var _components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/repo-card/repo-card.component */ "./src/app/components/repo-card/repo-card.component.ts");
/* harmony import */ var _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/pie-chart/pie-chart.component */ "./src/app/components/pie-chart/pie-chart.component.ts");
/* harmony import */ var _components_issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/issue-card/issue-card.component */ "./src/app/components/issue-card/issue-card.component.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _screens_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"],
                _screens_issues_issues_component__WEBPACK_IMPORTED_MODULE_12__["IssuesComponent"],
                _screens_not_found404_not_found404_component__WEBPACK_IMPORTED_MODULE_13__["NotFound404Component"],
                _components_background_message_background_message_component__WEBPACK_IMPORTED_MODULE_14__["BackgroundMessageComponent"],
                _components_repo_card_repo_card_component__WEBPACK_IMPORTED_MODULE_15__["RepoCardComponent"],
                _components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_16__["PieChartComponent"],
                _components_issue_card_issue_card_component__WEBPACK_IMPORTED_MODULE_17__["IssueCardComponent"]
            ],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/background-message/background-message.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/background-message/background-message.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 100vh;\n  font-size: 2rem;\n  font-weight: bold;\n  -webkit-text-stroke-width: 1px;\n  -webkit-text-stroke-color: white;\n}\n.container .icon {\n  position: absolute;\n  z-index: -1;\n  width: auto;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.container .icon i {\n  opacity: 0.08;\n  font-size: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9jb21wb25lbnRzL2JhY2tncm91bmQtbWVzc2FnZS9iYWNrZ3JvdW5kLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmFja2dyb3VuZC1tZXNzYWdlL2JhY2tncm91bmQtbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7QUNDSjtBRENJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ1I7QURDUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ0NaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYWNrZ3JvdW5kLW1lc3NhZ2UvYmFja2dyb3VuZC1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XG4gICAgLXdlYmtpdC10ZXh0LXN0cm9rZS1jb2xvcjogd2hpdGU7XG5cbiAgICAuaWNvbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpe1xuICAgICAgICAgICAgb3BhY2l0eTogMC4wODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzAwcHg7XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBmb250LXNpemU6IDJyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAtd2Via2l0LXRleHQtc3Ryb2tlLXdpZHRoOiAxcHg7XG4gIC13ZWJraXQtdGV4dC1zdHJva2UtY29sb3I6IHdoaXRlO1xufVxuLmNvbnRhaW5lciAuaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29udGFpbmVyIC5pY29uIGkge1xuICBvcGFjaXR5OiAwLjA4O1xuICBmb250LXNpemU6IDMwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/background-message/background-message.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/background-message/background-message.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BackgroundMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundMessageComponent", function() { return BackgroundMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BackgroundMessageComponent = /** @class */ (function () {
    function BackgroundMessageComponent() {
    }
    BackgroundMessageComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BackgroundMessageComponent.prototype, "topMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BackgroundMessageComponent.prototype, "bottomMessage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BackgroundMessageComponent.prototype, "iconName", void 0);
    BackgroundMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-background-message',
            template: __webpack_require__(/*! raw-loader!./background-message.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/background-message/background-message.component.html"),
            styles: [__webpack_require__(/*! ./background-message.component.scss */ "./src/app/components/background-message/background-message.component.scss")]
        })
    ], BackgroundMessageComponent);
    return BackgroundMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  background-color: #007bff;\n  width: 100%;\n  height: 60px;\n  color: #ffffff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuIiwiZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-footer",
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/issue-card/issue-card.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/issue-card/issue-card.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin-top: 40px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-width: 0px;\n}\n.card .markdown-container {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  width: 125%;\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n  overflow: hidden;\n  word-wrap: normal;\n}\n.card:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9jb21wb25lbnRzL2lzc3VlLWNhcmQvaXNzdWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pc3N1ZS1jYXJkL2lzc3VlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHdFQUFBO0VBQ0EsNkRBQUE7RUFBQSxxREFBQTtFQUNBLGlCQUFBO0FDQ0o7QURDSTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDTjtBREdFO0VBQ0UsNEVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaXNzdWUtY2FyZC9pc3N1ZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO1xuICAgIGJvcmRlci13aWR0aDogMHB4O1xuXG4gICAgLm1hcmtkb3duLWNvbnRhaW5lcntcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgICAgIHdpZHRoOiAxMDAlICogKDEwMCUgLyA4MCUpO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgd29yZC13cmFwOiBub3JtYWw7XG4gICAgfVxuICB9XG4gIFxuICAuY2FyZDpob3ZlcntcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xuICB9IiwiLmNhcmQge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBib3JkZXItd2lkdGg6IDBweDtcbn1cbi5jYXJkIC5tYXJrZG93bi1jb250YWluZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIHdpZHRoOiAxMjUlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd29yZC13cmFwOiBub3JtYWw7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/issue-card/issue-card.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/issue-card/issue-card.component.ts ***!
  \***************************************************************/
/*! exports provided: IssueCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueCardComponent", function() { return IssueCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_2__);



var IssueCardComponent = /** @class */ (function () {
    function IssueCardComponent() {
    }
    IssueCardComponent.prototype.ngOnInit = function () {
    };
    IssueCardComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        var markdown = new markdown_it__WEBPACK_IMPORTED_MODULE_2___default.a();
        var result = markdown.render(this.issue.body);
        document.getElementById("" + this.issue.id).innerHTML = result;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], IssueCardComponent.prototype, "issue", void 0);
    IssueCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-issue-card',
            template: __webpack_require__(/*! raw-loader!./issue-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/issue-card/issue-card.component.html"),
            styles: [__webpack_require__(/*! ./issue-card.component.scss */ "./src/app/components/issue-card/issue-card.component.scss")]
        })
    ], IssueCardComponent);
    return IssueCardComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ "./src/app/services/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(sharedDataService, router) {
        var _this = this;
        this.sharedDataService = sharedDataService;
        this.router = router;
        this.searchTerm = "";
        this.searchTermChangedSubscription = this.sharedDataService.searchTermChanged.subscribe(function (newSearchTerm) {
            _this.searchTerm = newSearchTerm;
        });
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this.searchTermChangedSubscription.unsubscribe();
    };
    NavbarComponent.prototype.onSearch = function () {
        this.router.navigateByUrl("/repositories/" + (this.searchTerm || ""));
        this.sharedDataService.search(this.searchTerm || "");
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".badge-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 10px;\n}\n.badge-container .badge {\n  color: white;\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9jb21wb25lbnRzL3BpZS1jaGFydC9waWUtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGllLWNoYXJ0L3BpZS1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFNQSxtQkFBQTtBQ0pKO0FEQUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9waWUtY2hhcnQvcGllLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhZGdlLWNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgLmJhZGdle1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufSIsIi5iYWRnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5iYWRnZS1jb250YWluZXIgLmJhZGdlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/pie-chart/pie-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/pie-chart/pie-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: PieChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieChartComponent", function() { return PieChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");



var PieChartComponent = /** @class */ (function () {
    function PieChartComponent() {
        this.isDonut = false;
        this.width = 200;
        this.height = 200;
    }
    PieChartComponent.prototype.ngOnInit = function () {
    };
    PieChartComponent.prototype.ngAfterViewInit = function () {
        this.createChart();
    };
    PieChartComponent.prototype.createChart = function () {
        // set the dimensions and margins of the graph
        var margin = 0;
        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(this.width, this.height) / 2 - margin;
        // append the svg object to the div called 'my_dataviz'
        var svg = d3__WEBPACK_IMPORTED_MODULE_2__["select"]("#" + this.idSelector)
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height)
            .append("g")
            .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
        // set the color scale
        var color = d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]()
            .domain(this.chartData.colorDomains)
            .range(this.chartData.colors);
        // Compute the position of each group on the pie:
        var pie = d3__WEBPACK_IMPORTED_MODULE_2__["pie"]()
            .sort(null) // Do not sort group by size
            .value(function (d) { return d.value; });
        var data_ready = pie(d3__WEBPACK_IMPORTED_MODULE_2__["entries"](this.chartData.values));
        // The arc generator
        var arc = d3__WEBPACK_IMPORTED_MODULE_2__["arc"]()
            .innerRadius(this.isDonut ? radius * 0.55 : 0) // This is the size of the donut hole
            .outerRadius(radius * 0.8);
        // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
        svg
            .selectAll('allSlices')
            .data(data_ready)
            .enter()
            .append('path')
            .attr('d', arc)
            .attr('fill', function (d) { return (color(d.data.key)); })
            .attr("stroke", "white")
            .style("stroke-width", "2px")
            .style("opacity", 1);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieChartComponent.prototype, "idSelector", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieChartComponent.prototype, "chartData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieChartComponent.prototype, "isDonut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieChartComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PieChartComponent.prototype, "height", void 0);
    PieChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pie-chart',
            template: __webpack_require__(/*! raw-loader!./pie-chart.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/pie-chart/pie-chart.component.html"),
            styles: [__webpack_require__(/*! ./pie-chart.component.scss */ "./src/app/components/pie-chart/pie-chart.component.scss")]
        })
    ], PieChartComponent);
    return PieChartComponent;
}());



/***/ }),

/***/ "./src/app/components/repo-card/repo-card.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/repo-card/repo-card.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  border-width: 0px;\n}\n.card .bottom .chart {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.card .bottom .counts {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n.card .bottom .counts span {\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.card .bottom a {\n  display: inline;\n}\n.card .bottom .footer-bottom {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  margin-bottom: 5px;\n}\n.card .bottom .footer-bottom span {\n  align-self: flex-end;\n}\n.card:hover {\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9jb21wb25lbnRzL3JlcG8tY2FyZC9yZXBvLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVwby1jYXJkL3JlcG8tY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHdFQUFBO0VBQ0EsNkRBQUE7RUFBQSxxREFBQTtFQUNBLGlCQUFBO0FDQUY7QURJTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRlI7QURLTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNIUjtBRElRO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQ0ZWO0FETU07RUFDRSxlQUFBO0FDSlI7QURPTTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0Esa0JBQUE7QUNMUjtBRE9RO0VBQ0Usb0JBQUE7QUNMVjtBRFdBO0VBQ0UsNEVBQUE7QUNSRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVwby1jYXJkL3JlcG8tY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xuXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTIpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7XG4gIGJvcmRlci13aWR0aDogMHB4O1xuICBcbiAgLmJvdHRvbSB7XG4gIFxuICAgICAgLmNoYXJ0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgXG4gICAgICAuY291bnRze1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFxuICAgICAgYXtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuXG4gICAgICAuZm9vdGVyLWJvdHRvbXtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgfVxufVxuXG4uY2FyZDpob3ZlcntcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcbn1cbiIsIi5jYXJkIHtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKTtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4uY2FyZCAuYm90dG9tIC5jaGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmNhcmQgLmJvdHRvbSAuY291bnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLmNhcmQgLmJvdHRvbSAuY291bnRzIHNwYW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY2FyZCAuYm90dG9tIGEge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4uY2FyZCAuYm90dG9tIC5mb290ZXItYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLmNhcmQgLmJvdHRvbSAuZm9vdGVyLWJvdHRvbSBzcGFuIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLCAwLCAwLCAwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIyKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/repo-card/repo-card.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/repo-card/repo-card.component.ts ***!
  \*************************************************************/
/*! exports provided: RepoCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RepoCardComponent", function() { return RepoCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_ChartData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/ChartData */ "./src/app/models/ChartData.ts");



var RepoCardComponent = /** @class */ (function () {
    function RepoCardComponent() {
    }
    RepoCardComponent.prototype.ngOnInit = function () {
        var values = { Issues: this.repo.open_issues_count, Forks: this.repo.forks_count, Stargazers: this.repo.stargazers_count };
        var chartColorDomains = ['Issues', 'Forks', 'Stargazers'];
        var chartColors = ['#007bff', '#6c757d', '#17a2b8'];
        this.chartData = new _models_ChartData__WEBPACK_IMPORTED_MODULE_2__["ChartData"](values, chartColorDomains, chartColors);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], RepoCardComponent.prototype, "repo", void 0);
    RepoCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-repo-card',
            template: __webpack_require__(/*! raw-loader!./repo-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/repo-card/repo-card.component.html"),
            animations: [],
            styles: [__webpack_require__(/*! ./repo-card.component.scss */ "./src/app/components/repo-card/repo-card.component.scss")]
        })
    ], RepoCardComponent);
    return RepoCardComponent;
}());



/***/ }),

/***/ "./src/app/models/ChartData.ts":
/*!*************************************!*\
  !*** ./src/app/models/ChartData.ts ***!
  \*************************************/
/*! exports provided: ChartData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartData", function() { return ChartData; });
var ChartData = /** @class */ (function () {
    function ChartData(values, colorDomains, colors) {
        this.values = values;
        this.colorDomains = colorDomains;
        this.colors = colors;
    }
    ChartData.ctorParameters = function () { return [
        { type: Object },
        { type: Array },
        { type: Array }
    ]; };
    return ChartData;
}());



/***/ }),

/***/ "./src/app/screens/home/home.component.scss":
/*!**************************************************!*\
  !*** ./src/app/screens/home/home.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loading-container {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9zY3JlZW5zL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2NyZWVucy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbiIsIi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/screens/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/screens/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_git_hub_git_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/git-hub/git-hub.service */ "./src/app/services/git-hub/git-hub.service.ts");
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ "./src/app/services/shared-data/shared-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(gitHubService, route, sharedDataService) {
        this.gitHubService = gitHubService;
        this.route = route;
        this.sharedDataService = sharedDataService;
        this.repos = [];
        this.loading = false;
        this.isError = false;
        this.searchTerm = this.route.snapshot.paramMap.get("searchTerm");
        this.sharedDataService.search(this.searchTerm);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchTermChangedSubscription = this.sharedDataService.searchTermChanged.subscribe(function (newSearchTerm) {
            _this.getRepositories();
        });
        this.getRepositories();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.searchTermChangedSubscription.unsubscribe();
    };
    HomeComponent.prototype.getRepositories = function () {
        var _this = this;
        if (this.sharedDataService.searchTerm && (this.sharedDataService.searchTerm !== this.sharedDataService.prevSearchTerm ||
            this.sharedDataService.repos.length === 0 ||
            this.isError === true)) {
            this.loading = true;
            this.isError = false;
            this.repos = [];
            this.gitHubService
                .getRepositoriesByName(this.sharedDataService.searchTerm)
                .subscribe(function (data) {
                data.items.forEach(function (repo) {
                    _this.repos.push(repo);
                });
                _this.loading = false;
                _this.sharedDataService.repos = _this.repos;
                _this.setBackgroundMessage();
            }, function (error) { return _this.handleError(error); });
        }
        else {
            this.isError = false;
            this.loading = false;
            this.repos = this.sharedDataService.searchTerm ? this.sharedDataService.repos : [];
            this.setBackgroundMessage();
        }
    };
    HomeComponent.prototype.handleError = function (error) {
        this.isError = true;
        this.loading = false;
        this.setBackgroundMessage("error");
    };
    ;
    HomeComponent.prototype.setBackgroundMessage = function (message) {
        if (message) {
            this.message = message;
        }
        else if (!this.sharedDataService.searchTerm) {
            this.message = "no-search";
        }
        else if (this.isError) {
            this.message = "error";
        }
        else if (this.repos.length === 0 && this.sharedDataService.searchTerm && !this.loading) {
            this.message = "no-match";
        }
        else {
            this.message = "none";
        }
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_git_hub_git_hub_service__WEBPACK_IMPORTED_MODULE_2__["GitHubService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["SharedDataService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/screens/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/screens/home/home.component.scss")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/screens/issues/issues.component.scss":
/*!******************************************************!*\
  !*** ./src/app/screens/issues/issues.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chart {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.loading-container {\n  width: 100%;\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9zY3JlZW5zL2lzc3Vlcy9pc3N1ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NjcmVlbnMvaXNzdWVzL2lzc3Vlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9zY3JlZW5zL2lzc3Vlcy9pc3N1ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hhcnR7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9hZGluZy1jb250YWluZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iLCIuY2hhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/screens/issues/issues.component.ts":
/*!****************************************************!*\
  !*** ./src/app/screens/issues/issues.component.ts ***!
  \****************************************************/
/*! exports provided: IssuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssuesComponent", function() { return IssuesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_git_hub_git_hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/git-hub/git-hub.service */ "./src/app/services/git-hub/git-hub.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ "./src/app/services/shared-data/shared-data.service.ts");
/* harmony import */ var _models_ChartData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/ChartData */ "./src/app/models/ChartData.ts");






var IssuesComponent = /** @class */ (function () {
    function IssuesComponent(gitHubService, route, sharedDataService) {
        this.gitHubService = gitHubService;
        this.route = route;
        this.sharedDataService = sharedDataService;
        this.issues = [];
        this.loading = false;
        this.openCount = 0;
        this.closedCount = 0;
        this.isError = false;
        this.owner = this.route.snapshot.paramMap.get("owner");
        this.repoName = this.route.snapshot.paramMap.get("repoName");
        // This line sets the current search query param in the shared data service.
        // This way, non-routed components can access the route parameters
        // For example, the search field in the navbar when reloading the page with query params in the url
        this.sharedDataService.search(this.repoName);
    }
    IssuesComponent.prototype.ngOnInit = function () {
        this.getIssues();
    };
    IssuesComponent.prototype.getIssues = function () {
        var _this = this;
        this.loading = true;
        if (this.repoName !== this.sharedDataService.repoName ||
            this.owner !== this.sharedDataService.ownerName ||
            this.sharedDataService.issues.length === 0 ||
            this.isError === true) {
            this.gitHubService
                .getIssuesForRepository(this.owner, this.repoName)
                .subscribe(function (data) {
                data.items.forEach(function (issue) {
                    issue.state === "open" ? _this.openCount++ : _this.closedCount++;
                    _this.issues.push(issue);
                });
                _this.initChartData();
                _this.sharedDataService.issues = _this.issues;
                _this.sharedDataService.repoName = _this.repoName;
                _this.sharedDataService.ownerName = _this.owner;
                _this.isError = false;
                _this.loading = false;
            }, function (error) { return _this.handleError(error); });
        }
        else {
            this.issues = this.sharedDataService.issues;
            this.issues.forEach(function (issue) {
                issue.state === "open" ? _this.openCount++ : _this.closedCount++;
            });
            this.initChartData();
            this.isError = false;
            this.loading = false;
        }
    };
    IssuesComponent.prototype.initChartData = function () {
        var values = { Open: this.openCount, Closed: this.closedCount };
        var chartColorDomains = ['Open', 'Closed'];
        var chartColors = ['#28a745', '#dc3545'];
        this.chartData = new _models_ChartData__WEBPACK_IMPORTED_MODULE_5__["ChartData"](values, chartColorDomains, chartColors);
    };
    IssuesComponent.prototype.handleError = function (error) {
        this.isError = true;
    };
    ;
    IssuesComponent.ctorParameters = function () { return [
        { type: _services_git_hub_git_hub_service__WEBPACK_IMPORTED_MODULE_2__["GitHubService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_4__["SharedDataService"] }
    ]; };
    IssuesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-issues",
            template: __webpack_require__(/*! raw-loader!./issues.component.html */ "./node_modules/raw-loader/index.js!./src/app/screens/issues/issues.component.html"),
            styles: [__webpack_require__(/*! ./issues.component.scss */ "./src/app/screens/issues/issues.component.scss")]
        })
    ], IssuesComponent);
    return IssuesComponent;
}());



/***/ }),

/***/ "./src/app/screens/not-found404/not-found404.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/screens/not-found404/not-found404.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  height: 100vh;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9naXRodWIvZ2l0aHViLXJlcG8tZXhwbG9yZXIvc3JjL2FwcC9zY3JlZW5zL25vdC1mb3VuZDQwNC9ub3QtZm91bmQ0MDQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NjcmVlbnMvbm90LWZvdW5kNDA0L25vdC1mb3VuZDQwNC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2NyZWVucy9ub3QtZm91bmQ0MDQvbm90LWZvdW5kNDA0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSIsIi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/screens/not-found404/not-found404.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/screens/not-found404/not-found404.component.ts ***!
  \****************************************************************/
/*! exports provided: NotFound404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFound404Component", function() { return NotFound404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFound404Component = /** @class */ (function () {
    function NotFound404Component() {
    }
    NotFound404Component.prototype.ngOnInit = function () {
    };
    NotFound404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found404',
            template: __webpack_require__(/*! raw-loader!./not-found404.component.html */ "./node_modules/raw-loader/index.js!./src/app/screens/not-found404/not-found404.component.html"),
            styles: [__webpack_require__(/*! ./not-found404.component.scss */ "./src/app/screens/not-found404/not-found404.component.scss")]
        })
    ], NotFound404Component);
    return NotFound404Component;
}());



/***/ }),

/***/ "./src/app/services/git-hub/git-hub.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/git-hub/git-hub.service.ts ***!
  \*****************************************************/
/*! exports provided: GitHubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GitHubService", function() { return GitHubService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GitHubService = /** @class */ (function () {
    function GitHubService(http) {
        this.http = http;
        this.reposUrl = "https://api.github.com/search/repositories";
        this.issuesUrl = "https://api.github.com/search/issues";
    }
    GitHubService.prototype.getRepositoriesByName = function (name) {
        return this.http.get(this.reposUrl + "?q=" + name);
    };
    GitHubService.prototype.getIssuesForRepository = function (owner, name, state) {
        return this.http.get(this.issuesUrl + "?q=repo:" + owner + "/" + name + (state ? +("state:" + state) : ""));
    };
    GitHubService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GitHubService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], GitHubService);
    return GitHubService;
}());



/***/ }),

/***/ "./src/app/services/shared-data/shared-data.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/shared-data/shared-data.service.ts ***!
  \*************************************************************/
/*! exports provided: SharedDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDataService", function() { return SharedDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SharedDataService = /** @class */ (function () {
    function SharedDataService() {
        this.prevSearchTerm = "";
        this.searchTerm = "";
        this.repoName = "";
        this.ownerName = "";
        this.repos = [];
        this.issues = [];
        this.searchTermChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SharedDataService.prototype.search = function (searchTerm) {
        this.prevSearchTerm = this.searchTerm;
        this.searchTerm = searchTerm;
        this.searchTermChanged.emit(this.searchTerm);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SharedDataService.prototype, "searchTermChanged", void 0);
    SharedDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        })
    ], SharedDataService);
    return SharedDataService;
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

module.exports = __webpack_require__(/*! /Users/admin/github/github-repo-explorer/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map