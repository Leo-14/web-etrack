import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from "../app.service";
import { NgForm } from '@angular/forms';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './faculty.component.html',
  providers: [AppService, NgForm]
})
export class FacultyComponent implements OnInit { 
  name = 'Faculty';

  constructor(private _appservice: AppService, private _form: NgForm, private _router: Router) {}
  ngOnInit() {
    //this.addFaculty(this._form);
  };

  addFaculty(form: NgForm) {
    this._appservice.saveFaculty(form.value)
      .subscribe(resp => { 
        if(resp.status == 200){
          console.log(resp.message);
          this._router.navigate(['faculties']);
        }else{
          console.log(resp);
        }
      });  
  }
}
