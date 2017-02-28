import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './student.component.html',
  styleUrls: ['students.component.css'],
  providers: [AppService]
})
export class StudentComponent implements OnInit { 
  name: string; 
  student: any;
  stud_id: number;

  constructor(private _appservice: AppService, private _route: ActivatedRoute){}

  ngOnInit(){
    this.name = "Student";

    //get the passed route parameter
    this._route.params.subscribe((params: Params) => { this.stud_id = +params['id']; });

    this._appservice.getStudent(this.stud_id).subscribe(resp => { 
      if(resp.status == 200){
        this.student = resp.data;
      } else {
        this.student = resp.message;
      }
    });
  }
}
