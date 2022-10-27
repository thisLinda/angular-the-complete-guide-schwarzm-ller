import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-assignment',
  templateUrl: './directives-assignment.component.html',
  styleUrls: ['./directives-assignment.component.css']
})
export class DirectivesAssignmentComponent implements OnInit {
  showSecret = false
  log: Array<number> = []

  onToggleDetails() {
    this.showSecret = !this.showSecret
    this.log.push(this.log.length + 1)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
