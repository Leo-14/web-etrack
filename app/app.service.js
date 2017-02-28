/**
 * Created by Kamdjou on 2/15/2017.
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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
require('rxjs/Rx');
var AppService = (function () {
    //params: string = 'email=email@example.com&amp;pwd=xxxxxx';
    function AppService(_http) {
        this._http = _http;
        this._url = "http://localhost/etrack/public/";
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers, method: "post" });
    }
    //***************************faculties************************************/
    AppService.prototype.getFaculties = function () {
        return this._http.get(this._url + "faculties")
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.saveFaculty = function (form) {
        return this._http.post(this._url + "faculties", form, this.options)
            .map(function (response) { return response.json(); });
    };
    //***************************faculties************************************/
    AppService.prototype.getDepartment = function () {
        return this._http.get(this._url + "departments")
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.saveDepartment = function (form) {
        return this._http.post(this._url + "departments", form, this.options)
            .map(function (response) { return response.json(); });
    };
    //***************************students************************************/
    AppService.prototype.getStudents = function () {
        return this._http.get(this._url + "students")
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getStudent = function (id) {
        return this._http.get(this._url + "students/" + id)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.saveStudent = function (form) {
        return this._http.post(this._url + "students", form, this.options)
            .map(function (response) { return response.json(); });
    };
    //***************************students************************************/
    AppService.prototype.getSessions = function () {
        return this._http.get(this._url + "sessions")
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.getSession = function (id) {
        return this._http.get(this._url + "sessions/" + id)
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.saveSession = function (form) {
        return this._http.post(this._url + "sessions", form, this.options)
            .map(function (response) { return response.json(); });
    };
    /**************************semester******************************* */
    AppService.prototype.getSemesters = function () {
        return this._http.get(this._url + "semesters")
            .map(function (response) { return response.json(); });
    };
    AppService.prototype.saveSemester = function (form) {
        return this._http.post(this._url + "semesters", form, this.options)
            .map(function (response) { return response.json(); });
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map