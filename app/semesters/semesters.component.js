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
var router_1 = require('@angular/router');
var app_service_1 = require("../app.service");
var forms_1 = require('@angular/forms');
var SemestersComponent = (function () {
    function SemestersComponent(_appservice, _form, _router) {
        this._appservice = _appservice;
        this._form = _form;
        this._router = _router;
    }
    SemestersComponent.prototype.ngOnInit = function () {
        this.name = 'Semesters';
        //get semesters
        this.getData();
    };
    SemestersComponent.prototype.AddSemester = function (form) {
        var _this = this;
        this._appservice.saveSemester(form.value)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                console.log(resp.message);
                form.reset();
                _this.getData();
            }
            else {
                console.log(resp);
            }
        });
    };
    SemestersComponent.prototype.getData = function () {
        var _this = this;
        this._appservice.getSemesters().subscribe(function (resp) {
            if (resp.status == 200) {
                _this.semesters = resp.data;
            }
            else {
                _this.semesters = resp.message;
            }
        });
    };
    SemestersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './semesters.component.html',
            providers: [app_service_1.AppService, forms_1.NgForm]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, forms_1.NgForm, router_1.Router])
    ], SemestersComponent);
    return SemestersComponent;
}());
exports.SemestersComponent = SemestersComponent;
//# sourceMappingURL=semesters.component.js.map