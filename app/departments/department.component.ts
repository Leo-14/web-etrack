import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../app.service";
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './department.component.html',
  providers: [AppService, NgForm]
})
export class DepartmentComponent implements OnInit { 
  name = 'Department'; 
  faculties: any;
  constructor(private _appservice: AppService, private _form: NgForm, private _router: Router) {}
  ngOnInit() {
    this._appservice.getFaculties().subscribe(faculties => { 
      if(faculties.status == 200){
        this.faculties = faculties.data;
      } else {
        this.faculties = faculties.message;
      }
    });
  };

  addDept(form: NgForm) {
    this._appservice.saveDepartment(form.value)
      .subscribe(resp => { 
        if(resp.status == 200){
          console.log(resp.message);
          this._router.navigate(['departments']);
        }else{
          console.log(resp);
        }
      });  
  }
}
