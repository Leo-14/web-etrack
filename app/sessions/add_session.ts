/**
 * Created by Kamdjou on 2/13/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../app.service";
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './add_session.html',
  styleUrls:    ['sessions.component.css'],
  providers: [AppService, NgForm]
})

export class AddSessionComponent implements OnInit { 
  
  name: string; 
  faculties: any;
  departments: any;
  semesters: any;

  constructor(private _appservice: AppService, private _form: NgForm, private _router: Router) {}
  ngOnInit() {

    this.name = 'Session';
    // get faculties
    this._appservice.getFaculties().subscribe(faculties => { 
      if(faculties.status == 200){
        this.faculties = faculties.data;
      } else {
        this.faculties = faculties.message;
      }
    });

    //get departments
    this._appservice.getDepartment().subscribe(resp => { 
      if(resp.status == 200){
        this.departments = resp.data;
      } else {
        this.departments = resp.message;
      }
    });

    //get semesters
    this._appservice.getSemesters().subscribe(resp => { 
      if(resp.status == 200){
        this.semesters = resp.data;
      } else {
        this.semesters = resp.message;
      }
    });
  };

  addSession(form: NgForm) {
    this._appservice.saveSession(form.value)
      .subscribe(resp => { 
        if(resp.status == 200){
          console.log(resp.message);
          this._router.navigate(['sessions']);
        }else{
          console.log(resp);
        }
      });  
  }
}
