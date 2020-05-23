function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
  "./src/app/alert.service.ts":
  /*!**********************************!*\
    !*** ./src/app/alert.service.ts ***!
    \**********************************/

  /*! exports provided: Alert, AlertType, AlertService */

  /***/
  function srcAppAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var Alert = function Alert(init) {
      _classCallCheck(this, Alert);

      this.autoClose = true;
      Object.assign(this, init);
    };

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["Success"] = 0] = "Success";
      AlertType[AlertType["Error"] = 1] = "Error";
      AlertType[AlertType["Info"] = 2] = "Info";
      AlertType[AlertType["Warning"] = 3] = "Warning";
    })(AlertType || (AlertType = {}));

    var AlertService = /*#__PURE__*/function () {
      function AlertService() {
        _classCallCheck(this, AlertService);

        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.defaultId = 'default-alert';
      } // enable subscribing to alerts observable


      _createClass(AlertService, [{
        key: "onAlert",
        value: function onAlert() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
          return this.subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (x) {
            return x && x.id === id;
          }));
        } // convenience methods

      }, {
        key: "success",
        value: function success(message, options) {
          this.alert(new Alert(Object.assign(Object.assign({}, options), {
            type: AlertType.Success,
            message: message
          })));
        }
      }, {
        key: "error",
        value: function error(message, options) {
          this.alert(new Alert(Object.assign(Object.assign({}, options), {
            type: AlertType.Error,
            message: message
          })));
        }
      }, {
        key: "info",
        value: function info(message, options) {
          this.alert(new Alert(Object.assign(Object.assign({}, options), {
            type: AlertType.Info,
            message: message
          })));
        }
      }, {
        key: "warn",
        value: function warn(message, options) {
          this.alert(new Alert(Object.assign(Object.assign({}, options), {
            type: AlertType.Warning,
            message: message
          })));
        } // main alert method

      }, {
        key: "alert",
        value: function alert(_alert) {
          _alert.id = _alert.id || this.defaultId;
          this.subject.next(_alert);
        } // clear alerts

      }, {
        key: "clear",
        value: function clear() {
          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.defaultId;
          this.subject.next(new Alert({
            id: id
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ɵfac = function AlertService_Factory(t) {
      return new (t || AlertService)();
    };

    AlertService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AlertService,
      factory: AlertService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/alert/alert.component.ts":
  /*!******************************************!*\
    !*** ./src/app/alert/alert.component.ts ***!
    \******************************************/

  /*! exports provided: AlertComponent */

  /***/
  function srcAppAlertAlertComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertComponent", function () {
      return AlertComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alert.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AlertComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlertComponent_div_0_Template_a_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var alert_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.removeAlert(alert_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var alert_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.cssClass(alert_r1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", alert_r1.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var AlertComponent = /*#__PURE__*/function () {
      function AlertComponent(router, alertService) {
        _classCallCheck(this, AlertComponent);

        this.router = router;
        this.alertService = alertService;
        this.id = 'default-alert';
        this.fade = true;
        this.alerts = [];
      }

      _createClass(AlertComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // subscribe to new alert notifications
          this.alertSubscription = this.alertService.onAlert(this.id).subscribe(function (alert) {
            // clear alerts when an empty alert is received
            if (!alert.message) {
              // filter out alerts without 'keepAfterRouteChange' flag
              _this.alerts = _this.alerts.filter(function (x) {
                return x.keepAfterRouteChange;
              }); // remove 'keepAfterRouteChange' flag on the rest

              _this.alerts.forEach(function (x) {
                return delete x.keepAfterRouteChange;
              });

              return;
            } // add alert to array


            _this.alerts.push(alert); // auto close alert if required


            if (alert.autoClose) {
              setTimeout(function () {
                return _this.removeAlert(alert);
              }, 3000);
            }
          }); // clear alerts on location change

          this.routeSubscription = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this.alertService.clear(_this.id);
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // unsubscribe to avoid memory leaks
          this.alertSubscription.unsubscribe();
          this.routeSubscription.unsubscribe();
        }
      }, {
        key: "removeAlert",
        value: function removeAlert(alert) {
          var _this2 = this;

          // check if already removed to prevent error on auto close
          if (!this.alerts.includes(alert)) {
            return;
          }

          if (this.fade) {
            // fade out alert
            this.alerts.find(function (x) {
              return x === alert;
            }).fade = true; // remove alert after faded out

            setTimeout(function () {
              _this2.alerts = _this2.alerts.filter(function (x) {
                return x !== alert;
              });
            }, 250);
          } else {
            // remove alert
            this.alerts = this.alerts.filter(function (x) {
              return x !== alert;
            });
          }
        }
      }, {
        key: "cssClass",
        value: function cssClass(alert) {
          var _alertTypeClass;

          if (!alert) {
            return;
          }

          var classes = ['alert', 'alert-dismissable'];
          var alertTypeClass = (_alertTypeClass = {}, _defineProperty(_alertTypeClass, _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Success, 'alert alert-success'), _defineProperty(_alertTypeClass, _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Error, 'alert alert-danger'), _defineProperty(_alertTypeClass, _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Info, 'alert alert-info'), _defineProperty(_alertTypeClass, _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertType"].Warning, 'alert alert-warning'), _alertTypeClass);
          classes.push(alertTypeClass[alert.type]);

          if (alert.fade) {
            classes.push('fade');
          }

          return classes.join(' ');
        }
      }]);

      return AlertComponent;
    }();

    AlertComponent.ɵfac = function AlertComponent_Factory(t) {
      return new (t || AlertComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]));
    };

    AlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AlertComponent,
      selectors: [["alert"]],
      inputs: {
        id: "id",
        fade: "fade"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngFor", "ngForOf"], [1, "close", 3, "click"], [3, "innerHTML"]],
      template: function AlertComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlertComponent_div_0_Template, 4, 4, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlertComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'alert',
          templateUrl: './alert.component.html',
          styleUrls: ['./alert.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        fade: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/api.service.ts":
  /*!********************************!*\
    !*** ./src/app/api.service.ts ***!
    \********************************/

  /*! exports provided: Message, encryptP, decryptP, ApiService */

  /***/
  function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "encryptP", function () {
      return encryptP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "decryptP", function () {
      return decryptP;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _octokit_rest__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @octokit/rest */
    "./node_modules/@octokit/rest/dist-web/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/alert.service.ts");

    var Message = function Message() {
      _classCallCheck(this, Message);
    };

    function encryptP(pass, payload) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(encrypt(pass, payload)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (n) {
        return n;
      }));
    }

    function decryptP(pass, s) {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(decrypt(pass, s)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (n) {
        return n;
      }));
    }

    var encryptedGHToken = '76ffb769ae02d5333b7c2195CokTlfRFy/6OB3H+8YfIPZaRlW+fg8k+mzh34McdL2JElZj3x05SdFKnTnPZ/oRI9tMotT84jxM=';
    var gh_key_path = 'gh_key.txt';

    var ApiService = /*#__PURE__*/function () {
      function ApiService(http, as) {
        _classCallCheck(this, ApiService);

        this.http = http;
        this.as = as;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].server;
        this.gh_key = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.messages = [];
      }

      _createClass(ApiService, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.getGHKey();
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.messages);
        }
      }, {
        key: "getMessage",
        value: function getMessage(id) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.messages[id]);
        }
      }, {
        key: "addMessage",
        value: function addMessage(message) {
          this.messages.push(message);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(message);
        }
      }, {
        key: "sendNote",
        value: function sendNote(pass, title, text, releaseDate) {
          var _this3 = this;

          return encryptP(pass, title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (titleEnc) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(encrypt(pass, text)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (textEnc) {
              return _this3.http.post(_this3.apiUrl + '/note/' + name, {
                'pass': pass,
                'release': releaseDate,
                'title': titleEnc,
                'text': textEnc
              });
            }));
          }));
        }
      }, {
        key: "getNotes",
        value: function getNotes(pass) {
          return this.http.post(this.apiUrl + '/notes/' + name, {
            'pass': pass
          }) // .pipe(catchError(this.errorHandler))
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (value) {
            return value;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (n) {
            return decryptP(pass, n.title).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (title) {
              n.title = title;
              return n;
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (n) {
            return n;
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (n) {
            return decryptP(pass, n.text).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (text) {
              n.text = text;
              return n;
            }));
          })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (n) {
            return n;
          }));
        }
      }, {
        key: "saveKeyToGH",
        value: function saveKeyToGH(pass, token) {
          this.savePass(pass);
          this.saveKey(token);
          var octokit = new _octokit_rest__WEBPACK_IMPORTED_MODULE_5__["Octokit"]({
            auth: this.getKey(),
            log: console
          });
          this.getGHKey().then(function (file) {
            console.log(file);
            console.log(file.data.sha);
            return octokit.repos.deleteFile({
              owner: 'ezomode',
              repo: 'notiki',
              path: gh_key_path,
              message: 'delete gh_key',
              sha: file.data.sha
            });
          }).then(function (_) {
            encryptP(pass, token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["flatMap"])(function (tokenEnc) {
              return octokit.repos.createOrUpdateFile({
                owner: 'ezomode',
                repo: 'notiki',
                path: gh_key_path,
                message: 'update gh_key',
                content: btoa(tokenEnc),
                'committer.name': '',
                'committer.email': ''
              });
            })).toPromise().then(function (res) {
              return console.log(res);
            });
          });
        }
      }, {
        key: "getGHKey",
        value: function getGHKey() {
          return new _octokit_rest__WEBPACK_IMPORTED_MODULE_5__["Octokit"]({
            auth: this.getKey(),
            log: console
          }).repos.getContents({
            owner: 'ezomode',
            repo: 'notiki',
            path: gh_key_path
          });
        }
      }, {
        key: "savePass",
        value: function savePass(s) {
          return localStorage.setItem('password', s);
        }
      }, {
        key: "getPass",
        value: function getPass() {
          return localStorage.getItem('password');
        }
      }, {
        key: "saveKey",
        value: function saveKey(s) {
          return localStorage.setItem('gh_key', s);
        }
      }, {
        key: "getKey",
        value: function getKey() {
          return localStorage.getItem('gh_key');
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
        }];
      }, null);
    })(); // from https://gist.github.com/chrisveness/43bcda93af9f646d083fad678071b90a

    /**
     * Encrypts plaintext using AES-GCM with supplied password, for decryption with aesGcmDecrypt().
     *                                                                      (c) Chris Veness MIT Licence
     *
     * @param   {String} plaintext - Plaintext to be encrypted.
     * @param   {String} password - Password to use to encrypt plaintext.
     * @returns {String} Encrypted ciphertext.
     *
     * @example
     *   const ciphertext = await aesGcmEncrypt('my secret text', 'pw');
     *   aesGcmEncrypt('my secret text', 'pw').then(function(ciphertext) { console.log(ciphertext); });
     */


    function encrypt(password, plaintext) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var pwUtf8, pwHash, iv, alg, key, ptUint8, ctBuffer, ctArray, ctStr, ctBase64, ivHex, s;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8

                _context.next = 3;
                return crypto.subtle.digest('SHA-256', pwUtf8);

              case 3:
                pwHash = _context.sent;
                // hash the password
                iv = crypto.getRandomValues(new Uint8Array(12)); // get 96-bit random iv

                console.log('encrypt iv raw: ' + iv);
                alg = {
                  name: 'AES-GCM',
                  iv: iv
                }; // specify algorithm to use

                _context.next = 9;
                return crypto.subtle.importKey('raw', pwHash, 'AES-GCM', false, ['encrypt']);

              case 9:
                key = _context.sent;
                // generate key from pw
                ptUint8 = new TextEncoder().encode(plaintext); // encode plaintext as UTF-8

                _context.next = 13;
                return crypto.subtle.encrypt(alg, key, ptUint8);

              case 13:
                ctBuffer = _context.sent;
                // encrypt plaintext using key
                ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array

                ctStr = ctArray.map(function (_byte) {
                  return String.fromCharCode(_byte);
                }).join(''); // ciphertext as string

                ctBase64 = btoa(ctStr); // encode ciphertext as base64

                ivHex = Array.from(iv).map(function (b) {
                  return ('00' + b.toString(16)).slice(-2);
                }).join(''); // iv as hex string

                console.log('encrypt ivHex: ' + ivHex);
                s = ivHex + ctBase64;
                console.log(s);
                return _context.abrupt("return", s);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
    /**
     * Decrypts ciphertext encrypted with aesGcmEncrypt() using supplied password.
     *                                                                      (c) Chris Veness MIT Licence
     *
     * @param   {String} ciphertext - Ciphertext to be decrypted.
     * @param   {String} password - Password to use to decrypt ciphertext.
     * @returns {String} Decrypted plaintext.
     *
     * @example
     *   const plaintext = await aesGcmDecrypt(ciphertext, 'pw');
     *   aesGcmDecrypt(ciphertext, 'pw').then(function(plaintext) { console.log(plaintext); });
     */


    function decrypt(password, ciphertext) {
      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var pwUtf8, pwHash, iv, key, ciphered, ctStr, ctUint8, alg, plainBuffer, s;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8

                _context2.next = 3;
                return crypto.subtle.digest('SHA-256', pwUtf8);

              case 3:
                pwHash = _context2.sent;
                // hash the password
                iv = ciphertext.slice(0, 24).match(/.{2}/g).map(function (_byte2) {
                  return parseInt(_byte2, 16);
                }); // get iv from ciphertext

                console.log('decrypt iv: ' + iv);
                _context2.next = 8;
                return crypto.subtle.importKey('raw', pwHash, 'AES-GCM', false, ['decrypt']);

              case 8:
                key = _context2.sent;
                // use pw to generate key
                ciphered = ciphertext.slice(24);
                console.log('decrypt ciphered: ' + ciphered);
                ctStr = atob(ciphered); // decode base64 ciphertext

                ctUint8 = new Uint8Array(ctStr.match(/[\s\S]/g).map(function (ch) {
                  return ch.charCodeAt(0);
                })); // ciphertext as Uint8Array
                // note: why doesn't ctUint8 = new TextEncoder().encode(ctStr) work?

                alg = {
                  name: 'AES-GCM',
                  iv: new Uint8Array(iv)
                }; // specify algorithm to use

                _context2.next = 16;
                return crypto.subtle.decrypt(alg, key, ctUint8);

              case 16:
                plainBuffer = _context2.sent;
                // decrypt ciphertext using key
                // decode password from UTF-8
                s = new TextDecoder().decode(plainBuffer);
                console.log(s);
                return _context2.abrupt("return", s);

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    }
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


    var _chrono_chrono_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chrono/chrono.component */
    "./src/app/chrono/chrono.component.ts");

    var routes = [{
      path: '',
      component: _chrono_chrono_component__WEBPACK_IMPORTED_MODULE_2__["ChronoComponent"],
      data: {
        title: 'Chrono Messages'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
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


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/app/alert/alert.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'memoria';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "alert");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_alert_alert_component__WEBPACK_IMPORTED_MODULE_1__["AlertComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
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


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _chrono_chrono_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./chrono/chrono.component */
    "./src/app/chrono/chrono.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./alert/alert.component */
    "./src/app/alert/alert.component.ts");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _setup_setup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./setup/setup.component */
    "./src/app/setup/setup.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _chrono_chrono_component__WEBPACK_IMPORTED_MODULE_5__["ChronoComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_12__["SetupComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _chrono_chrono_component__WEBPACK_IMPORTED_MODULE_5__["ChronoComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_12__["SetupComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].firebase), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_9__["AngularFireAnalyticsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_chrono_chrono_component__WEBPACK_IMPORTED_MODULE_5__["ChronoComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_l"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormArrayName"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordion"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPanel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPanelTitle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPanelContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPanelHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPanelToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlert"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonLabel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCheckBox"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRadioGroup"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRadio"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbSlide"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapse"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbInputDatepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerMonth"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownAnchor"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPagination"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationEllipsis"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationFirst"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationLast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationNext"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationNumber"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationPrevious"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopover"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbar"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRating"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepicker"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToast"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastHeader"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltip"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeahead"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbHighlight"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabset"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTab"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _chrono_chrono_component__WEBPACK_IMPORTED_MODULE_5__["ChronoComponent"], _alert_alert_component__WEBPACK_IMPORTED_MODULE_8__["AlertComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_12__["SetupComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/chrono/chrono.component.ts":
  /*!********************************************!*\
    !*** ./src/app/chrono/chrono.component.ts ***!
    \********************************************/

  /*! exports provided: Note, ChronoComponent */

  /***/
  function srcAppChronoChronoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Note", function () {
      return Note;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChronoComponent", function () {
      return ChronoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alert.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");

    var _c0 = ["content"];

    function ChronoComponent_app_setup_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-setup");
      }
    }

    function ChronoComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 2);
      }
    }

    function ChronoComponent_ng_template_8_tr_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r7 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.created.toLocaleString());

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r7.text);
      }
    }

    function ChronoComponent_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h4", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChronoComponent_ng_template_8_Template_button_click_3_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "table", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Text");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, ChronoComponent_ng_template_8_tr_15_Template, 9, 3, "tr", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChronoComponent_ng_template_8_Template_button_click_17_listener() {
          var modal_r5 = ctx.$implicit;
          return modal_r5.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Notes from ", ctx_r3.notes[0].authorName, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.notes);
      }
    }

    var Note = function Note() {
      _classCallCheck(this, Note);
    };

    var ChronoComponent = /*#__PURE__*/function () {
      function ChronoComponent(formBuilder, api, as, modalService, analytics) {
        _classCallCheck(this, ChronoComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.as = as;
        this.modalService = modalService;
        this.analytics = analytics;
        this.data = [];
        this.notes = [];
        this.date = new Date();
        this.releaseDate = {
          day: this.date.getDate(),
          month: this.date.getMonth() + 1,
          year: this.date.getFullYear()
        };
      }

      _createClass(ChronoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.api.gh_key.subscribe(function (k) {
            return _this4.gh_key = k;
          });
          this.sendForm = this.formBuilder.group({
            authorName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            text: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            release: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
          this.notesForm = this.formBuilder.group({
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
          });
          this.api.getMessages().subscribe(function (res) {
            _this4.data = res;
          }, function (err) {
            console.log(err);

            _this4.as.error('Error: ' + err['message']);
          });
        }
      }, {
        key: "sendNote",
        value: function sendNote() {
          var _this5 = this;

          var pass = this.sendForm.controls.pass.value;
          var title = this.sendForm.controls.title.value;
          var text = this.sendForm.controls.text.value;
          var release = this.sendForm.controls.release.value;
          console.log(release);
          var date = new Date();
          date.setDate(release['day']);
          date.setMonth(release['month'] - 1);
          date.setFullYear(release['year']);
          this.api.sendNote(pass, title, text, date.getTime()).subscribe(function (res) {
            console.log('CREATED: ' + JSON.stringify(res));

            _this5.as.success('Sent');

            _this5.analytics.logEvent('note');
          }, function (err) {
            console.log(err);

            _this5.as.error('Error: ' + err['message']);
          });
        }
      }, {
        key: "getNotes",
        value: function getNotes() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this6 = this;

            var pass;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    pass = this.notesForm.controls.pass.value;
                    this.notes = [];
                    this.api.getNotes(pass).subscribe(function (note) {
                      _this6.notes.push(note);

                      console.log('NOTE: ' + JSON.stringify(note));

                      _this6.analytics.logEvent('getNotes');
                    }, function (err) {
                      console.log(err); // this.as.error('Error: ' + JSON.stringify(err));

                      _this6.as.error('Error: ' + err['message']);
                    }, function () {
                      if (_this6.notes.length > 0) {
                        _this6.modalService.open(_this6.content, {
                          size: 'xl'
                        });
                      }
                    });

                  case 3:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return ChronoComponent;
    }();

    ChronoComponent.ɵfac = function ChronoComponent_Factory(t) {
      return new (t || ChronoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalytics"]));
    };

    ChronoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChronoComponent,
      selectors: [["app-chrono"]],
      viewQuery: function ChronoComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      decls: 60,
      vars: 5,
      consts: [[1, "container"], [4, "ngIf"], [1, "row"], [1, "col-sm"], ["class", "row", 4, "ngIf"], ["content", ""], [1, "card"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-sm-3", "col-form-label"], ["type", "password", "formControlName", "pass", 1, "form-control"], [1, "col-sm-9"], ["type", "text", "formControlName", "title", 1, "form-control"], ["type", "text", "formControlName", "text", 1, "md-textarea", "md-textarea-auto", "form-control"], [1, "form-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "formControlName", "release", "type", "text", 1, "form-control", 3, "ngModel"], ["d", "ngbDatepicker"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-light", "float-right", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "col-sm-3", "col-form-label", "float-right"], [1, "modal-header"], [1, "modal-title", "text-center"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "table", "table-bordered", "mt-5"], [4, "ngFor", "ngForOf"], [1, "modal-footer"], ["type", "button", "ngbAutofocus", "", 1, "btn", "btn-light", 3, "click"], [2, "width", "25%"], [1, "text-muted", "small"]],
      template: function ChronoComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChronoComponent_app_setup_1_Template, 1, 0, "app-setup", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ChronoComponent_div_7_Template, 1, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChronoComponent_ng_template_8_Template, 19, 2, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Send Note");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChronoComponent_Template_form_ngSubmit_16_listener() {
            return ctx.sendNote();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Pass ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Title ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Release Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChronoComponent_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](37);

            return _r4.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "\uD83D\uDCC5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Send");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Find Notes");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function ChronoComponent_Template_form_ngSubmit_51_listener() {
            return ctx.getNotes();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Pass ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Get");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.gh_key);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notes.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.sendForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.releaseDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.notesForm);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nocm9uby9jaHJvbm8uY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChronoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-chrono',
          templateUrl: './chrono.component.html',
          styleUrls: ['./chrono.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }, {
          type: _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_6__["AngularFireAnalytics"]
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['content']
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/setup/setup.component.ts":
  /*!******************************************!*\
    !*** ./src/app/setup/setup.component.ts ***!
    \******************************************/

  /*! exports provided: SetupComponent */

  /***/
  function srcAppSetupSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupComponent", function () {
      return SetupComponent;
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


    var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../api.service */
    "./src/app/api.service.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alert.service.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var SetupComponent = /*#__PURE__*/function () {
      function SetupComponent(formBuilder, api, as, modalService) {
        _classCallCheck(this, SetupComponent);

        this.formBuilder = formBuilder;
        this.api = api;
        this.as = as;
        this.modalService = modalService;
      }

      _createClass(SetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setupForm = this.formBuilder.group({
            api_key: ['d61653e0271a4c41a7cc04b77679ebc46f8a0e4f', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            pass: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
          });
        }
      }, {
        key: "setupGH",
        value: function setupGH() {
          var pass = this.setupForm.controls.pass.value;
          var api_key = this.setupForm.controls.api_key.value;
          this.api.saveKeyToGH(pass, api_key);
        }
      }]);

      return SetupComponent;
    }();

    SetupComponent.ɵfac = function SetupComponent_Factory(t) {
      return new (t || SetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    SetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SetupComponent,
      selectors: [["app-setup"]],
      decls: 17,
      vars: 1,
      consts: [[1, "card", "card-default"], [1, "card-header"], [1, "card-body"], [3, "formGroup", "ngSubmit"], [1, "form-group", "row"], [1, "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["type", "text", "formControlName", "api_key", 1, "form-control"], ["type", "password", "formControlName", "pass", 1, "form-control"], [1, "form-group"], ["type", "submit", 1, "btn", "btn-primary", "col-sm-3", "col-form-label", "float-right"]],
      template: function SetupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SetupComponent_Template_form_ngSubmit_4_listener() {
            return ctx.setupGH();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "API Key ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Pass ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Create");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.setupForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHVwL3NldHVwLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-setup',
          templateUrl: './setup.component.html',
          styleUrls: ['./setup.component.css']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]
        }, {
          type: _alert_service__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
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
      production: false,
      server: "http://localhost:8080",
      constantSalt: "eFA33n8lvP5yOBWsKQ",
      firebase: {
        apiKey: "AIzaSyDxrUeq8MSdE9Rr4juycCmnGahWMmDzfA4",
        authDomain: "notiki-dev.firebaseapp.com",
        databaseURL: "https://notiki-dev.firebaseio.com",
        projectId: "notiki-dev",
        storageBucket: "notiki-dev.appspot.com",
        messagingSenderId: "260249045003",
        appId: "1:260249045003:web:1dfb6f44bd2d2019fd1f0e",
        measurementId: "G-KV0B6GKQ8Y"
      }
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
    /*! /Users/akarmeliuk/my/notiki-github/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map