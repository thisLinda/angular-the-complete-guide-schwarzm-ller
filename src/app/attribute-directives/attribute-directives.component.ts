import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})
export class AttributeDirectivesComponent {
  serverId: number = 10
  serverStatus: string = 'offline'

  allowNewServer = false;
  servers = ['Testserver', 'Testserver 2']
  serverCreationStatus = "No server was created"
  serverName = ''
  serverCreated = false

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  onCreateServer() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = "Server was created!"
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

  getServerStatus() {
    return this.serverStatus
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'
  }

}
