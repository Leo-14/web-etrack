import { Component, OnInit } from '@angular/core';
import { AppService } from "../app.service";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './sessions.component.html',
  styleUrls:    ['sessions.component.css'],
  providers: [AppService]
})
export class SessionsComponent implements OnInit { 
  
  sessions: any;
  name: string;

  constructor(private _appservice: AppService){}

  ngOnInit(){
    this.name = "Sessions";
    this._appservice.getSessions().subscribe(resp => { 
      if(resp.status == 200){
        this.sessions = resp.data;
      } else {
        this.sessions = resp.message;
      }
    });
  }
}
