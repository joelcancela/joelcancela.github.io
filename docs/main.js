"use strict";
(self["webpackChunkjoelcancela_github_io"] = self["webpackChunkjoelcancela_github_io"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_common_page_common_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/common-page/common-page.component */ 1964);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 6728);
/* harmony import */ var _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact-page/contact-page.component */ 5278);
/* harmony import */ var _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.module */ 8950);
/* harmony import */ var _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/error-page/error-page.component */ 628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








const routes = [
    {
        path: '', component: _pages_common_page_common_page_component__WEBPACK_IMPORTED_MODULE_0__.CommonPageComponent, children: [
            { path: '', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent, pathMatch: 'full' },
            { path: 'contact', component: _pages_contact_page_contact_page_component__WEBPACK_IMPORTED_MODULE_2__.ContactPageComponent },
            { path: '**', component: _pages_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_4__.ErrorPageComponent }, // Wildcard route to error page
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
                anchorScrolling: 'enabled',
                scrollOffset: [0, 70],
                relativeLinkResolution: 'legacy'
            }),
            _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule // Needed as we import components from this module for routing
        ], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _pages_pages_module__WEBPACK_IMPORTED_MODULE_3__.PagesModule // Needed as we import components from this module for routing
    ], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _assets_i18n_fr_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/i18n/fr.json */ 1463);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/enums/language.enum */ 8191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);









function AppComponent_ng_container_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return { exact: true }; };
class AppComponent {
    constructor(translate, router, viewportScroller) {
        this.translate = translate;
        this.router = router;
        this.viewportScroller = viewportScroller;
        this.AppComponent = AppComponent;
        this.LanguageEnum = _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__.Language;
        this.today = Date.now();
        this.navbarCollapsed = true;
        this.translate.setTranslation('fr', _assets_i18n_fr_json__WEBPACK_IMPORTED_MODULE_0__);
        this.translate.setDefaultLang('fr');
        // Trick for correct scrolling, see https://github.com/angular/angular/issues/24547
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.Scroll), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(100))
            .subscribe(e => {
            if (e.anchor) {
                viewportScroller.scrollToAnchor(e.anchor);
            }
            else {
                viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }
    useLanguage(language) {
        if (AppComponent.language !== _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__.Language[language]) {
            this.translate.use(language);
            AppComponent.language = _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__.Language[language];
        }
    }
}
AppComponent.language = _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__.Language.fr;
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.ViewportScroller)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["ngjc-root"]], decls: 63, vars: 40, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "fixed-top", "bg-dark"], [1, "container"], ["routerLink", "/", 1, "navbar-brand", "sky-fl"], ["aria-controls", "navbarContent", "aria-label", "Toggle navigation", "type", "button", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["role", "button", "routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions", "click"], ["fragment", "portfolio", "role", "button", "routerLink", "/", 1, "nav-link", 3, "click"], ["ngbDropdown", "", 1, "nav-item"], ["id", "linksDropdown", "ngbDropdownToggle", "", "role", "button", 1, "nav-link"], ["aria-labelledby", "linksDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "dropdown-header"], ["href", "https://joelcancela.github.io/PokeTCGSky", "ngbDropdownItem", "", "rel", "noreferrer", "target", "_blank", 3, "click"], ["href", "https://joelcancela.github.io/GoDex", "ngbDropdownItem", "", "rel", "noreferrer", "target", "_blank", 3, "click"], [1, "dropdown-divider"], ["href", "https://pierre-rainero.fr", "ngbDropdownItem", "", "rel", "noreferrer", "target", "_blank", 3, "click"], ["role", "button", "routerLink", "/contact", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "navbar-nav", "ml-auto"], ["ngbDropdown", "", "placement", "bottom-right", 1, "nav-item"], ["id", "languageDropdown", "ngbDropdownToggle", "", "role", "button", 1, "nav-link"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["aria-labelledby", "languageDropdown", "ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-right"], ["href", "", "ngbDropdownItem", "", 3, "click"], [1, "flag-icon", "flag-icon-fr"], [1, "flag-icon", "flag-icon-gb"], ["role", "main", 1, "container"], [1, "footer", "bg-dark"], [1, "copyright", "text-center"], ["routerLink", "/contact"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Jo\u00EBl Cancela Vaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() { return ctx.navbarCollapsed = !ctx.navbarCollapsed; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 7)(13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 10)(17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12)(21, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_24_listener() { return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Pok\u00E9TCGSky");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_26_listener() { return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "GoDex");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "h6", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_32_listener() { return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "li", 7)(36, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_36_listener() { return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 19)(40, "div", 20)(41, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](42, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, AppComponent_ng_container_43_Template, 3, 0, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, AppComponent_ng_container_44_Template, 3, 0, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 24)(47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_47_listener($event) { $event.preventDefault(); ctx.useLanguage("fr"); return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_Template_a_click_51_listener($event) { $event.preventDefault(); ctx.useLanguage("en"); return ctx.navbarCollapsed = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](52, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "main", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](56, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "footer", 29)(58, "div", 1)(59, "div", 30)(60, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-expanded", !ctx.navbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("collapse", ctx.navbarCollapsed);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](39, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 18, "navbar.home"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 20, "navbar.projects"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](19, 22, "navbar.links"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](23, 24, "navbar.projects"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](31, 26, "navbar.externalLinks"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 28, "navbar.pierreWebsite"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 30, "navbar.contact"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx.AppComponent.language);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.LanguageEnum.fr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", ctx.LanguageEnum.en);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.AppComponent.language, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](50, 32, "navbar.lang.fr"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 34, "navbar.lang.en"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("\u00A9 2015-", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](62, 36, ctx.today, "yyyy"), " - Jo\u00EBl Cancela Vaz");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkActive, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbDropdownItem, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: [".copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.dropdown-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.nav-link.inactive[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.5) !important;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  \n  height: 4vh;\n  line-height: 4vh;\n  background-color: #f5f5f5;\n}\n\nnav[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.dropdown-menu[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLDBDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtBQUNGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3B5cmlnaHQgYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmF2LWxpbmsuaW5hY3RpdmUge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSkgIWltcG9ydGFudDtcbn1cblxuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBTZXQgdGhlIGZpeGVkIGhlaWdodCBvZiB0aGUgZm9vdGVyIGhlcmUgKi9cbiAgaGVpZ2h0OiA0dmg7XG4gIGxpbmUtaGVpZ2h0OiA0dmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG59XG5cbm5hdiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmRyb3Bkb3duLW1lbnUge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "HttpLoaderFactory": () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/http-loader */ 2202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production }),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient]
                }
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_5__.ServiceWorkerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateModule] }); })();
// required for AOT compilation
function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_9__.TranslateHttpLoader(http);
}


/***/ }),

/***/ 8191:
/*!**********************************************!*\
  !*** ./src/app/model/enums/language.enum.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Language": () => (/* binding */ Language)
/* harmony export */ });
var Language;
(function (Language) {
    Language["fr"] = "FR";
    Language["en"] = "EN";
})(Language || (Language = {}));


/***/ }),

/***/ 2024:
/*!*****************************************************!*\
  !*** ./src/app/model/portfolio-type-filter.enum.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioTypeFilterEnum": () => (/* binding */ PortfolioTypeFilterEnum)
/* harmony export */ });
var PortfolioTypeFilterEnum;
(function (PortfolioTypeFilterEnum) {
    PortfolioTypeFilterEnum["ALL"] = "all";
    PortfolioTypeFilterEnum["PERSONAL"] = "personal";
    PortfolioTypeFilterEnum["PROFESSIONAL"] = "pro";
    PortfolioTypeFilterEnum["SCHOOL"] = "school";
})(PortfolioTypeFilterEnum || (PortfolioTypeFilterEnum = {}));


/***/ }),

/***/ 1964:
/*!************************************************************!*\
  !*** ./src/app/pages/common-page/common-page.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonPageComponent": () => (/* binding */ CommonPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class CommonPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
CommonPageComponent.ɵfac = function CommonPageComponent_Factory(t) { return new (t || CommonPageComponent)(); };
CommonPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CommonPageComponent, selectors: [["ngjc-common-page"]], decls: 1, vars: 0, template: function CommonPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: [".container[_ngcontent-%COMP%] {\n  padding-bottom: 0.4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1vbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJjb21tb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuIl19 */"] });


/***/ }),

/***/ 5120:
/*!*********************************************************!*\
  !*** ./src/app/pages/common-page/common-page.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonPageModule": () => (/* binding */ CommonPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _common_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-page.component */ 1964);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




