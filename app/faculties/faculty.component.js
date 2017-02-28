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
var FacultyComponent = (function () {
    function FacultyComponent(_appservice, _form, _router) {
        this._appservice = _appservice;
        this._form = _form;
        this._router = _router;
        this.name = 'Faculty';
    }
    FacultyComponent.prototype.ngOnInit = function () {
        //this.addFaculty(this._form);
    };
    ;
    FacultyComponent.prototype.addFaculty = function (form) {
        var _this = this;
        this._appservice.saveFaculty(form.value)
            .subscribe(function (resp) {
            if (resp.status == 200) {
                console.log(resp.message);
                _this._router.navigate(['faculties']);
            }
            else {
                console.log(resp);
            }
        });
    };
    FacultyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: './faculty.component.html',
            providers: [app_service_1.AppService, forms_1.NgForm]
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, forms_1.NgForm, router_1.Router])
    ], FacultyComponent);
    return FacultyComponent;
}());
exports.FacultyComponent = FacultyComponent;
//# sourceMappingURL=faculty.component.js.map