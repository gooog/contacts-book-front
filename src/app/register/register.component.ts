import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router) {}

  email: string = '';
  password: string = '';

  register() {
    this.userService.register(this.email, this.password).subscribe(
      (data: any) => {
          this.router.navigate(['/login']);
     }, (error) => {
      alert(error.message);
    });
   }

}
