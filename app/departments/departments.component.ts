import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './departments.component.html',
  providers: [AppService]
})
export class DepartmentsComponent implements OnInit { 
  
  departments: any;
  name:string;
  constructor(private _appservice: AppService){}

  ngOnInit(){
    this.name = 'Departments';

    this._appservice.getDepartment().subscribe(resp => { 
      if(resp.status == 200){
        this.departments = resp.data;
      } else {
        this.departments = resp.message;
      }
    });
  }
}