class CommonPageModule {
}
CommonPageModule.ɵfac = function CommonPageModule_Factory(t) { return new (t || CommonPageModule)(); };
CommonPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CommonPageModule });
CommonPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CommonPageModule, { declarations: [_common_page_component__WEBPACK_IMPORTED_MODULE_0__.CommonPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5278:
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageComponent": () => (/* binding */ ContactPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pipes/trust-html.pipe */ 8418);



class ContactPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ContactPageComponent.ɵfac = function ContactPageComponent_Factory(t) { return new (t || ContactPageComponent)(); };
ContactPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactPageComponent, selectors: [["ngjc-contact-page"]], decls: 110, vars: 43, consts: [[1, "jumbotron"], [1, "jumboItem"], [1, "row"], [1, "col-md-6"], ["href", "mailto:joel.cancelavaz@outlook.fr"], [3, "innerHTML"], [1, "alert", "alert-info"], [1, "text-center"], ["href", "https://www.legifrance.gouv.fr/", "rel", "noreferrer", "target", "_blank"]], template: function ContactPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1)(5, "div", 2)(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3)(10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "joel.cancelavaz@outlook.fr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 1)(17, "div", 2)(18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Jo\u00EBl Cancela Vaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 2)(25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Jo\u00EBl Cancela Vaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](42, "trustHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "trustHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 6)(56, "div", 7)(57, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, " Article L. 111-1 du Code de la propri\u00E9t\u00E9 intellectuelle :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " L'auteur d'une oeuvre de l'esprit jouit sur cette oeuvre, du seul fait de sa cr\u00E9ation, d'un droit de propri\u00E9t\u00E9 incorporelle exclusif et opposable \u00E0 tous. Ce droit comporte des attributs d'ordre intellectuel et moral, ainsi que des attributs d'ordre patrimonial [...].");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "br")(64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, " Article L. 112-2 du Code de la propri\u00E9t\u00E9 intellectuelle :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, " Sont consid\u00E9r\u00E9s notamment comme oeuvres de l'esprit au sens du pr\u00E9sent code :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "ul")(70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Les livres, brochures et autres \u00E9crits litt\u00E9raires, artistiques et scientifiques ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Les conf\u00E9rences, allocutions, sermons, plaidoiries et autres oeuvres de m\u00EAme nature ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Les oeuvres dramatiques ou dramatico-musicales ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Les oeuvres chor\u00E9graphiques, les num\u00E9ros et tours de cirque, les pantomimes,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " dont la mise en oeuvre est fix\u00E9e par \u00E9crit ou autrement ; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Les compositions musicales avec ou sans paroles ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Les oeuvres cin\u00E9matographiques et autres oeuvres consistant dans des s\u00E9quences anim\u00E9es d'images, sonoris\u00E9es ou non, d\u00E9nomm\u00E9es ensemble oeuvres audiovisuelles ; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](85, "Les oeuvres de dessin, de peinture, d'architecture, de sculpture, de gravure, de lithographie ; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Les oeuvres graphiques et typographiques ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Les oeuvres photographiques et celles r\u00E9alis\u00E9es \u00E0 l'aide de techniques analogues \u00E0 la photographie ; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Les oeuvres des arts appliqu\u00E9s ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Les illustrations, les cartes g\u00E9ographiques ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "Les plans, croquis et ouvrages plastiques relatifs \u00E0 la g\u00E9ographie, \u00E0 la topographie, \u00E0 l'architecture et aux sciences ; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Les logiciels, y compris le mat\u00E9riel de conception pr\u00E9paratoire ;");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Les cr\u00E9ations des industries saisonni\u00E8res de l'habillement et de la parure. Sont r\u00E9put\u00E9es industries saisonni\u00E8res de l'habillement et de la parure les industries qui, en raison des exigences de la mode, renouvellent fr\u00E9quemment la forme de leurs produits, et notamment la couture, la fourrure, la lingerie, la broderie, la mode, la chaussure, la ganterie, la maroquinerie, la fabrique de tissus de haute nouveaut\u00E9 ou sp\u00E9ciaux \u00E0 la haute couture, les productions des paruriers et des bottiers et les fabriques de tissus d'ameublement. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, " Article L. 123-1 du Code de la propri\u00E9t\u00E9 intellectuelle :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, " L'auteur jouit, sa vie durant du droit exclusif d'exploiter son oeuvre sous quelque forme que ce soit et d'en tirer un profit p\u00E9cuniaire.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](104, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, " Au d\u00E9c\u00E8s de l'auteur, ce droit persiste au b\u00E9n\u00E9fice de ses ayants-droits pendant l'ann\u00E9e civile en cours et les soixante-dix ann\u00E9es qui suivent. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 7)(107, "a", 8)(108, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "Legifrance");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 13, "contactPage.contact"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 15, "contactPage.email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 17, "contactPage.legalNotices"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 19, "contactPage.creator"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 21, "contactPage.hosting"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](33, 23, "contactPage.availability"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 25, "contactPage.availabilityText"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 27, "contactPage.responsibility"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](42, 29, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 31, "contactPage.responsibilityText")), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](47, 33, "contactPage.protectedDomains"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 35, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](50, 37, "contactPage.protectedDomainsText")), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 39, "contactPage.legalExtracts"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 41, "contactPage.copyrightTitle"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe, _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__.TrustHtmlPipe], styles: ["h4[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRiIsImZpbGUiOiJjb250YWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 181:
/*!***********************************************************!*\
  !*** ./src/app/pages/contact-page/contact-page.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactPageModule": () => (/* binding */ ContactPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _contact_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-page.component */ 5278);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class ContactPageModule {
}
ContactPageModule.ɵfac = function ContactPageModule_Factory(t) { return new (t || ContactPageModule)(); };
ContactPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ContactPageModule });
ContactPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ContactPageModule, { declarations: [_contact_page_component__WEBPACK_IMPORTED_MODULE_0__.ContactPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 628:
/*!**********************************************************!*\
  !*** ./src/app/pages/error-page/error-page.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorPageComponent": () => (/* binding */ ErrorPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ErrorPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["ngjc-error-page"]], decls: 2, vars: 0, consts: [["alt", "404 not found", "src", "https://http.cat/404", 1, "img-fluid", "rounded", "mx-auto", "d-block"]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 8251:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/portfolio-item/portfolio-item.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioItemComponent": () => (/* binding */ PortfolioItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipes/trust-html.pipe */ 8418);




function PortfolioItemComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioItemComponent_ng_template_11_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "trustHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12)(9, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioItemComponent_ng_template_11_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 3, ctx_r1.project.html), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 5, "mainPage.projects.close"));
} }
class PortfolioItemComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.HTTPS_PREFIX = 'https';
        this.pathToPortfolio = 'assets/portfolio/';
        this.thumbnailFile = '/tmb/1.png';
        this.imagePath = '';
    }
    open(content) {
        // Not animated by default https://github.com/ng-bootstrap/ng-bootstrap/issues/295
        // https://github.com/ng-bootstrap/ng-bootstrap/pull/1765
        this.modalService.open(content, { size: 'lg' });
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this.project.path.startsWith(this.HTTPS_PREFIX)) { // If we provide a link let's just use it
            this.imagePath = this.project.path;
        }
        else {
            this.imagePath = this.pathToPortfolio + this.project.path + this.thumbnailFile;
        }
    }
}
PortfolioItemComponent.ɵfac = function PortfolioItemComponent_Factory(t) { return new (t || PortfolioItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
PortfolioItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PortfolioItemComponent, selectors: [["ngjc-portfolio-item"]], inputs: { project: "project" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 6, consts: [[1, "portfolio-item", 3, "click"], [3, "alt", "src"], [1, "portfolio-item-inner"], [1, "portfolio-item-animation"], [1, "portfolio-item-animation-text"], [1, "portfolio-item-title"], ["content", ""], [1, "modal-header"], ["id", "modal-basic-title", 1, "modal-title"], ["aria-label", "Close", "type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", 3, "innerHTML"], [1, "modal-footer"], ["aria-label", "Close", "type", "button", 1, "btn", "btn-light", 3, "click"]], template: function PortfolioItemComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PortfolioItemComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12); return ctx.open(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5)(9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PortfolioItemComponent_ng_template_11_Template, 12, 7, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("alt", ctx.project.name)("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 4, "mainPage.projects.knowMore"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.project.name);
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__.TrustHtmlPipe], styles: [".portfolio-item {\n  width: 100%;\n  height: 100%;\n  float: left;\n  overflow: hidden;\n  position: relative;\n  text-align: center;\n  cursor: pointer;\n  border: 1px solid #d5d5d5;\n  border-radius: 2px;\n}\n\n.portfolio-item img {\n  display: block;\n  position: relative;\n  margin: 0 auto;\n  width: 100%;\n}\n\n.portfolio-item .portfolio-item-inner {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  transition: all 0.4s ease-in-out;\n  display: flex;\n  justify-content: center;\n}\n\n.portfolio-item .portfolio-item-inner .portfolio-item-title {\n  color: #fff;\n  text-align: center;\n  background: rgba(0, 0, 0, 0.6);\n  align-self: center;\n  width: 100%;\n}\n\n.portfolio-item h2 {\n  word-break: break-word;\n  font-size: 17px;\n}\n\n.portfolio-item .portfolio-item-animation {\n  display: flex;\n  text-decoration: none;\n  text-transform: uppercase;\n  color: #fff;\n  opacity: 0;\n  transform: scale(1.5);\n  transition: all 0.4s ease-in-out;\n  font-weight: normal;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n\n.portfolio-item-animation .portfolio-item-animation-text {\n  border: 1px solid #fff;\n  width: 90%;\n  height: 70%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n}\n\n.portfolio-item:hover .portfolio-item-animation {\n  opacity: 1;\n  transform: scale(1);\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.portfolio-item:hover img {\n  transform: scale(1);\n}\n\n.portfolio-item h2, .portfolio-item img {\n  transition: all 0.4s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQ0FBQTtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRmb2xpby1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ1ZDU7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLnBvcnRmb2xpby1pdGVtIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBvcnRmb2xpby1pdGVtIC5wb3J0Zm9saW8taXRlbS1pbm5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWl0ZW0taW5uZXIgLnBvcnRmb2xpby1pdGVtLXRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW0gaDIge1xuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5wb3J0Zm9saW8taXRlbSAucG9ydGZvbGlvLWl0ZW0tYW5pbWF0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogI2ZmZjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW0tYW5pbWF0aW9uIC5wb3J0Zm9saW8taXRlbS1hbmltYXRpb24tdGV4dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNzAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucG9ydGZvbGlvLWl0ZW06aG92ZXIgLnBvcnRmb2xpby1pdGVtLWFuaW1hdGlvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45MCk7XG59XG5cbi5wb3J0Zm9saW8taXRlbTpob3ZlciBpbWcge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuXG4ucG9ydGZvbGlvLWl0ZW0gaDIsIC5wb3J0Zm9saW8taXRlbSBpbWcge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 5662:
/*!*********************************************************************************************!*\
  !*** ./src/app/pages/main-page/components/portfolio-section/portfolio-section.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioSectionComponent": () => (/* binding */ PortfolioSectionComponent)
/* harmony export */ });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../app.component */ 5041);
/* harmony import */ var _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/enums/language.enum */ 8191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio/portfolio.component */ 6466);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 3935);






function PortfolioSectionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 6)(2, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 8)(6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Projects descriptions are not translated yet. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "mainPage.projects.title"));
} }
function PortfolioSectionComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "mainPage.projects.title"));
} }
class PortfolioSectionComponent {
    constructor() {
        this.AppComponent = _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent;
        this.Language = _model_enums_language_enum__WEBPACK_IMPORTED_MODULE_1__.Language;
    }
    ngOnInit() {
    }
}
PortfolioSectionComponent.ɵfac = function PortfolioSectionComponent_Factory(t) { return new (t || PortfolioSectionComponent)(); };
PortfolioSectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PortfolioSectionComponent, selectors: [["ngjc-portfolio-section"]], decls: 12, vars: 5, consts: [[1, "mt-3"], [1, "row"], [1, "col-12", "text-center"], ["class", "row", 4, "ngIf", "ngIfElse"], ["frenchBlock", ""], [1, "my-3"], [1, "col-md-6", "offset-md-3", "col-sm-12", "projects-title"], [1, "sky", "underline"], [1, "col-md-3", "col-sm-12"], ["role", "alert", 1, "alert", "alert-warning", "mb-0"]], template: function PortfolioSectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PortfolioSectionComponent_div_3_Template, 8, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, PortfolioSectionComponent_ng_template_4_Template, 3, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "ngjc-portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.AppComponent.language == ctx.Language.en)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 3, "mainPage.projects.subtitle"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\n@media (max-width: 801px) {\n  .projects-title[_ngcontent-%COMP%] {\n    \n    padding-bottom: 0.5em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby1zZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUdFO0VBREY7SUFFSSw2REFBQTtJQUNBLHFCQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8tc2VjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ucHJvamVjdHMtdGl0bGUge1xuICBAbWVkaWEgKG1heC13aWR0aDo4MDFweCkge1xuICAgIC8qIG1heCB0YWJsZXQsIGxhbmRzY2FwZSBpUGFkLCBsby1yZXMgbGFwdG9wcyBhbmRzIGRlc2t0b3BzICovXG4gICAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6466:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/main-page/components/portfolio/portfolio.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioComponent": () => (/* binding */ PortfolioComponent)
/* harmony export */ });
/* harmony import */ var _assets_portfolio_portfolio_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../assets/portfolio/portfolio.json */ 1826);
/* harmony import */ var _model_portfolio_type_filter_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../model/portfolio-type-filter.enum */ 2024);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio-item/portfolio-item.component */ 8251);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _pipes_portfolio_filter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../pipes/portfolio-filter.pipe */ 8142);








