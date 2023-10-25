import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

 login() {
   this.userService.login(this.email, this.password).subscribe(
    (data: any) => {
    if(data.access_token !== undefined) {
        localStorage.setItem('token', data.access_token);
        this.router.navigate(['/']);
    }
   }, (error) => {
    alert(error.message);
  });
  }
}
 