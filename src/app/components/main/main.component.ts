import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/User';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
user: User;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
  }

  logOut(): void {
    this.router.navigate(['/auth/login'], {relativeTo: this.activatedRoute});

  }

  goToUserPosts(): void {
    this.router.navigate(['/main/UserPosts'], {relativeTo: this.activatedRoute, state: this.user});
  }

  goToAllPosts(): void {
    this.router.navigate(['/main/AllPosts'], {relativeTo: this.activatedRoute, state: this.user});
  }
}
