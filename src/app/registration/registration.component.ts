import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: any = {};

  constructor(private userService: UserService) {}

  register() {
    this.userService.registerUser(this.user).subscribe(
      (      response: any) => {
        console.log('Registration successful', response);
        // Redirect to login or home page
      },
      (      error: any) => {
        console.error('Registration failed', error);
      }
    );
  }
}
