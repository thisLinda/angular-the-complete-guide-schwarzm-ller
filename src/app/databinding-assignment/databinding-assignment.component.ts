import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-assignment',
  templateUrl: './databinding-assignment.component.html',
  styleUrls: ['./databinding-assignment.component.css']
})
export class DatabindingAssignmentComponent implements OnInit {

  createNewUser = false;
  userNameCreationStatus = "The user name was deleted after click!"
  userName = ''

  constructor() {
    setTimeout(() => {
      this.createNewUser = true;
    }, 3000)
   }

  ngOnInit() {
  }

  // not needed for assignment
  // onCreateUser() {
  //   this.userNameCreationStatus = "Username was created! Username is " + this.userName + " and  dammit, I did it--well I did it opposite but still a victory!"
  // }

  // onUpdateUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value
  // }

}