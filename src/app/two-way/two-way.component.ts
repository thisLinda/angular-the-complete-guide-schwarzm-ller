import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way',
  templateUrl: './two-way.component.html',
})
export class TwoWayComponent implements OnInit {

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
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
