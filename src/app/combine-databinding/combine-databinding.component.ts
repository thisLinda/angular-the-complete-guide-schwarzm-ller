import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-combine-databinding',
  templateUrl: './combine-databinding.component.html',
  styleUrls: ['./combine-databinding.component.css']
})
export class CombineDatabindingComponent implements OnInit {

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
    this.serverCreationStatus = "Server was created! Name is " + this.serverName
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
