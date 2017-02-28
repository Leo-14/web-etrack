import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './message.component.html',
  styleUrls:   ['messages.component.css']
})
export class MessageComponent  { 
  name = 'Message'; 
}