function PortfolioComponent_ngjc_portfolio_item_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngjc-portfolio-item", 5);
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("@inOutAnimation", undefined)("project", project_r1);
} }
class PortfolioComponent {
    constructor() {
        this.projects = [];
        this.currentFilter = _model_portfolio_type_filter_enum__WEBPACK_IMPORTED_MODULE_1__.PortfolioTypeFilterEnum.ALL;
        this.portfolioTypeFilterEnum = _model_portfolio_type_filter_enum__WEBPACK_IMPORTED_MODULE_1__.PortfolioTypeFilterEnum;
        this.projects = _assets_portfolio_portfolio_json__WEBPACK_IMPORTED_MODULE_0__;
    }
    ngOnInit() {
    }
}
PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) { return new (t || PortfolioComponent)(); };
PortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PortfolioComponent, selectors: [["ngjc-portfolio"]], decls: 17, vars: 24, consts: [[1, "container"], [1, "row", "justify-content-center", "portfolio-sorting", "list-group-horizontal"], [1, "filter-link", "mr-2", 3, "click"], [1, "row"], ["class", "col-12 col-sm-6 col-md-4 my-2", 3, "project", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "my-2", 3, "project"]], template: function PortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortfolioComponent_Template_a_click_2_listener() { return ctx.currentFilter = ctx.portfolioTypeFilterEnum.ALL; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortfolioComponent_Template_a_click_5_listener() { return ctx.currentFilter = ctx.portfolioTypeFilterEnum.PERSONAL; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortfolioComponent_Template_a_click_8_listener() { return ctx.currentFilter = ctx.portfolioTypeFilterEnum.PROFESSIONAL; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PortfolioComponent_Template_a_click_11_listener() { return ctx.currentFilter = ctx.portfolioTypeFilterEnum.SCHOOL; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, PortfolioComponent_ngjc_portfolio_item_15_Template, 1, 2, "ngjc-portfolio-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "portfolioFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentFilter === ctx.portfolioTypeFilterEnum.ALL);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 13, "mainPage.projects.selector.all"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentFilter === ctx.portfolioTypeFilterEnum.PERSONAL);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 15, "mainPage.projects.selector.personal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentFilter === ctx.portfolioTypeFilterEnum.PROFESSIONAL);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 17, "mainPage.projects.selector.professional"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.currentFilter === ctx.portfolioTypeFilterEnum.SCHOOL);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 19, "mainPage.projects.selector.school"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 21, ctx.projects, ctx.currentFilter));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _pipes_portfolio_filter_pipe__WEBPACK_IMPORTED_MODULE_3__.PortfolioFilterPipe], styles: [".filter-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.portfolio-sorting[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 16px;\n  margin-bottom: 48px;\n}\n\n.portfolio-sorting[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #808080;\n  text-decoration: none;\n  padding: 0;\n}\n\n.portfolio-sorting[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .portfolio-sorting[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  color: #2980b9;\n  border-bottom: 2px solid #2980b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyLWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wb3J0Zm9saW8tc29ydGluZyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLnBvcnRmb2xpby1zb3J0aW5nIGEge1xuICBjb2xvcjogIzgwODA4MDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ucG9ydGZvbGlvLXNvcnRpbmcgYTpob3ZlciwgLnBvcnRmb2xpby1zb3J0aW5nIGEuYWN0aXZlIHtcbiAgY29sb3I6ICMyOTgwYjk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMjk4MGI5O1xufVxuIl19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.trigger)('inOutAnimation', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':enter', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                        transform: 'scale(0)',
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('250ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                        transform: 'scale(1)',
                    }))
                ]),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.transition)(':leave', [
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                        transform: 'scale(1)',
                    }),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.animate)('250ms ease-in-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_7__.style)({
                        transform: 'scale(0)',
                    }))
                ])
            ])
        ] } });


/***/ }),

/***/ 5183:
/*!*************************************************************************!*\
  !*** ./src/app/pages/main-page/components/profile/profile.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../pipes/trust-html.pipe */ 8418);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);





function ProfileComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, "mainPage.profile.dlCVfr"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 4, "mainPage.profile.dlCVen"), "");
} }
class ProfileComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["ngjc-profile"]], decls: 51, vars: 34, consts: [[1, "row", "mb-4"], [1, "col-sm-12", "col-md-3"], ["alt", "photo de profil", "src", "assets/img/profil.png", 1, "img-fluid", "img-profile"], [1, "col-sm-12", "col-md-9"], [1, "underline"], [1, "sky"], [1, "my-3"], [3, "innerHTML"], [1, "row"], [1, "col-sm-12", "col-md-6", "my-2"], ["href", "https://polytech.univ-cotedazur.fr/formations/formations-ingenieurs/ingenieur-informatique", "rel", "noreferrer", "target", "_blank"], [1, "sky-fl"], [1, "col-sm-12", "col-md-5"], ["href", "https://www.youracclaim.com/badges/24f598f8-7bd3-4691-b3d4-fe87cbc25a7a", "rel", "noreferrer", "target", "_blank"], ["alt", "Oracle Certified Associate, Java SE 8 Programmer", "src", "assets/img/oracle-badge.png", 1, "javaSE8logo"], ["aria-label", "GitHub", "href", "https://github.com/joelcancela", "rel", "noreferrer", "target", "_blank", 1, "iconLink"], [1, "fa", "fa-github-square", "fa-2x"], [1, "text-center"], [1, "btn", "btn-info", 3, "routerLink"], ["class", "text-center", 4, "ngIf"], ["href", "./dl/CV/CV_CANCELA_VAZ_Jo\u00EBl_fr.pdf", "rel", "noreferrer", "role", "button", "target", "_blank", 1, "btn", "btn-sm", "btn-danger", "mr-2"], [1, "fa", "fa-download"], ["href", "./dl/CV/CV_CANCELA_VAZ_Jo\u00EBl_en.pdf", "rel", "noreferrer", "role", "button", "target", "_blank", 1, "btn", "btn-sm", "btn-danger"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "h1", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Jo\u00EBl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Cancela Vaz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "h2", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "trustHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8)(13, "div", 9)(14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Polytech Nice-Sophia");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 12)(29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 17)(34, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, ProfileComponent_div_50_Template, 9, 6, "div", 19);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 14, "mainPage.profile.jobTitle")), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](16, 16, "mainPage.profile.graduatedFrom"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 18, "mainPage.profile.speciality"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 20, "mainPage.profile.software"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 22, "mainPage.profile.architecture"), "\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "../contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 24, "mainPage.profile.contactMe"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](40, 26, "mainPage.profile.aboutMe1"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 28, "mainPage.profile.aboutMe2"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 30, "mainPage.profile.aboutMe3"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](49, 32, "mainPage.profile.aboutMe4"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showCVdownloadLinks);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__.TrustHtmlPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".iconLink[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n\n.javaSE8logo[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n}\n\n.img-profile[_ngcontent-%COMP%] {\n  border: 4px solid gray;\n  border-radius: 2px;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-size: 30px !important;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uTGluayB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5qYXZhU0U4bG9nbyB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5pbWctcHJvZmlsZSB7XG4gIGJvcmRlcjogNHB4IHNvbGlkIGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcbn1cblxuaDIge1xuICBmb250LXNpemU6IDI0cHg7XG59XG5cbmgzIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuIl19 */"] });


/***/ }),

/***/ 6728:
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageComponent": () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/profile/profile.component */ 5183);
/* harmony import */ var _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/portfolio-section/portfolio-section.component */ 5662);



class MainPageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(); };
MainPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["ngjc-main-page"]], decls: 5, vars: 0, consts: [["id", "top"], [1, "jumbotron"], ["id", "portfolio"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "ngjc-profile")(3, "hr")(4, "ngjc-portfolio-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent, _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_1__.PortfolioSectionComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2287:
/*!*****************************************************!*\
  !*** ./src/app/pages/main-page/main-page.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _main_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component */ 6728);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/profile/profile.component */ 5183);
/* harmony import */ var _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/portfolio/portfolio.component */ 6466);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ 4466);
/* harmony import */ var _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/portfolio-section/portfolio-section.component */ 5662);
/* harmony import */ var _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/portfolio-item/portfolio-item.component */ 8251);
/* harmony import */ var _pipes_portfolio_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pipes/portfolio-filter.pipe */ 8142);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










class MainPageModule {
}
MainPageModule.ɵfac = function MainPageModule_Factory(t) { return new (t || MainPageModule)(); };
MainPageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: MainPageModule });
MainPageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](MainPageModule, { declarations: [_main_page_component__WEBPACK_IMPORTED_MODULE_0__.MainPageComponent,
        _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent,
        _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioSectionComponent,
        _components_portfolio_item_portfolio_item_component__WEBPACK_IMPORTED_MODULE_5__.PortfolioItemComponent,
        _pipes_portfolio_filter_pipe__WEBPACK_IMPORTED_MODULE_6__.PortfolioFilterPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.BrowserAnimationsModule], exports: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent,
        _components_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_2__.PortfolioComponent,
        _components_portfolio_section_portfolio_section_component__WEBPACK_IMPORTED_MODULE_4__.PortfolioSectionComponent] }); })();


/***/ }),

/***/ 8950:
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagesModule": () => (/* binding */ PagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page/main-page.module */ 2287);
/* harmony import */ var _common_page_common_page_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-page/common-page.module */ 5120);
/* harmony import */ var _contact_page_contact_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page/contact-page.module */ 181);
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-page/error-page.component */ 628);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class PagesModule {
}
PagesModule.ɵfac = function PagesModule_Factory(t) { return new (t || PagesModule)(); };
PagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _common_page_common_page_module__WEBPACK_IMPORTED_MODULE_1__.CommonPageModule,
            _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_0__.MainPageModule,
            _contact_page_contact_page_module__WEBPACK_IMPORTED_MODULE_2__.ContactPageModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_error_page_error_page_component__WEBPACK_IMPORTED_MODULE_3__.ErrorPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _common_page_common_page_module__WEBPACK_IMPORTED_MODULE_1__.CommonPageModule,
        _main_page_main_page_module__WEBPACK_IMPORTED_MODULE_0__.MainPageModule,
        _contact_page_contact_page_module__WEBPACK_IMPORTED_MODULE_2__.ContactPageModule] }); })();


/***/ }),

