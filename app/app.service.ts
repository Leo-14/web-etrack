/**
 * Created by Kamdjou on 2/15/2017.
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()

export class AppService {

  private _url: string = "http://localhost/etrack/public/";
  
  headers = new Headers({ 'Content-Type': 'application/json; charset=UTF-8' });
  options = new RequestOptions({ headers: this.headers, method: "post" });
  
  //params: string = 'email=email@example.com&amp;pwd=xxxxxx';

  constructor(private _http: Http){ }

  //***************************faculties************************************/
  getFaculties() {
    return this._http.get(this._url+"faculties")
      .map((response: Response) => response.json());
  }

  saveFaculty(form: NgForm){
    return this._http.post(this._url+"faculties", form , this.options)
      .map((response: Response) => response.json());
  }

  //***************************faculties************************************/
  getDepartment() {
    return this._http.get(this._url+"departments")
      .map((response: Response) => response.json());
  }

  saveDepartment(form: NgForm){
    return this._http.post(this._url+"departments", form , this.options)
      .map((response: Response) => response.json());
  }

  //***************************students************************************/
  getStudents() {
    return this._http.get(this._url+"students")
      .map((response: Response) => response.json());
  }

  getStudent(id: number) {
    return this._http.get(this._url+"students/"+id)
      .map((response: Response) => response.json());
  }

  saveStudent(form: NgForm){
    return this._http.post(this._url+"students", form , this.options)
      .map((response: Response) => response.json());
  }

  //***************************students************************************/
  getSessions() {
    return this._http.get(this._url+"sessions")
      .map((response: Response) => response.json());
  }

  getSession(id: number) {
    return this._http.get(this._url+"sessions/"+id)
      .map((response: Response) => response.json());
  }

  saveSession(form: NgForm){
    return this._http.post(this._url+"sessions", form , this.options)
      .map((response: Response) => response.json());
  }

  /**************************semester******************************* */
  getSemesters(){
    return this._http.get(this._url+"semesters")
      .map((response: Response) => response.json());
  }

  saveSemester(form: NgForm){
    return this._http.post(this._url+"semesters", form, this.options)
      .map((response: Response) => response.json());
  }
}
