import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './students.component.html',
  styleUrls: ['students.component.css'],
  providers: [AppService]
})
export class StudentsComponent  { 
  
  students: any;
  name: string;

  constructor(private _appservice: AppService){}

  ngOnInit(){
    this.name = "Students";
    this._appservice.getStudents().subscribe(resp => { 
      if(resp.status == 200){
        this.students = resp.data;
      } else {
        this.students = resp.message;
      }
    });
  }
}
