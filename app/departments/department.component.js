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
var DepartmentComponent = (function () {
    function DepartmentComponent(_appservice, _form, _router) {
        this._appservice = _appservice;
        this._form = _form;
        this._router = _router;
        this.name = 'Department';
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._appservice.getFaculties().subscribe(function (faculties) {
            if (faculties.status == 200) {
                _this.faculties = faculties.data;
            }
            else {
                _this.faculties = faculties.message;
            }
        });
    };
    ;
    DepartmentComponent.prototype.addDept = function (form) {
        var _this = this;
        this._appservice.saveDepartment(form.value)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                console.log(resp.message);
                _this._router.navigate(['departments']);
            }
            else {
                console.log(resp);
            }
        });
    };
    DepartmentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './department.component.html',
            providers: [app_service_1.AppService, forms_1.NgForm]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, forms_1.NgForm, router_1.Router])
    ], DepartmentComponent);
    return DepartmentComponent;
}());
exports.DepartmentComponent = DepartmentComponent;
//# sourceMappingURL=department.component.js.map