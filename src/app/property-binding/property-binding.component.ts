import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  allowNewServer = false;

  constructor() { 
    this.allowNewServer = true
    setTimeout(() => {}, 2000)
  }

  ngOnInit(): void {
  }

}