/***/ 8142:
/*!************************************************!*\
  !*** ./src/app/pipes/portfolio-filter.pipe.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortfolioFilterPipe": () => (/* binding */ PortfolioFilterPipe)
/* harmony export */ });
/* harmony import */ var _model_portfolio_type_filter_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/portfolio-type-filter.enum */ 2024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class PortfolioFilterPipe {
    transform(projects, filter) {
        if (filter === _model_portfolio_type_filter_enum__WEBPACK_IMPORTED_MODULE_0__.PortfolioTypeFilterEnum.ALL) {
            return projects;
        }
        else {
            return projects.filter(project => project.type === filter.toString());
        }
    }
}
PortfolioFilterPipe.ɵfac = function PortfolioFilterPipe_Factory(t) { return new (t || PortfolioFilterPipe)(); };
PortfolioFilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "portfolioFilter", type: PortfolioFilterPipe, pure: true });


/***/ }),

/***/ 8418:
/*!******************************************!*\
  !*** ./src/app/pipes/trust-html.pipe.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrustHtmlPipe": () => (/* binding */ TrustHtmlPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 318);


class TrustHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
TrustHtmlPipe.ɵfac = function TrustHtmlPipe_Factory(t) { return new (t || TrustHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.DomSanitizer, 16)); };
TrustHtmlPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "trustHtml", type: TrustHtmlPipe, pure: true });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pipes/trust-html.pipe */ 8418);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule
        ], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__.TrustHtmlPipe], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule,
        _pipes_trust_html_pipe__WEBPACK_IMPORTED_MODULE_0__.TrustHtmlPipe] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 1463:
/*!*********************************!*\
  !*** ./src/assets/i18n/fr.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"navbar":{"home":"Accueil","projects":"Projets","workExperience":"Expérience professionnelle","internships":"Stages","summerJobs":"Jobs d\'été","links":"Liens","contact":"Contact","personalLinks":"Liens personnels","externalLinks":"Liens externes","pierreWebsite":"Site de Pierre Rainero","lang":{"fr":"Français","en":"Anglais"}},"mainPage":{"profile":{"jobTitle":"<span class=\\"sky-fl\\">Ingénieur</span>&nbsp;<span class=\\"sky-fl\\">Développement</span>&nbsp;<span class=\\"sky-fl\\">Logiciel</span>","graduatedFrom":"Diplômé de","speciality":"Spécialité","software":"Architectures","architecture":"Logicielles","contactMe":"Me contacter","aboutMe1":"Depuis l\'âge de huit ans je suis intéressé par l\'informatique, cet intérêt a fini par devenir une passion et j\'en ai fait mon objet d\'étude.","aboutMe2":"J\'ai fait mes débuts sur un PC IBM 300GL sous XP. Ma passion pour les jeux vidéos m\'a amené à découvrir quelques notions par moi-même (le batch, le HTML et la configuration d\'un serveur web parmi tant d\'autres). Curieux de nature, je parcours souvent les forums de développeurs afin de personnaliser mes appareils électroniques (PC, consoles, portable, etc.).","aboutMe3":"Mes qualités premières sont l\'adaptation, l\'ordre et la persévérance.","aboutMe4":"Mon objectif de carrière est de devenir un ingénieur en informatique qualifié et expérimenté, et pourquoi pas sur le long terme passer sur de la gestion de projet."},"projects":{"title":"Projets","subtitle":"Découvrez mes réalisations personnelles et collaborations.","selector":{"all":"tout","personal":"personnel","professional":"professionnel","school":"scolaire"},"knowMore":"En savoir plus","close":"Fermer"}},"contactPage":{"contact":"Contact","email":"Adresse email","legalNotices":"Mentions légales","creator":"Créateur du site","hosting":"Hébergeur","availability":"Accessibilité","availabilityText":"Le présent site web est accessible 24/24h et 7/7j sauf interruption, programmée ou non, pour les besoins de sa maintenance ou suite à la volonté de son propriétaire. Ce dernier se réserve par conséquent le droit de rendre ce service indisponible à tout moment. Il ne saurait être tenu pour responsable de tout dommage, quelle qu’en soit la nature, résultant d’une indisponibilité du service.","responsibility":"Responsabilité","responsibilityText":"Le site <a href=\\"https://joelcancela.github.io\\">joelcancela.github.io</a> ne saurait être tenu responsable des erreurs typographiques ou inexactitudes apparaissant sur le service, ou de quelques dommages subis résultant de son utilisation. L’utilisateur reste responsable de son équipement et de son utilisation, de même il supporte seul les coûts directs ou indirects suite à sa connexion à Internet.<br> Ce site utilise la technologie Javascript. Pour accéder à l\'ensemble des fonctionnalités de <a href=\\"https://joelcancela.github.io\\">joelcancela.github.io</a>, l’utilisateur s’engage à utiliser un matériel récent, ne contenant pas de virus et avec les mises à jour faites de son navigateur. L’utilisateur dégage la responsabilité de <a href=\\"https://joelcancela.github.io\\">joelcancela.github.io</a> pour tout préjudice qu’il pourrait subir ou faire subir, directement ou indirectement, du fait de l\'utilisation des services proposés. Seule la responsabilité de l’utilisateur est engagée par l’utilisation du service proposé et celui-ci dégage expressément le site et son propriétaire de toute responsabilité vis à vis de tiers.","protectedDomains":"Espaces protégés","protectedDomainsText":"Les mentions ci-dessus couvrent l\'ensemble du site <a href=\\"https://joelcancela.github.io\\">joelcancela.github.io</a>.","legalExtracts":"Extraits légaux","copyrightTitle":"Droit d\'auteur en France (Copyright©) :"}}');

/***/ }),

