import { Component, OnInit } from '@angular/core';
// I tried to import this so not writing code again for server, didn't work like this thought
// import { PropertyBindingComponent } from '../property-binding/property-binding.component';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName = ''

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created!"
  }

  onUpdateServerName(event: Event) {
    // console.log(event)
    // explicit casting below <HTML...> for typescript to find it or something
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
