import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
    <app-server></app-server>
    <app-server></app-server>`,
  // templateUrl: './servers.component.html', // inline templates above
  // styleUrls: ['./servers.component.css']
  // styles: [`
  //   h3 {
  //     color: pink;
  //   }
  // `] // this didn't work
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
