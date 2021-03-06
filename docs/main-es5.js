function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/employee-list/employee-list.component */
    "./src/app/pages/employee-list/employee-list.component.ts");
    /* harmony import */


    var _pages_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/employee-add/employee-add.component */
    "./src/app/pages/employee-add/employee-add.component.ts");
    /* harmony import */


    var _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/employee-detail/employee-detail.component */
    "./src/app/pages/employee-detail/employee-detail.component.ts");
    /* harmony import */


    var _authGuard___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authGuard  */
    "./src/app/authGuard .ts");

    var routes = [{
      path: "",
      component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: "employee",
      component: _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeListComponent"],
      canActivate: [_authGuard___WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: "add",
      component: _pages_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeAddComponent"],
      canActivate: [_authGuard___WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }, {
      path: "employee/:username",
      component: _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailComponent"],
      canActivate: [_authGuard___WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    }];

    var AppRoutingModule =
    /*#__PURE__*/
    function () {
      function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      }

      _createClass(AppRoutingModule, [{
        key: "checkLogged",
        value: function checkLogged() {}
      }]);

      return AppRoutingModule;
    }();

    AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _template_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./template/header/header.component */
    "./src/app/template/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent =
    /*#__PURE__*/
    _createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = "test-technical";
    });

    AppComponent.??fac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "router-outlet");
        }
      },
      directives: [_template_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-root",
          template: "<app-header></app-header><router-outlet></router-outlet> ",
          styles: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _template_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./template/header/header.component */
    "./src/app/template/header/header.component.ts");
    /* harmony import */


    var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/login/login.component */
    "./src/app/pages/login/login.component.ts");
    /* harmony import */


    var _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/employee-list/employee-list.component */
    "./src/app/pages/employee-list/employee-list.component.ts");
    /* harmony import */


    var _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/employee-detail/employee-detail.component */
    "./src/app/pages/employee-detail/employee-detail.component.ts");
    /* harmony import */


    var _pages_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/employee-add/employee-add.component */
    "./src/app/pages/employee-add/employee-add.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _authGuard___WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./authGuard  */
    "./src/app/authGuard .ts");

    var AppModule =
    /*#__PURE__*/
    _createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    });
    AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _authGuard___WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _template_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeListComponent"], _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeDetailComponent"], _pages_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeAddComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _template_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeListComponent"], _pages_employee_detail_employee_detail_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeDetailComponent"], _pages_employee_add_employee_add_component__WEBPACK_IMPORTED_MODULE_11__["EmployeeAddComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"]],
          providers: [_angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _authGuard___WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/authGuard .ts":
  /*!*******************************!*\
    !*** ./src/app/authGuard .ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, activatedRoute) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.activatedRoute = activatedRoute;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (AuthGuard.statusLogged) {
            return true;
          } else {
            alert("Sorry you must login");
            this.router.navigate(["/"]);
            return false;
          }
        }
      }], [{
        key: "setStatus",
        value: function setStatus(log) {
          AuthGuard.statusLogged = log;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.statusLogged = false;

    AuthGuard.??fac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    AuthGuard.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.??fac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/employee.ts":
  /*!*****************************!*\
    !*** ./src/app/employee.ts ***!
    \*****************************/

  /*! exports provided: employees */

  /***/
  function srcAppEmployeeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "employees", function () {
      return employees;
    });

    var employees = [];
    /***/
  },

  /***/
  "./src/app/pages/employee-add/employee-add.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/employee-add/employee-add.component.ts ***!
    \**************************************************************/

  /*! exports provided: EmployeeAddComponent */

  /***/
  function srcAppPagesEmployeeAddEmployeeAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeAddComponent", function () {
      return EmployeeAddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");

    var _c0 = function _c0() {
      return ["/employee"];
    };

    var EmployeeAddComponent =
    /*#__PURE__*/
    function () {
      function EmployeeAddComponent(router) {
        _classCallCheck(this, EmployeeAddComponent);

        this.router = router;
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          basicSalary: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          group: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
        this.maxDate = new Date();
      }

      _createClass(EmployeeAddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitAdd",
        value: function submitAdd() {
          var data = this.addForm.value;
          var dump = {
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            birthDate: data.birthDate,
            basicSalary: data.basicSalary,
            status: data.status,
            group: data.group,
            description: data.description
          };
          var result = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"].addEmployee(dump);

          if (result) {
            alert("Already Exist");
          } else {
            alert("Add Employee Done");
            this.router.navigateByUrl("/employee");
          }
        }
      }]);

      return EmployeeAddComponent;
    }();

    EmployeeAddComponent.??fac = function EmployeeAddComponent_Factory(t) {
      return new (t || EmployeeAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EmployeeAddComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: EmployeeAddComponent,
      selectors: [["app-employee-add"]],
      decls: 84,
      vars: 8,
      consts: [[1, "container", "py-3"], [1, "row"], [1, "w-100", "px-3", "d-flex", "justify-content-center"], [1, "p-md-5", "p-3", "col-md-6", "col-12", "form", 3, "formGroup", "ngSubmit"], [1, "mb-0", "pb-2", "text-center"], [1, "d-flex", "pb-2", "justify-content-between", "w-100", "py-2"], [1, "col-3", "px-0"], [1, "pl-3", "col-9", "pr-0"], ["type", "text", "name", "username", "formControlName", "username", "placeholder", "Username", 1, "w-100", "px-2"], [1, "d-flex", "pl-3", "col-9", "pr-0"], [1, "pl-0", "col-6"], ["type", "text", "name", "firstName", "formControlName", "firstName", "placeholder", "First name", 1, "w-100", "px-2"], [1, "pl-0", "col-6", "pr-0"], ["type", "text", "name", "lastName", "formControlName", "lastName", "placeholder", "Last name", 1, "w-100", "px-2"], ["type", "email", "name", "email", "formControlName", "email", "placeholder", "Email", 1, "w-100", "px-2"], ["matInput", "", "name", "birthDate", "formControlName", "birthDate", "placeholder", "Choose Date", 1, "w-100", "px-2", 3, "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["type", "number", "name", "basicSalary", "formControlName", "basicSalary", "placeholder", "Salary", 1, "w-100", "px-2"], ["type", "text", "name", "status", "formControlName", "status", "placeholder", "status", 1, "w-100", "px-2"], ["formControlName", "group", "name", "group", 1, "w-100", "px-2", "py-1"], ["value", "", "selected", "", "hidden", ""], ["value", "Group1"], ["value", "Group2"], ["value", "Group3"], ["value", "Group4"], ["value", "Group5"], ["value", "Group6"], ["value", "Group7"], ["value", "Group8"], ["value", "Group9"], ["value", "Group10"], ["matInput", "", "name", "description", "formControlName", "description", "placeholder", "Description", 1, "w-100", "px-2", 3, "matDatepicker"], ["description", ""], [1, "d-flex", "justify-content-between", "pt-3"], ["type", "button", 1, "btn", "btn-danger", 3, "routerLink"], ["type", "submit", 1, "btn", "btn-info"]],
      template: function EmployeeAddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function EmployeeAddComponent_Template_form_ngSubmit_3_listener() {
            return ctx.submitAdd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Birthday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](29, "mat-datepicker-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](30, "mat-datepicker", null, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34, "Salary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](36, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](38, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](39, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](41, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](44, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](45, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](46, "select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](48, "Choose Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](49, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](50, "Group1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](51, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](52, "Group2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](54, "Group3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](55, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](56, "Group4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](57, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](58, "Group5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](59, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](60, "Group6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](61, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](62, "Group7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](63, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](64, "Group8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](65, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](66, "Group9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](67, "option", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](68, "Group10");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](69, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](70, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](71, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](72, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](73, "input", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](74, "mat-datepicker-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](75, "mat-datepicker", null, 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](77, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](78, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](79, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](80, " Cancel ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](81, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](82, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](83, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](31);

          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("max", ctx.maxDate)("matDatepicker", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matDatepicker", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("for", _r16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c0));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerToggle"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_x"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlLWFkZC9lbXBsb3llZS1hZGQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-employee-add",
          templateUrl: "./employee-add.component.html",
          styleUrls: ["./employee-add.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/employee-detail/employee-detail.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/pages/employee-detail/employee-detail.component.ts ***!
    \********************************************************************/

  /*! exports provided: EmployeeDetailComponent */

  /***/
  function srcAppPagesEmployeeDetailEmployeeDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeDetailComponent", function () {
      return EmployeeDetailComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmployeeDetailComponent_option_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r19 = ctx.index;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate1"]("value", "Group", i_r19, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx_r17.employees.group == "Group" + i_r19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" Group", i_r19, " ");
      }
    }

    var _c0 = function _c0() {
      return [];
    };

    var _c1 = function _c1() {
      return ["/employee"];
    };

    var EmployeeDetailComponent =
    /*#__PURE__*/
    function () {
      function EmployeeDetailComponent(route) {
        _classCallCheck(this, EmployeeDetailComponent);

        this.route = route;
        this.maxDate = new Date();
      }

      _createClass(EmployeeDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var routeParams = this.route.snapshot.paramMap;
          var param = routeParams.get("username");
          this.employees = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].getDetailEmployee(param);
        }
      }, {
        key: "changeRP",
        value: function changeRP(data) {
          var result = "Rp. ";
          var angka = "";

          for (var i = data.toString().length - 1; i >= 0; i--) {
            angka = data.toString()[i] + angka;

            if (i % 3 == 0 && i != 0) {
              angka = "." + angka;
            }
          }

          result = result + angka + ",00";
          return result;
        }
      }]);

      return EmployeeDetailComponent;
    }();

    EmployeeDetailComponent.??fac = function EmployeeDetailComponent_Factory(t) {
      return new (t || EmployeeDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    EmployeeDetailComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: EmployeeDetailComponent,
      selectors: [["app-employee-detail"]],
      decls: 56,
      vars: 12,
      consts: [[1, "container", "py-3"], [1, "row"], [1, "w-100", "px-3", "d-flex", "justify-content-center"], [1, "p-md-5", "p-3", "col-md-6", "col-12", "form"], [1, "mb-0", "pb-2", "text-center"], [1, "d-flex", "pb-2", "justify-content-between", "w-100", "py-2"], [1, "col-3", "px-0"], [1, "pl-3", "col-9", "pr-0"], ["type", "text", "name", "username", "placeholder", "Username", "disabled", "", 1, "w-100", "px-2", 3, "value"], [1, "d-flex", "pl-3", "col-9", "pr-0"], [1, "pl-0", "col-6"], ["type", "text", "name", "firstName", "placeholder", "First name", "disabled", "", 1, "w-100", "px-2", 3, "value"], [1, "pl-0", "col-6", "pr-0"], ["type", "text", "name", "lastName", "placeholder", "Last name", "disabled", "", 1, "w-100", "px-2", 3, "value"], ["type", "text", "name", "email", "placeholder", "Email", "disabled", "", 1, "w-100", "px-2", 3, "value"], ["name", "birthDate", "placeholder", "Choose Date", "disabled", "", 1, "w-100", "px-2", 3, "value"], ["type", "text", "name", "basicSalary", "placeholder", "Salary", "disabled", "", 1, "w-100", "px-2", 3, "value"], ["type", "text", "name", "status", "placeholder", "Status", "disabled", "", 1, "w-100", "px-2", 3, "value"], ["name", "group", "disabled", "", 1, "w-100", "px-2", "py-1"], ["value", "", "hidden", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], ["type", "text", "name", "description", "placeholder", "Description", "disabled", "", 1, "w-100", "px-2", 3, "value"], [1, "d-flex", "justify-content-end", "pt-3"], ["type", "button", 1, "btn", "btn-success", 3, "routerLink"], [3, "selected", "value"]],
      template: function EmployeeDetailComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "h1", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Detail Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](18, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](21, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](23, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](25, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](26, "Birthday");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](28, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](29, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](31, "Salary");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](33, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](34, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](36, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](37, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](38, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](39, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](40, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](41, "Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](43, "select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](44, "option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](45, "Choose Group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](46, EmployeeDetailComponent_option_46_Template, 2, 3, "option", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](47, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](49, "Description");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](50, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](51, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](52, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](54, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](55, " OK ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.firstName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.lastName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.birthDate.toLocaleDateString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.changeRP(ctx.employees.basicSalary));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.status);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](10, _c0).constructor(10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.employees.description.toLocaleDateString());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](11, _c1));
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlLWRldGFpbC9lbXBsb3llZS1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-employee-detail",
          templateUrl: "./employee-detail.component.html",
          styleUrls: ["./employee-detail.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/employee-list/employee-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/employee-list/employee-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppPagesEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/employee.service */
    "./src/app/services/employee.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function EmployeeListComponent_option_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var e_r8 = ctx.$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", e_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("selected", ctx_r5.employees.limit == e_r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", e_r8, " ");
      }
    }

    var _c0 = function _c0(a1) {
      return ["/employee/", a1];
    };

    function EmployeeListComponent_tr_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "td", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "td", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](11, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var employee_r9 = ctx.$implicit;
        var i_r10 = ctx.index;

        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx_r6.employees.page * ctx_r6.employees.limit + i_r10 + 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](4, _c0, employee_r9.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", employee_r9.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](6, _c0, employee_r9.username));
      }
    }

    function EmployeeListComponent_div_36_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function EmployeeListComponent_div_36_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r14);

          var i_r12 = ctx.index;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r13.changePage(i_r12);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        var i_r12 = ctx.index;

        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", i_r12 == ctx_r7.employees.page ? "btn btn-dark" : "btn btn-secondary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", i_r12 + 1, " ");
      }
    }

    var _c1 = function _c1() {
      return ["/add"];
    };

    var _c2 = function _c2() {
      return [10, 20, 50, 100];
    };

    var _c3 = function _c3() {
      return [];
    };

    var EmployeeListComponent =
    /*#__PURE__*/
    function () {
      function EmployeeListComponent() {
        _classCallCheck(this, EmployeeListComponent);

        this.page = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].page;
        this.employees = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].getEmployee();
        this.search = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].search;
      }

      _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var dummyID = 121;

          for (var i = 1; i < dummyID; i++) {
            var data = {
              username: "dummy" + i,
              firstName: "dummy",
              lastName: "dummy",
              email: "dummy",
              birthDate: new Date(),
              basicSalary: 300000,
              status: "dummy",
              group: "Group7",
              description: new Date()
            };
            var result = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].addEmployee(data);
          }

          this.employees = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].getEmployee();
        }
      }, {
        key: "changeLimit",
        value: function changeLimit(limit) {
          src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].setLimit(limit);
          this.employees = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].getEmployee();
        }
      }, {
        key: "changeSearch",
        value: function changeSearch(data) {
          src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].setSearch(data);
          this.employees = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].getEmployee();
        }
      }, {
        key: "changePage",
        value: function changePage(page) {
          src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].setPage(page);
          this.employees = src_app_services_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"].getEmployee();
          console.log(this.employees);
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.??fac = function EmployeeListComponent_Factory(t) {
      return new (t || EmployeeListComponent)();
    };

    EmployeeListComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: EmployeeListComponent,
      selectors: [["app-employee-list"]],
      decls: 37,
      vars: 9,
      consts: [[1, "container", "py-3"], [1, "row"], [1, "w-100", "p-md-5", "p-3", "form"], [1, "text-center", "mb-0", "pb-3"], [1, "w-100"], [1, "btn", "btn-info", 3, "routerLink"], [1, "d-md-flex", "justify-content-between", "py-3"], [1, "d-flex"], [1, "pr-2"], ["name", "", 3, "change"], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "pt-md-0", "pt-3"], ["type", "text", "placeholder", "Username", 3, "value", "change"], [1, "w-100", "text-center", "table-emp"], [4, "ngFor", "ngForOf"], [1, "d-md-flex", "justify-content-md-between", "pt-3"], [1, "d-flex", "justify-content-center", "flex-wrap"], ["class", "px-1 pt-md-0 pt-2", 4, "ngFor", "ngForOf"], [3, "selected", "value"], [1, "cursor-pointer", 3, "routerLink"], [1, "d-flex", "justify-content-center", "py-2"], [1, "px-2"], [1, "btn", "btn-warning", 3, "routerLink"], [1, "btn", "btn-danger"], [1, "px-1", "pt-md-0", "pt-2"], [3, "ngClass", "click"]],
      template: function EmployeeListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Employee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, " Add Employee ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Show Limit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EmployeeListComponent_Template_select_change_14_listener($event) {
            return ctx.changeLimit($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](15, EmployeeListComponent_option_15_Template, 2, 3, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function EmployeeListComponent_Template_input_change_20_listener($event) {
            return ctx.changeSearch($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "table", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](22, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](28, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](29, "Action");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](30, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](31, EmployeeListComponent_tr_31_Template, 12, 8, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](32, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](33, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](36, EmployeeListComponent_div_36_Template, 3, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](6, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.search);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.employees.data[ctx.employees.page]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("Total Data : ", ctx.employees.total, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](8, _c3).constructor(ctx.employees.totalPage));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["??angular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-employee-list",
          templateUrl: "./employee-list.component.html",
          styleUrls: ["./employee-list.component.css"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPagesLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_authGuard___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/authGuard  */
    "./src/app/authGuard .ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](""),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("")
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submitLogin",
        value: function submitLogin() {
          var data = this.loginForm.value;

          if (data.username == "admin" && data.password == "admin") {
            src_app_authGuard___WEBPACK_IMPORTED_MODULE_2__["AuthGuard"].setStatus(true);
            this.router.navigateByUrl("/employee");
          } else {
            alert("Your username or password is wrong!");
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.??fac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    LoginComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 16,
      vars: 1,
      consts: [[1, "position-absolute", "w-100", "h-100", "d-flex", "justify-content-center", "align-items-center", "top-0"], [1, "col-md-3", "col-12"], [1, "p-md-5", "p-3", "text-center", "form", 3, "formGroup", "ngSubmit"], [1, "mb-0", "pb-2"], [1, "pb-2"], [1, "pb-3"], ["type", "text", "name", "username", "formControlName", "username"], ["type", "password", "name", "password", "formControlName", "password"], ["type", "submit", 1, "btn", "btn-success"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_2_listener() {
            return ctx.submitLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](6, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](8, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-login",
          templateUrl: "./login.component.html",
          styleUrls: ["./login.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/employee.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/employee.service.ts ***!
    \**********************************************/

  /*! exports provided: EmployeeService */

  /***/
  function srcAppServicesEmployeeServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeService", function () {
      return EmployeeService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../employee */
    "./src/app/employee.ts");

    var EmployeeService =
    /*#__PURE__*/
    function () {
      function EmployeeService() {
        _classCallCheck(this, EmployeeService);
      }

      _createClass(EmployeeService, null, [{
        key: "setSearch",
        value: function setSearch(data) {
          EmployeeService.search = data;
          EmployeeService.page = 0;
        }
      }, {
        key: "setLimit",
        value: function setLimit(data) {
          EmployeeService.limit = data;
          EmployeeService.page = 0;
        }
      }, {
        key: "setPage",
        value: function setPage(data) {
          EmployeeService.page = data;
        }
      }, {
        key: "getEmployee",
        value: function getEmployee() {
          var result = {};
          var data = [];
          var dataPerPage = [];
          var counter = 0;
          var counterPage = 0;

          _employee__WEBPACK_IMPORTED_MODULE_1__["employees"].filter(function (selected) {
            var inserted = false;

            if (selected.username.toLowerCase().includes(EmployeeService.search)) {
              counter++;
              dataPerPage.push(selected);
              inserted = true;
            }

            if (inserted && dataPerPage.length % EmployeeService.limit == 0 || selected == _employee__WEBPACK_IMPORTED_MODULE_1__["employees"][_employee__WEBPACK_IMPORTED_MODULE_1__["employees"].length - 1]) {
              counterPage++;
              data.push(dataPerPage);
              dataPerPage = [];
            }
          });

          result["data"] = data;
          result["page"] = EmployeeService.page;
          result["limit"] = EmployeeService.limit;
          result["total"] = counter;
          result["totalPage"] = counterPage;
          return result;
        }
      }, {
        key: "getDetailEmployee",
        value: function getDetailEmployee(username) {
          var result = null;

          _employee__WEBPACK_IMPORTED_MODULE_1__["employees"].find(function (data) {
            if (data.username === username) result = data;
          });

          return result;
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(data) {
          var exist = false;

          _employee__WEBPACK_IMPORTED_MODULE_1__["employees"].find(function (check) {
            if (check.username === data.username) {
              exist = true;
            }
          });

          if (!exist) {
            _employee__WEBPACK_IMPORTED_MODULE_1__["employees"].push(data);
          }

          return exist;
        }
      }, {
        key: "deleteEmployee",
        value: function deleteEmployee(username) {}
      }, {
        key: "editEmployee",
        value: function editEmployee(username) {
          var selected;

          _employee__WEBPACK_IMPORTED_MODULE_1__["employees"].find(function (data) {
            selected = data.username === username;
          });
        }
      }]);

      return EmployeeService;
    }();

    EmployeeService.search = "";
    EmployeeService.limit = 100;
    EmployeeService.sorter = "";
    EmployeeService.page = 0;

    EmployeeService.??fac = function EmployeeService_Factory(t) {
      return new (t || EmployeeService)();
    };

    EmployeeService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({
      token: EmployeeService,
      factory: EmployeeService.??fac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/header/header.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/template/header/header.component.ts ***!
    \*****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppTemplateHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_authGuard___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/authGuard  */
    "./src/app/authGuard .ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return ["/employee/"];
    };

    function HeaderComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function HeaderComponent_div_2_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????restoreView"](_r4);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????nextContext"]();

          return ctx_r3.setStatus();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "Log Out");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return ["/"];
    };

    function HeaderComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Log in");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction0"](1, _c1));
      }
    }

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "getStatus",
        value: function getStatus() {
          return src_app_authGuard___WEBPACK_IMPORTED_MODULE_1__["AuthGuard"].statusLogged;
        }
      }, {
        key: "setStatus",
        value: function setStatus() {
          this.router.navigateByUrl("/");
          src_app_authGuard___WEBPACK_IMPORTED_MODULE_1__["AuthGuard"].setStatus(false);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.??fac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 5,
      vars: 2,
      consts: [[1, "position-sticky", "top-0", "z-head", "bg-white"], [1, "container", "px-4", "py-3"], ["class", "row justify-content-end", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "row", "justify-content-end"], [1, "px-3", "cursor-pointer", 3, "routerLink"], [1, "px-3", "cursor-pointer", 3, "click"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, HeaderComponent_div_2_Template, 5, 2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](3, HeaderComponent_ng_template_3_Template, 3, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????templateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        }

        if (rf & 2) {
          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.getStatus())("ngIfElse", _r1);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-header",
          templateUrl: "./header.component.html",
          styleUrls: ["./header.component.css"]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Test Lamar\test-technical\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map