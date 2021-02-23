import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: any = {
    login: '',
    password: '',
  };

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  login(): void {
    const user = this.userService.login(this.loginForm.login);
    if (user != null){
      this.router.navigate(['/main'], {relativeTo: this.activatedRoute, state: user});
    }
  }
}
