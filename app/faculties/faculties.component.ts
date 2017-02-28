import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './faculties.component.html',
  providers: [AppService]
})
export class FacultiesComponent implements OnInit{
  
  faculties: any;
  name: string;

  constructor(private _appservice: AppService){}

  ngOnInit(){
    this.name = "Faculties";
    this._appservice.getFaculties().subscribe(faculties => { 
      if(faculties.status == 200){
        this.faculties = faculties.data;
      } else {
        this.faculties = faculties.message;
      }
    });
  }
}
