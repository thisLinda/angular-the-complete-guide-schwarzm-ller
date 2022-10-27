import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
})

export class DirectivesComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created"
  serverName = 'Testserver'
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000)
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true
    this.serverCreationStatus = "Server was created! Name is " + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
