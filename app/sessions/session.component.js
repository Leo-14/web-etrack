"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var app_service_1 = require("../app.service");
var router_1 = require("@angular/router");
var SessionComponent = (function () {
    function SessionComponent(_appservice, _route) {
        this._appservice = _appservice;
        this._route = _route;
    }
    SessionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.name = "Session";
        //get the passed route parameter
        this._route.params.subscribe(function (params) { _this.sission_id = +params['id']; });
        this._appservice.getSession(this.sission_id).subscribe(function (resp) {
            if (resp.status == 200) {
                console.log(resp.data);
                _this.session = resp.data;
            }
            else {
                _this.session = resp.message;
            }
        });
    };
    SessionComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './session.component.html',
            styleUrls: ['sessions.component.css'],
            providers: [app_service_1.AppService]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.ActivatedRoute])
    ], SessionComponent);
    return SessionComponent;
}());
exports.SessionComponent = SessionComponent;
//# sourceMappingURL=session.component.js.map