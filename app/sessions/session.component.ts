
import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './session.component.html',
  styleUrls:    ['sessions.component.css'],
  providers: [AppService]
})
export class SessionComponent implements OnInit { 
  name: string; 
  session: any;
  sission_id: number;

  constructor(private _appservice: AppService, private _route: ActivatedRoute){}

  ngOnInit(){
    this.name = "Session";

    //get the passed route parameter
    this._route.params.subscribe((params: Params) => { this.sission_id = +params['id']; });

    this._appservice.getSession(this.sission_id).subscribe(resp => { 
      if(resp.status == 200){
        console.log(resp.data);
        this.session = resp.data;
      } else {
        this.session = resp.message;
      }
    });
  }
}
