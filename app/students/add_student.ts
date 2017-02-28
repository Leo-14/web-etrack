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
  templateUrl: './add_student.html',
  styleUrls:    ['students.component.css'],
  providers: [AppService, NgForm]
})

export class AddStudentComponent implements OnInit { 
  
  name = 'Department'; 
  faculties: any;

  departments: any;
  constructor(private _appservice: AppService, private _form: NgForm, private _router: Router) {}
  ngOnInit() {
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
  };

  addStudent(form: NgForm) {
    this._appservice.saveStudent(form.value)
      .subscribe(resp => { 
        if(resp.status == 200){
          console.log(resp.message);
          this._router.navigate(['students']);
        }else{
          console.log(resp);
        }
      });  
  }
}