/***/ 1826:
/*!*********************************************!*\
  !*** ./src/assets/portfolio/portfolio.json ***!
  \*********************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"MFS 2020 UI Widget for VFRMap","path":"https://raw.githubusercontent.com/joelcancela/MFS2020_VFRMap_UI_Widget/master/_doc/Ingame.jpg","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Microsoft Flight Simulator 2020 SDK, HTML, CSS, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Mars 2021 - Mars 2022<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div> <p>Découvrant la simulation aérienne sur Microsoft Flight Simulator 2020, j\'ai voulu contribuer à la communauté en développant un widget dans le jeu qui permet d\'afficher la carte en temps réelle créée par le plugin <a href=\\"https://www.msfsaddons.org/freeware/plugin-vfrmap\\">VFRMap</a>. Ainsi les joueurs n\'ont pas besoin de lancer leur navigateur sur un autre écran pour avoir la carte.</p> <a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/MFS2020_VFRMap_UI_Widget\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a>&nbsp;<a class=\\"btn btn-danger\\"href=\\"https://flightsim.to/file/9424/mfs-2020-ui-widget-for-vfrmap\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Page Flightsim.to</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"> <img class=\\"img-thumbnail\\" src=\\"https://raw.githubusercontent.com/joelcancela/MFS2020_VFRMap_UI_Widget/master/_doc/Ingame.jpg\\"onclick=\\"window.open(this.src)\\"alt=\\"MFS2020_VFRMap_UI_Widget\\"></div></div>"},{"name":"PokéTCGSky","path":"PokeTCGSky","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Angular 13, HTML, CSS, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Janvier 2022 - Février 2022<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div> <p> Projet rapide pour découvrir les évolutions de Bootstrap et afficher ma collection de cartes Pokémon avec des filtres. </p><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/PokeTCGSky\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a>&nbsp;<a class=\\"btn btn-danger\\"href=\\"https://joelcancela.github.io/PokeTCGSky/\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Visiter</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"> <img class=\\"img-thumbnail\\" src=\\"assets/portfolio/PokeTCGSky/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"PokéTCGSky\\"></div></div>"},{"name":"GoDex","path":"GoDex","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: React, React Redux, Bootstrap 5<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Mai 2019 - Février 2020<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div> <p> Après avoir assisté à une conférence React au RivieraDev, j\'ai eu envie d\'expérimenter ce framework web et ainsi pouvoir le comparer avec Angular que j\'ai beaucoup utilisé. De plus, je suis un joueur de Pokémon Go ayant pour objectif d\'obtenir tous les pokémons disponibles. L\'idée de projet support était donc toute trouvée, un Pokédex permettant de lister les pokémons qu\'il me reste à obtenir. <br> Avec ce projet, j\'ai pu expérimenter les concepts de React (la gestion de l\'état et des props), ainsi que Redux et les nouveautés du framework (imports en lazy-loading). </p> <a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/GoDex\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a>&nbsp;<a class=\\"btn btn-danger\\"href=\\"https://joelcancela.github.io/GoDex\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Visiter</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"> <img class=\\"img-thumbnail\\" src=\\"assets/portfolio/GoDex/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"GoDex\\"></div></div>"},{"name":"Invent0ry","path":"Invent0ry","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: C#, WPF<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Août 2018 - Avril 2019<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>Je possède beaucoup d\'hardware et de câbles, le fait de les ranger ne suffit pas à les retrouver facilement. J\'ai donc eu l\'idée de créer une application simple me permettant de faire un inventaire et de pouvoir le tenir à jour. </p><span>Fonctionnalités :</span><ul><li>Ajout, édition, suppression d\'items</li><li>Gestion des emprunts</li><li>Tri par nom, quantité et autres critères</li><li>Lecture d\'images \\"mémos\\"</li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/Invent0ry\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div class=\\"row\\"><div class=\\"col-md-4\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/Invent0ry/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Invent0ry main screen\\"></div><div class=\\"col-md-4\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/Invent0ry/img/2.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Invent0ry memos\\"></div><div class=\\"col-md-4\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/Invent0ry/img/3.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Invent0ry edit item screen\\"></div></div>"},{"name":"Fooderoux","path":"S9_Fooderoux","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Vue.js, Vuetify, Node, Express, MongoDB<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Janvier - Mars 2019<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz & Nikita Rousseau pour le <b>backend</b>,&nbsp;Guillaume Casagrande & Pierre Bonny pour le <b>frontend</b><hr><div><p>Cette application est une application web full-stack sur le thème des aliments et de leurs caractéristiques (dans la lignée des sites comme <a href=\\"https://fr.openfoodfacts.org/\\">OpenFoodFacts</a>).<br></p>Fonctionnalités : <ul><li>Recherche, tri et filtrage d\'aliments selon des critères</li><li>Détails d\'un aliment avec ses ingrédients et son prix dans plusieurs magasins</li><li>Possiblité de comparer des aliments</li><li>Possiblité de créer des recettes, de les commenter et d\'avoir son prix moyen</li><li>Affichage des magasins sur une carte</li></ul><br><p>Mon travail sur ce projet a été de définir les API sur le backend, de définir un modèle de données cohérent depuis une base de données NoSQL (qui est un dump de celle d\'OpenFoodFacts), d\'effectuer la connexion à cette base de données et enfin de modulariser ce back-end. </p><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S9_SS-CS_Fooderoux\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code sur GitHub</a></div>"},{"name":"BlablaMove","path":"S9_BlablaMove","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Java, Spring Boot, Angular 6, Nginx, Docker, InfluxDB, Kafka & Google Cloud Platform<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Septembre 2018 - Février 2019<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Nikita Rousseau & Nassim Bounouas<hr><div><p>BlablaMove est une application qui permet de déménager à faible coût en utilisant l\'espace disponible d\'autres personnes pour transporter meubles et autres biens.<br>Notre groupe devait se concentrer sur une partie <i>Monitoring</i>&nbsp;, aussi bien métier, avec un suivi des transactions, des incidents, etc., que système avec un système de <i>heartbeats</i>&nbsp;afin que l\'administrateur système soit informé en temps réel de l\'état de santé de l\'infrastructure.<br>Nous avions les défis suivants à réaliser : </p><ul><li>Créer un dashboard approprié</li><li>Faire en sorte que l\'application passe à l\'échelle la plus haute possible (cible 400k utilisateurs) </li><li>Mesurer le temps perçu utilisateur et le contenir</li><li>Gérer le zonage, scénario:&nbsp;l\'Angleterre déménage en Juillet, le reste de l\'Europe en Août</li></ul><p>Mon travail s\'est principalement porté sur l\'implémentation du dashboard, du site public renseignant le statut de l\'application et sur l\'implémentation du back-end persistant les événements. </p></div><a class=\\"btn btn-danger\\"href=\\"https://github.com/joelcancela/S9_AL_BlablaMove_TeamC\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a><hr><div id=\\"blablamoveCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#blablamoveCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#blablamoveCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#blablamoveCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#blablamoveCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#blablamoveCarousel\\"data-slide-to=\\"4\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S9_BlablaMove/img/1.png\\"alt=\\"Public status front-end\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Front-end \\"public status\\"</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S9_BlablaMove/img/2.png\\"alt=\\"Admin dashboard\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Dashboard admin</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S9_BlablaMove/img/3.png\\"alt=\\"Marketing dashboard map\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Dashboard marketing - carte des villes les plus actives</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S9_BlablaMove/img/4.png\\"alt=\\"Marketing dashboard created routes\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Dashboard marketing - routes créées</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S9_BlablaMove/img/5.png\\"alt=\\"Diagramme de déploiement\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Diagramme de déploiement</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#blablamoveCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#blablamoveCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"ArduinoML","path":"S9_ArduinoML","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: MPS, C<br><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Matériel utilisé:&nbsp;Arduino Uno<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Janvier - Mars 2019<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Nikita Rousseau & Nassim Bounouas<hr><div><p>Ce projet consistait en l\'implémentation d\'un DSL afin de générer du code compatible Arduino à partir d\'une syntaxe décrivant des machines à états. Nous avions le choix entre un DSL interne et un DSL externe, j\'ai choisi MPS comme DSL externe.<br>Fonctionnalités: </p><ul><li>Gestion des entrées (analogiques ou numériques) et sorties</li><li>Gestion de modes (qui sont des méta-états)</li><li>Possiblité d\'effectuer un signal sonore à l\'entrée d\'un état</li><li>Possibité de tracer un graphe dans le temps des valeurs d\'une entrée (grâce à un programme Python supplémentaire)</li></ul></div><a class=\\"btn btn-danger\\"href=\\"https://github.com/joelcancela/S9_DSL_ArduinoML_MPS\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a><hr>Exemple d\'une machine à états avec MPS:<div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S9_ArduinoML/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Exemple d\'une machine à états avec MPS\\"></div></div>"},{"name":"Intégration d\'une IA conversationnelle pour Lathe Safety Simulator","path":"LatheSafetySimulator","type":"pro","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: C#, Unity, VRTK, Cognigy.AI<br><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Matériel utilisé:&nbsp;SteamVR<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Août 2018<br><i class=\\"fa fa-fw fa-map-marker\\"></i>&nbsp;I.S.R.C. - Ulster University, Derry/Londonderry, Irlande du Nord<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>Après avoir terminé mon projet sur la galerie d\'art, je suis passé sur ce projet dans le but d\'intégrer la même IA conversationnelle (Cognigy.AI) que dans le projet précédent.<br><br>Lathe Safety Simulator est un jeu permettant d\'apprendre à utiliser une tour à bois industrielle. Le jeu a été terminé en 2017 mais il est toujours sujet à améliorations. Lorsqu\'on lance le jeu, un robot \\"HoloTutor5000\\" vient se présenter, et donner des explications sur l\'utilisation des contrôles.<br><br>Le but de l\'intégration de l\'IA était de pouvoir rendre ce tutoriel plus interactif, comme par exemple, demander le prénom de l\'utilisateur ou encore parler de la pluie et du beau temps grâce à une fonctionnalité qui se nomme \\"Small-talk\\" fournie par Cognigy.AI.<br><br>Ce jeu a été présenté à la 12e édition de l\'European Conference on Games Based Learning et a terminé finaliste. </p><a class=\\"btn btn-info\\"href=\\"https://store.steampowered.com/app/644660/Lathe_Safety_Simulator\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le jeu sur Steam</a>&nbsp;<a class=\\"btn btn-info\\"href=\\"https://www.youtube.com/channel/UC1gclprnb78Dlg67GvOM0gA/videos\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir la chaine Youtube du projet</a></div><hr><div class=\\"row\\"><div class=\\"col-md-6\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/LatheSafetySimulator/img/0.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Lathe Safety Simulator tutorial\\"></div><div class=\\"col-md-6\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/LatheSafetySimulator/img/1.JPG\\"onclick=\\"window.open(this.src)\\"alt=\\"ECGBL Diploma\\"></div></div>"},{"name":"Galerie d\'art en realité virtuelle","path":"VRArtGallery","type":"pro","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: C#, Unity, VRTK, Cognigy.AI<br><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Matériel utilisé:&nbsp;SteamVR, Oculus Rift, Oculus Go<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Juin - Août 2018<br><i class=\\"fa fa-fw fa-map-marker\\"></i>&nbsp;I.S.R.C. - Ulster University, Derry/Londonderry, Irlande du Nord<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>Durant mon stage à Derry, je devais développer une application devant représenter une galerie d\'art en réalité virtuelle.<br><br>Cette application visait à permettre aux personnes atteintes d\'handicaps (notamment celles ne pouvant pas ou peu se déplacer) de visiter des galeries ou musées d\'art avec des oeuvres représentées dans des dimensions proches de la réalité en réalité virtuelle. De plus, cela permet à des personnes qui vivent dans des pays lointains de pouvoir apprécier des peintures sans voyager.<br><br>Ce projet devait être utilisable par n\'importe qui ayant un casque VR et deux manettes.<br>La galerie devait pouvoir utiliser des images interchangeables fournies par l\'utilisateur, et de configurer la galerie grâce à un fichier de configuration JSON.<br><br>Les autres contraintes se portaient sur le déplacement de l\'utilisateur à travers la galerie, il devait pouvoir se déplacer : </p><ul><li>avec le touch-pad d\'une des manettes.</li><li>en se téléportant vers des points de téléportation prédéfinis en face des tableaux (sous forme de halos). </li><li>avec la voix, en parlant à une IA conversationnelle (Cognigy.AI).</li></ul></div><hr><div id=\\"vrgalleryCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#vrgalleryCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#vrgalleryCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#vrgalleryCarousel\\"data-slide-to=\\"2\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/VRArtGallery/img/0.png\\"alt=\\"Main Gallery Scene\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Main Gallery Scene</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/VRArtGallery/img/1.png\\"alt=\\"Painting example\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Painting example</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/VRArtGallery/img/2.png\\"alt=\\"Teleportation point\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Teleportation point</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#vrgalleryCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#vrgalleryCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"Extension VSCode pour support syntaxique des fichiers .cfg","path":"VSCodeCFGExtension","type":"personal","html":"<i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Juin 2018<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Nassim Bounouas, Joël Cancela Vaz<hr><div><p>Étant un fervent utilisateur de Visual Studio Code et un grand joueur de jeux vidéos, il m\'arrive de configurer les paramètres de certains jeux en modifiant leurs fichiers de configuration.<br><br>Ils se trouvent le plus souvent sous forme de fichiers .cfg avec une syntaxe assez normalisée avec des mots-clés comme \\"bind\\", \\"uset\\" ou encore \\"exec\\".<br><br>Il n\'existait pas d\'extension pour Visual Studio Code permettant de faire du sur-lignage syntaxique pour ces fichiers afin de les rendre plus lisibles, j\'ai donc décidé d\'en créer une. </p><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/VSCode-cfg-support\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a>&nbsp;<a class=\\"btn btn-danger\\"href=\\"https://marketplace.visualstudio.com/items?itemName=joelcancela.cfg-games-support\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir la page de l\'extension</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/VSCodeCFGExtension/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\".cfg Syntax Highlighting\\"></div></div>"},{"name":"PNSInnov: Pilot","path":"S8_PNSInnov_Pilot","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Jersey (JAX-RS), JSF, Drools (Moteur de règles)<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Mai - Juin 2018<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Nassim Bounouas (Product Owner), Loïc Gardaire, Johann Mortara, Joël Cancela Vaz<hr><div><p>Ce projet s\'est déroulé pendant les mois de Mai et Juin 2018, dans le cadre des projets innovations.<br><br>Nous devions trouver un sujet innovant et le développer pendant ces deux mois, Nassim a pitché un sujet concernant le partage sécurisé de fichiers entre plusieurs plate-formes (PC, téléphone et autres).<br>Le sujet initial a dérivé et est devenu Pilot:<br><br>Pilot est une solution qui permet de gérer un espace de stockage en ligne. Notre solution se greffe sur différents espaces de stockage en ligne déjà existants. Elle est innovante dans la mesure où elle offre à l’utilisateur la possibilité de ranger automatiquement ses fichiers en fonction de règles établies et de les chiffrer s’il le désire.<br></p><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S8_MP_PNSInnov_Pilot\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div id=\\"pilotCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#pilotCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#pilotCarousel\\"data-slide-to=\\"1\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"https://raw.githubusercontent.com/joelcancela/S8_MP_PNSInnov_Pilot/master/img/GDrive.png\\"alt=\\"Pilot File Manager\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Pilot File Manager</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"https://raw.githubusercontent.com/joelcancela/S8_MP_PNSInnov_Pilot/master/img/different-drives.png\\"alt=\\"Pilot Welcome Screen\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran d\'acceuil Pilot</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#pilotCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#pilotCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"PolyEscape","path":"S7_PolyEscape","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Jersey (JAX-RS), AngularJS<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Janvier 2018<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Doryan Bonifassi, Nikita Rousseau, Jérémy Lara, Joël Cancela Vaz<hr><div><p>Ce projet s\'est déroulé pendant le mois de Janvier 2018, le sujet portait sur le développement d\'une application permettant de créer des escape games.<br>Nous avions deux axes orientés Architecture Logicielle sur lesquels notre projet devait s\'appuyer :</p><ul><li>Extensibilité & Interopérabilité (Appeler et être appelé par des services externes)</li><li>Usine Logicielle & Armée de clones (Création de plugins)</li></ul>Ce projet est composé de deux parties :<ul><li>Une API REST codée avec Jersey (JAX-RS) qui interagit avec des services externes.</li><li>Une interface web codée en AngularJS qui sert seulement à démontrer que notre API est utilisable. </li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S7_MP_PolyEscape\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div id=\\"polyEscapeCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"4\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"5\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"6\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"7\\"></li><li data-target=\\"#polyEscapeCarousel\\"data-slide-to=\\"8\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/1.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/2.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/3.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/4.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/5.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/6.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/7.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/8.png\\"alt=\\"PolyEscape\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S7_PolyEscape/img/9.png\\"alt=\\"PolyEscape\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#polyEscapeCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#polyEscapeCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"SteamAchievementCompletionist","path":"SAC","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: HTML5/CSS3, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Décembre 2017 - Février 2018<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>Étant un grand joueur de jeux vidéos notamment sur PC avec Steam, je voulais avoir une vue simple de l\'achèvement de mes jeux, jeu par jeu. J\'ai donc codé ce petit site web basé sur l\'API Steam pour me fournir les statistiques que je désirais. <br>Nombre de succès, moyenne de pourcentage d\'achèvement, jeux terminés, etc. </p><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/SteamAchievementCompletionist\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div id=\\"SACCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#SACCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#SACCarousel\\"data-slide-to=\\"1\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/SAC/img/2.png\\"alt=\\"SAC welcome screen\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/SAC/img/1.png\\"alt=\\"SAC\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#SACCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#SACCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"Yu-Gi-Oh_Sky.js","path":"Yu-Gi-Oh_Sky.js","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: HTML5/CSS3, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Juillet 2017 - Février 2018<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>Étant un collectionneur et un joueur de cartes Yu-Gi-Oh!, je voulais pouvoir afficher mes cartes et pouvoir les retrouver facilement selon certains critères. J\'avais déjà fait le listing de toutes mes cartes dans une base de données MySQL. Il me suffisait de trouver une API (<a href=\\"http://docs.yugiohprices.apiary.io/#\\"target=\\"_blank\\"rel=\\"noreferrer\\">Yu-Gi-Oh! Prices</a>) pour retrouver les informations des cartes et les coupler avec le listing. Ce script lit un JSON bien défini (ma base de données en l\'occurence) et s\'occupe d\'afficher de manière pratique toutes mes cartes. </p><strong>Fonctionnalités:</strong><ul><li>Recherche par nom (anglais et français) ou description (anglaise seulement)</li><li>Tri par nom, type de carte, ATK, DEF, niveau, quantité possédée</li><li>Filtrage par type de carte, type de monstre, famille, ATK, DEF, niveau, quantité possédée et propriété </li><li>Consulter la description d\'une carte en français</li><li>Voir les cartes liées à une carte</li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/Yu-Gi-Oh_Sky.js\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/Yu-Gi-Oh_Sky.js/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Yu-Gi-Oh_Sky.js\\"></div></div>"},{"name":"ToBeOrToHave","path":"S6_ToBeOrToHave","type":"school","html":"<div class=\\"row projectLogo\\"><div class=\\"col-lg-1 col-md-1 col-sm-3 col-xs-3\\"><img class=\\"modal-logo\\" src=\\"assets/portfolio/S6_ToBeOrToHave/img/5.jpg\\"onclick=\\"window.open(this.src)\\"alt=\\"ToBeOrToHave\\"></div></div><br><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Android, JavaFX<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Février - Mai 2017 (SI3 - S6 Fil Rouge IHM)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz & Nassim Bounouas<hr><div><p>Ce projet a été réalisé dans le cadre de la matière \\"IHM\\" en SI3. Le projet était un fil rouge et portait sur le développement d\'une application pour une enseigne de magasin, d\'abord une application pour bornes de magasin codée en JavaFX puis une application pour un client de l\'enseigne sur Android. </p><hr><h3>Application JavaFX</h3><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S6_IHM_ToBeOrToHave_JavaFX/blob/master/enseigne/README.md\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Cahier des charges</a>&nbsp;<a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S6_IHM_ToBeOrToHave_JavaFX/\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a><br><strong>Fonctionnalités:</strong><ul><li>Carrousel de produits à l\'accueil</li><li>Catalogue de produits et détails</li><li>Intégration Google Maps pour la recherche de magasins</li></ul></div><br><div id=\\"ToBeOrToHaveJavaCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#ToBeOrToHaveJavaCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#ToBeOrToHaveJavaCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#ToBeOrToHaveJavaCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#ToBeOrToHaveJavaCarousel\\"data-slide-to=\\"3\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/1.png\\"alt=\\"ToBeOrToHave JavaFX\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/2.png\\"alt=\\"ToBeOrToHave JavaFX\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/3.png\\"alt=\\"ToBeOrToHave JavaFX\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/4.png\\"alt=\\"ToBeOrToHave JavaFX\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#ToBeOrToHaveJavaCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#ToBeOrToHaveJavaCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div><hr><div><h3>Application Android</h3><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S6_IHM_ToBeOrToHave_Android\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source et le cahier des charges</a><br><strong>Fonctionnalités:</strong><ul><li>Liste de courses personnelle</li><li>Recherche de magasins</li><li>Actualités Twitter</li><li>Catalogue de produits</li><li>Programme de fidélité</li><li>Création et utilisation de cartes cadeaux en QRCodes</li></ul></div><br><div id=\\"ToBeOrToHaveAndroidCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"4\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"5\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"6\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"7\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"8\\"></li><li data-target=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide-to=\\"9\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/6.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/7.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/8.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/9.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/10.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/11.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/12.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/13.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/14.jpg\\"alt=\\"ToBeOrToHave Android\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_ToBeOrToHave/img/15.jpg\\"alt=\\"ToBeOrToHave Android\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#ToBeOrToHaveAndroidCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"TCP/RMI PNSInnov Client & Server","path":"S6_TCP Client Server and RMI","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;Java<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Avril - Mai 2017 (SI3 - S6)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz & Nassim Bounouas<hr><div><p>Dans le cadre de la matière \\"Réseau: Configuration & Programmation\\" en SI3, nous devions créer en binôme un client et un serveur communiquant via le protocole TCP puis RMI.<br>Ce serveur devait pouvoir créer et lister des projets PNSInnov.<br>Chaque binôme devait établir son protocole puis transmettre son serveur à un autre binôme pour que celui-ci crée le client associé.<br></p><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S6_RCP_TCP-RMI_Client_Server\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source de notre project</a>&nbsp;<a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S6_RCP_TCP_Client_For_JT\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source du client pour le serveur d\'un autre binôme</a></div><hr><div id=\\"rmiCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#rmiCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#rmiCarousel\\"data-slide-to=\\"1\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_TCP%20Client%20Server%20and%20RMI/img/1.png\\"alt=\\"TCPClientServerRMI\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">RMI Client CLI</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_TCP%20Client%20Server%20and%20RMI/img/2.png\\"alt=\\"TCPClientServerRMI\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">RMI Server CLI</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#rmiCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#rmiCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"Projet DeViNT: LiveYourLife","path":"S6_LiveYourLife DeViNT","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;JavaFX<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Février - Juin 2017 (SI3 - S6 Projet de semestre)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Antoine Dezarnaud, Jeremy Junac & Elliot Kauffmann (équipe Coconut)<hr><div><p>Les projets DeViNT (Déficients Visuels et Nouvelles Technologies) font partie du cursus de la première année du cycle d\'ingénieur.<br>Ils permettent de découvrir la problématique du handicap visuel, de rencontrer un public utilisateur déficient visuel et de mener un projet logiciel à terme.<br><br>Pour ce projet, mon équipe et moi voulions vraiment faire un logiciel utile et pas seulement un autre jeu de plus.<br><br>LiveYourLife propose des scénarios de la vie de tous les jours à accomplir avec succès, tels que se laver, préparer un repas ou encore effectuer un trajet piéton. Des actions sont proposées au joueur, ainsi que des indications pour accomplir sa tâche.<br>L\'objectif est d\'apprendre ces routines ainsi que de sensibiliser aux risques qui peuvent être présents.<br>Le joueur peut choisir de réaliser une journée-type intégrale ou un scénario en particulier.<br></p><strong>Mini-Jeux proposés:</strong><ul><li>Se brosser les dents</li><li>Habillement</li><li>Traverser la route</li><li>Faire un trajet en bus</li><li>Se doucher</li><li>Se laver les mains</li></ul></div><hr><div id=\\"LiveYourLifeCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#LiveYourLifeCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#LiveYourLifeCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#LiveYourLifeCarousel\\"data-slide-to=\\"2\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_LiveYourLife%20DeViNT/img/1.png\\"alt=\\"Live Your Life Menu\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_LiveYourLife%20DeViNT/img/2.png\\"alt=\\"Live Your Life S\'habiller\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S6_LiveYourLife%20DeViNT/img/3.png\\"alt=\\"Live Your Life Faire un trajet en bus\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#LiveYourLifeCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#LiveYourLifeCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"Chat Angular2","path":"S6_Chat Angular2","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: HTML5/CSS3, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Juin 2017 (SI3 - S6 Projet de semaine)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Fabien Durando, Marc Jourdes, Guillaume André<hr><div><p>Enfin d\'année de SI3, nous avions un projet de semaine à réaliser, le sujet était le suivant:<br>Réaliser un chat avec Angular2 (Framework non vu en cours).<br><br>Il y avait deux phases au projet:une partie MVP et une partie extensions. </p><br><strong>Fonctionnalités implémentées:</strong><ul><li>MVP <ul><li>Envoi de messages</li><li>Création, changement et suppression de channels</li><li>Affichage de l\'historique des messages pour un channel</li></ul></li><li>Extensions <ul><li>Intégration des images dans le chat</li><li>Intégration des émoticones</li><li>Possiblité de pouvoir ignorer les messages d\'un utilisateur</li><li>Envoi de messages privés</li><li>Intégration d\'une partie identification et possibilité de changer de pseudonyme </li><li>Responsive Design</li><li>Intégration des miniatures Youtube, Twitter et Instagram</li><li>Ajouts de commandes: /ia, /meteo, /trad, /schedule</li></ul></li></ul><strong>Note:&nbsp;</strong>La capture d\'écran montre seulement la structure du chat car l\'API support du projet a été supprimée. <a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S6_WP_H_Chat_Angular2\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S6_Chat%20Angular2/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Chat Angular2\\"></div></div>"},{"name":"Island Explorer Bot","path":"S5_Island Explorer","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;Java<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Novembre 2016 - Mars 2017 (SI3 - S5 Projet de semestre)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Nassim Bounouas, Nikita Rousseau & Florian Orlandini (Team RUN:CCCP)<hr><div><p>Durant tout le long de l\'année SI3, nous avons eu un projet fil rouge dans le cadre de lamatière \\"Qualité et Génie Logiciel\\", ce projet consistait à coder un bot explorateur d\'île pour qu\'il puisse récolter des ressources et ainsi remplir des contrats.<br>L\'exploration se déroulait en deux phases:</p><ul><li><strong>Phase aérienne</strong>, il fallait se déplacer sur une carte et trouverl\'emplacement de l\'île, des criques sur lesquelles aborder l\'île et l\'emplacement du site d\'urgence. Si toutes ces conditions étaient remplies on pouvait atterrir et ainsi passerà la phase suivante.</li><li><strong>Phase terrestre</strong>, durant cette phase il fallait envoyer un nombre d\'hommes choisi par les développeurs pour explorer l\'île et récolter des ressources. Certains contrats prévoyaient des ressources manufacturés, il fallait donc prévoir la fabrication de celles-ci.</li></ul><p>Chaque semaine se déroulaient un championnat dans lequel tous les bots de chaque équipe concouraient afin de remplir le plus de contrats avec le moins de budget possible.</p><strong>Fonctionnalités:</strong><ul><li>Phase aérienne remplie</li><li>Réussi à remplir des contrats de ressources primaires</li><li>Prototype pour fabrication des contrats de ressources manufacturées</li></ul><a class=\\"btn btn-danger\\"href=\\"http://ace-design.github.io/island/\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Projet Island by Sebastien Mosser</a></div><hr><div id=\\"islandCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#islandCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#islandCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#islandCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#islandCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#islandCarousel\\"data-slide-to=\\"4\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Island%20Explorer/img/1.png\\"alt=\\"Island Explorer Bot\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Rapport d\'exploration</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Island%20Explorer/img/2.png\\"alt=\\"Island Explorer Bot\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Visualisation de l\'exploration</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Island%20Explorer/img/3.png\\"alt=\\"Island Explorer Bot\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Visualisation de l\'exploration</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Island%20Explorer/img/4.png\\"alt=\\"Island Explorer Bot\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Visualisation de l\'exploration</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Island%20Explorer/img/5.png\\"alt=\\"Island Explorer Bot\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Visualisation de l\'exploration</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#islandCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#islandCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"Drone Delivery (AmIDone)","path":"S5_Drone Delivery","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Java, HTML5/CSS3, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Janvier 2017 (SI3 - S5 Projet de semaine)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Alexandre Hiltcher, Jeremy Junac, Pierre Rainero<hr><div><p>Ce projet s\'est déroulé durant une semaine en Janvier 2017, le sujet reprend celui d\'un du <a href=\\"https://hashcode.withgoogle.com/2016/tasks/hashcode2016_qualification_task.pdf\\"target=\\"_blank\\"rel=\\"noreferrer\\">Google HashCode 2016.</a><br>Le sujet portait sur la gestion de drones de livraison similaires à ceux d\'Amazon (d\'où le nom parodique AmIDone), il était divisé en 4 parties: </p><ul><li>Le scheduler, qui est chargé d\'orchestrer la série d\'actions qui seront exécutées par les drones (se déplacer, charger ou livrer) </li><li>La visualisation, qui permet à l\'opérateur ou au client de voir le statut de la livraison. </li><li>Le benchmark, qui permet au manager qualité de comparer les différentes stratégies de livraison et de produire des résultats pertinents à l\'aide de KPI. </li><li>Et enfin une partie extension sur l\'une des trois parties précédemment citées, nous avons choisi une extension sur la visualisation, au lieu de l\'affichage console, afin de rendre l\'affichage plus vivant et plus agréable sur une page web. </li></ul></div><hr><div id=\\"DroneDeliveryCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"4\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"5\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"6\\"></li><li data-target=\\"#DroneDeliveryCarousel\\"data-slide-to=\\"7\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/1.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/2.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/3.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/4.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/5.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/6.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/7.png\\"alt=\\"\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S5_Drone%20Delivery/img/8.png\\"alt=\\"\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#DroneDeliveryCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#DroneDeliveryCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"ARMv7 for Logisim","path":"S5_ARMv7 for Logisim","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;Java<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Novembre 2016 - Janvier 2017 (SI3 - S5)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>En début d\'année SI3, dans le cadre de la matière \\"Principe d\'Execution des Programmes\\" nous devions à l\'aide du logiciel Logisim, pouvoir reproduire le comportement d\'un processeur ARMv7 avec un banc de registres, un contrôleur, une ALU, une ROM et une RAM.<br><br>Ce processeur devait aussi être capable d\'éxecuter les instructions ARMv7 16bits, Logisim ne permet pas d\'importer directement un fichier texte contenant de l\'assembleur pour l\'exécuter, j\'ai donc créé ce petit logiciel en Java qui permet de créer deux fichiers .ini pour le format Logisim (v2.0 raw), un pour la ROM et un pour la RAM, à partir de deux fichiers textes un qui contient le programme en assembleur et l\'autre qui contient les variables stockées dans la RAM.<br><br>Nous avions aussi à disposition une carte FPGA afin de pouvoir émuler physiquement (grâce aux LEDS) les programmes que nous souhaitions. </p><strong>Fonctionnalités:</strong><ul><li>25 instructions implémentées <a href=\\"https://github.com/joelcancela/S5_PEP_ARMv7/blob/master/doc/instructions.md\\"target=\\"_blank\\"rel=\\"noreferrer\\">(voir ici)</a></li><li>Permet de produire un fichier d\'instructions pour la ROM</li><li>Permet de produire un fichier de variable pour la RAM</li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S5_PEP_ARMv7\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S5_ARMv7%20for%20Logisim/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"ARMv7 for Logisim\\"></div></div>"},{"name":"Interpréteur BrainF*ck","path":"S5_BrainFuck","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: Java, C<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Septembre 2016 - Janvier 2017 (SI3 - S5 Projet de semestre)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Tanguy Invernizzi, Pierre Rainero, Aghiles Dziri<hr><div><p>Ce projet était le premier projet en SI3 et s\'étendait sur tout le semestre.<br>Il s\'agissait de créer un interpréteur BrainF*ck (Mül93).<br>Le BrainF*ck est un langage de programmation exotique, inventé par Urban Müller en 1993.<br>Il est composé de huit instructions, utilise un tableau de 30 000 cases, toutes initialisées à 0 et chacune prenant des valeurs entières écrites sur 8 bits.<br>Les huit instructions sont les suivantes :<br></p><ul><li><strong>&gt; ou RIGHT</strong>&nbsp;incrémente le pointeur.</li><li><strong>&lt; ou LEFT</strong>&nbsp;décrémente le pointeur.</li><li><strong>+ ou INCR</strong>&nbsp;incrémente l\'octet du tableau sur lequel est positionné le pointeur (l\'octet pointé).</li><li><strong>- ou DECR</strong>&nbsp;décrémente l\'octet pointé.</li><li><strong>. ou OUT</strong>&nbsp;sortie de l\'octet pointé (valeur ASCII).</li><li><strong>, ou IN</strong>&nbsp;entrée d\'un octet dans le tableau à l\'endroit où est positionné le pointeur (valeur ASCII).</li><li><strong>[ ou JUMP</strong>&nbsp;saute à l\'instruction après le ] correspondant si l\'octet pointé est à 0.</li><li><strong>] ou BACK</strong>&nbsp;retourne à l\'instruction après le [ si l\'octet pointé est différent de 0.</li></ul><strong>Fonctionnalités:</strong>&nbsp;<ul><li>Peut lire des fichiers textes (.bf) et des images (.bmp)</li><li>Supporte la syntaxe courte (symboles) et longue (mots)</li><li>Peut réécrire un programme en syntaxe longue en syntaxe courte</li><li>Peut traduire un texte BrainF*ck en image BrainF*ck</li><li>Peut vérifier la syntaxe d\'un programme BrainF*ck</li><li>Affiche des métriques sur le programme exécuté</li><li>Peut créer une trace de l\'exécution pour aider au débogage</li><li>Supporte les commentaires et l\'indentation</li><li>Supporte les macros, fonctions et procédures</li><li>Peut générer l\'équivalent en programme C d\'un programme BrainF*ck</li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S5_SP_BrainFuck\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S5_BrainFuck/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"Interpréteur BrainF*ck\\"></div></div>"},{"name":"PassionInfo","path":"S4T_PassionInfo","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: PHP, HTML5/CSS3, Javascript<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Mars 2016 (IUT - S4T)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz et Fabien Lopez<hr><div><p>Dans le cadre du module \\"Systèmes d\'Informations\\" en IUT, nous devions créer un site marchand quelconque ayant un rapport avec l\'informatique. Nous avons donc opté pour un site de services informatiques en ligne (installation et configuration de PC, dépannage, maintenance, formation, etc.).</p><strong>Fonctionnalités:</strong><ul><li>Inscription et connexion</li><li>Panier et possibilité d\'achat en ligne via Paypal</li><li>Contact</li></ul></div><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S4T_PassionInfo/img/1.png\\"onclick=\\"window.open(this.src)\\"alt=\\"PassionInfo\\"></div></div>"},{"name":"CarryMe2","path":"S4T_CarryMe2","type":"school","html":"<div class=\\"row projectLogo\\"><div class=\\"col-lg-1 col-md-1 col-sm-3 col-xs-3\\"><img class=\\"modal-logo\\" src=\\"assets/portfolio/S4T_CarryMe2/img/logo.png\\"alt=\\"CarryMe2\\"></div></div><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;Java (Android)<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Mars 2016 (IUT - S4T)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Adrien Vray, Maxime Dolla et Joël Cancela Vaz<hr><div><p>Dans le cadre du module \\"Programmation mobile\\" en IUT, nous devions concevoir et développer une application sur Android afin de mettre en application tout ce que nous avions appris lors de ce module.</p><p>Il était question de créer une application mobile pour des élèves de CM2, afin qu\'ils puissent tester leurs connaissances.</p><p>Sur le large panel de compétences au programme de CM2, nous avons choisi de porter notre application sur un quiz sur l\'Union Européenne et du calcul mental.</p><p>Nous avons élaboré un cahier des charges et développé l\'application.</p><strong>Ressources:</strong><ul><li><a href=\\"assets/portfolio/S4T_CarryMe2/res/Cahier_des_charges_CarryMe2.pdf\\"target=\\"_blank\\"rel=\\"noreferrer\\">Cahier des charges</a></li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S4T_Android_CarryMe2\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a>&nbsp;<a class=\\"btn btn-danger\\"href=\\"https://drive.google.com/file/d/1yjsVdMSkJHI8lc59Qy79T__7ZoMyCYNI/view?usp=sharing\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-download\\"></i>&nbsp;Télécharger l\'application</a></div><hr><div id=\\"carryme2Carousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"4\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"5\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"6\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"7\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"8\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"9\\"></li><li data-target=\\"#carryme2Carousel\\"data-slide-to=\\"10\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/1.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/2.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/3.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/4.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/5.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/6.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/7.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/8.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/9.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/10.png\\"alt=\\"CarryMe2\\"></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\"src=\\"assets/portfolio/S4T_CarryMe2/img/11.png\\"alt=\\"CarryMe2\\"></div></div><a class=\\"carousel-control-prev\\"href=\\"#carryme2Carousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#carryme2Carousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"S.E.R.I.O.U.S.","path":"S3T_SERIOUS","type":"school","html":"<span>Syst&egrave;me ExpeRt pour Identifier les pOsitions des UtilisateurS</span><br><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;C#<br><i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Bibliothèque:&nbsp;Algorithme de Random Forest d\'<a href=\\"http://www.alglib.net/\\"target=\\"_blank\\"rel=\\"noreferrer\\">Alglib</a><br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;2015 - 2016 (IUT - S2T-S3T Projet de semestre)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<hr><div><p>Ce projet a eu lieu dans le cadre des projets tutorés en IUT, j\'y ai contribué en qualité de <strong>chef de projet</strong> et de <strong>développeur</strong>.</p><p>A l\'origine son utilisation était prévue uniquement pour jouer aux jeux vidéo, mais depuis la sortie de son SDK par Microsoft, sa célèbre caméra, la Kinect a été utilisée à d\'autres fins.</p><p>Son utilisation a notamment été détournée afin de permettre aux personnes à mobilité réduite d\'acquérir une certaine autonomie.</p><p>Notre projet n’était pas si ambitieux, mais il s’intéressait à une partie très importante de cette possible utilisation, la reconnaissance de positions.</p><p>Le but principal de notre projet était de développer une application utilisant un algorithme d\'apprentissage automatique (Random Forest ou Forêts aléatoires) capable de détecter les mouvements et en déduire la position dans laquelle l\'utilisateur se trouve (par exemple assis ou debout).</p><strong>Fonctionnalités:</strong><ul><li>Capable de reconnaître trois positions (bras gauche levé, bras droit levé, bras droit levé et jambe gauche levée) </li><li>Capture de positions</li><li>Création de jeux de données</li></ul><br><strong>Ressources:</strong><ul><li><a href=\\"assets/portfolio/S3T_SERIOUS/res/SERIOUS.pdf\\"target=\\"_blank\\"rel=\\"noreferrer\\">Slides de conception</a></li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S3T_SP_S.E.R.I.O.U.S.\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div id=\\"seriousCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#seriousCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#seriousCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#seriousCarousel\\"data-slide-to=\\"2\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SERIOUS/img/1.png\\"alt=\\"S.E.R.I.O.U.S.\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran d\'accueil</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SERIOUS/img/2.png\\"alt=\\"S.E.R.I.O.U.S.\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran de capture de position</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SERIOUS/img/3.png\\"alt=\\"S.E.R.I.O.U.S.\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran de reconnaissance de position</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#seriousCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#seriousCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"Smart K\'Fet","path":"S3T_SmartKfet","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;Java Swing<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Novembre - Décembre 2015 (IUT - S3T)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteurs:&nbsp;Joël Cancela Vaz, Fabien Lopez, Maxime Dolla, Marc Foucault<hr><div><p>Ce projet a été réalisé à l\'IUT dans le cadre de la matière \\"Méthodologie de la production d\'applications\\". Le sujet portait sur la création d\'une application tablette pour une cafétéria, notre axe de développement était sur la prise de commandes. </p><strong>Fonctionnalités:</strong><ul><li>Connexion</li><li>Panel Admin (Gestion des membres, produits et des stocks)</li><li>Prise de commandes</li><li>Paiement</li></ul><a class=\\"btn btn-info\\"href=\\"https://github.com/joelcancela/S3T_MPA_SmartKfet\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir le code source</a></div><hr><div id=\\"smartKFetCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"4\\"></li><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"5\\"></li><li data-target=\\"#smartKFetCarousel\\"data-slide-to=\\"6\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/1.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran de connexion</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/2.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran de commande</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/3.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Validation de la commande</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/4.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Gestion administrateur</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/5.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Gestion des utilisateurs</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/6.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Gestion des produits</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_SmartKfet/img/7.png\\"alt=\\"Smart K\'Fet\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Gestion des stocks</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#smartKFetCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#smartKFetCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"MyOwnAgenda","path":"S3T_MyOwnAgenda","type":"school","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langages/Frameworks: PHP, HTML5/CSS3<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Décembre 2015 - Janvier 2016 (IUT - S3T)<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Joël Cancela Vaz<hr><div><p>Ce projet a été réalisé à l\'IUT dans le cadre de la matière \\"Programmation Côté Serveur\\".<br>Le but de ce projet était d\'utiliser les connaissances fraîchement acquises en PHP à la fin du module.<br>Le sujet portait sur la création d\'un agenda multi-utilisateurs avec une base de données. </p><strong>Fonctionnalités:</strong><ul><li>Connexion/Inscription</li><li>Création d\'évènements</li></ul></div><hr><div id=\\"myOwnAgendaCarousel\\"class=\\"carousel slide\\"data-ride=\\"carousel\\"data-interval=\\"false\\"><ol class=\\"carousel-indicators\\"><li data-target=\\"#myOwnAgendaCarousel\\"data-slide-to=\\"0\\"class=\\"active\\"></li><li data-target=\\"#myOwnAgendaCarousel\\"data-slide-to=\\"1\\"></li><li data-target=\\"#myOwnAgendaCarousel\\"data-slide-to=\\"2\\"></li><li data-target=\\"#myOwnAgendaCarousel\\"data-slide-to=\\"3\\"></li><li data-target=\\"#myOwnAgendaCarousel\\"data-slide-to=\\"4\\"></li></ol><div class=\\"carousel-inner\\"><div class=\\"carousel-item active\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_MyOwnAgenda/img/1.png\\"alt=\\"MyOwnAgenda\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ecran de connexion</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_MyOwnAgenda/img/2.png\\"alt=\\"MyOwnAgenda\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Inscription</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_MyOwnAgenda/img/3.png\\"alt=\\"MyOwnAgenda\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Agenda</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_MyOwnAgenda/img/4.png\\"alt=\\"MyOwnAgenda\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Ajout d\'événement</h3></div></div><div class=\\"carousel-item\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/S3T_MyOwnAgenda/img/5.png\\"alt=\\"MyOwnAgenda\\"><div class=\\"carousel-caption\\"><h3 class=\\"carousel-legend\\">Détails d\'un événement</h3></div></div></div><a class=\\"carousel-control-prev\\"href=\\"#myOwnAgendaCarousel\\"data-slide=\\"prev\\"><span class=\\"carousel-control-prev-icon\\"></span></a><a class=\\"carousel-control-next\\"href=\\"#myOwnAgendaCarousel\\"data-slide=\\"next\\"><span class=\\"carousel-control-next-icon\\"></span></a></div>"},{"name":"GranitTG (Total Gestion)","path":"GranitTG","type":"pro","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;C#<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;Août - Septembre 2014<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<br><i class=\\"fa fa-fw fa-users\\"></i>&nbsp;Auteur:&nbsp;Romain Thomas (ROMSOFT Services)<hr><div><p>GranitTG appartient à ROMSOFT Services, dirigé par M. Romain Thomas.<br><br>GranitTG (Total Gestion) est un progiciel de devis, facturation, 3D adapté à la profession des granitiers dans le Tarn.<br><br>Le logiciel est codé en C#, utilise Entity Framework, SQL Server et un moteur 3D innovant sous DirectX.<br><br>J\'ai assisté dans la création de formulaires en C# tel que les devis, factures et fiches atelier. </p><br><a class=\\"btn btn-info\\"href=\\"https://www.linkedin.com/in/rthomas06/\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;LinkedIn de Romain Thomas</a></div>"},{"name":"Traduction française de Flashget 3.7","path":"Flashget_3.7_french_traduction","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Edition de ressources DLL<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;2011<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<hr><p>Flashget est un gestionnaire de téléchargements, il permet notamment de trier les téléchargements selon leurs types (images, vidéos, musiques), de les mettre en pause si nécessaire, etc.</p><p>Lorsque j\'ai commencé à utiliser ce logiciel, il était disponible dans seulement deux langues: anglais et chinois.</p><p>La version anglaise était d\'ailleurs incomplète, voire parfois fausse, alors je me suis lancé dans la traduction française du logiciel.</p><p>En utilisant un éditeur de ressources, j\'ai donc modifié les fichiers DLL de la version anglaise pour avoir ma version française.</p><a class=\\"btn btn-danger\\"href=\\"https://drive.google.com/file/d/1FYZUePmVE8nzOxEhvabl7J3TPIx1gE5N/view?usp=sharing\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-download\\"></i>&nbsp;Télécharger</a><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/Flashget_3.7_french_traduction/img/1.png\\"alt=\\"Traduction française de Flashget 3.7\\"></div></div>"},{"name":"Modding du Samsung Player One (S5230)","path":"Samsung_Player_One_S5230_Modding","type":"personal","html":"<i class=\\"fa fa-fw fa-cogs\\"></i>&nbsp;Langage:&nbsp;Flash<br><i class=\\"fa fa-fw fa-clock-o\\"></i>&nbsp;2011<br><i class=\\"fa fa-fw fa-check-square\\"></i>&nbsp;Terminé<hr><p>Le premier smartphone que j\'ai eu en ma possession était le Samsung Player One (GT-S5230), après un bon temps d\'utilisation j\'ai voulu le customiser un petit peu, car la personnalisation de ce téléphone était assez limitée (à part changer le font d\'écran et la police, on ne pouvait pas faire grand-chose).</p><p>C\'est alors que je suis tombé sur un site communautaire de développeurs et amateurs de téléphones Samsung, forum-sam.com (maintenant fermé).</p><p>À force de faire des modifications, j\'ai décidé de contribuer à cette communauté en testant les thèmes et lockscreens (écrans de verrouillage).</p><p>Puis j\'ai terminé par créer mes propres thèmes en Flash et à les présenter, j\'ai aussi fait un travail assez conséquent de rassemblement de patchs pour un firmware: le <b>MMGJK2</b>.</p><a class=\\"btn btn-info\\"href=\\"https://drive.google.com/drive/folders/1LT8KDczTNYbkJz8F1t7SOUzVACY0mGo4?usp=sharing\\"target=\\"_blank\\"rel=\\"noreferrer\\"><i class=\\"fa fa-arrow-circle-right\\"></i>&nbsp;Voir les ressources</a><hr><div class=\\"row\\"><div class=\\"col-md-12\\"><img class=\\"img-thumbnail\\" src=\\"assets/portfolio/Samsung_Player_One_S5230_Modding/img/1.png\\"alt=\\"Modding du S5230\\"></div></div>"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map