/**
 * Created by Kamdjou on 2/13/2017.
 */
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
var AddStudentComponent = (function () {
    function AddStudentComponent(_appservice, _form, _router) {
        this._appservice = _appservice;
        this._form = _form;
        this._router = _router;
        this.name = 'Department';
    }
    AddStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get faculties
        this._appservice.getFaculties().subscribe(function (faculties) {
            if (faculties.status == 200) {
                _this.faculties = faculties.data;
            }
            else {
                _this.faculties = faculties.message;
            }
        });
        //get departments
        this._appservice.getDepartment().subscribe(function (resp) {
            if (resp.status == 200) {
                _this.departments = resp.data;
            }
            else {
                _this.departments = resp.message;
            }
        });
    };
    ;
    AddStudentComponent.prototype.addStudent = function (form) {
        var _this = this;
        this._appservice.saveStudent(form.value)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                console.log(resp.message);
                _this._router.navigate(['students']);
            }
            else {
                console.log(resp);
            }
        });
    };
    AddStudentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './add_student.html',
            styleUrls: ['students.component.css'],
            providers: [app_service_1.AppService, forms_1.NgForm]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, forms_1.NgForm, router_1.Router])
    ], AddStudentComponent);
    return AddStudentComponent;
}());
exports.AddStudentComponent = AddStudentComponent;
//# sourceMappingURL=add_student.js.map