import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../app.service";
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './semesters.component.html',
  providers: [AppService, NgForm]
})
export class SemestersComponent implements OnInit { 
  
  name: string;
  semesters: any;

  constructor(private _appservice: AppService, private _form: NgForm, private _router: Router){} 

  ngOnInit(){
    this.name = 'Semesters';

    //get semesters
    this.getData(); 

  }

  AddSemester(form: NgForm) {
    this._appservice.saveSemester(form.value)
      .subscribe(resp => { 
        if(resp.status == 200){
          console.log(resp.message);
          form.reset();
          this.getData();
        }else{
          console.log(resp);
        }
      });  
  }

  getData(){
    this._appservice.getSemesters().subscribe(resp => { 
      if(resp.status == 200){
        this.semesters = resp.data;
      } else {
        this.semesters = resp.message;
      }
    });
  }
}
