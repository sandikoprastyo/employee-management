import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import dataDummy from 'src/assets/dataDummy';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLogin: boolean = false;
  errMsg: string = '';
  user = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  onSubmit() {
    dataDummy.employee.map((el: any): any => {
      if (
        this.user.username === el.username &&
        this.user.password === el.password
      ) {
        this.isLogin = !this.isLogin;
        let navigationExtras: NavigationExtras = {
          state: {
            isLogin: this.isLogin
          }
        };
        this.router.navigateByUrl('/dashboard', navigationExtras);
      } else {
        return (this.errMsg = 'Please enter valid username or password');
      }
    });
  }
}
