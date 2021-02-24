import {Component, Input, OnInit, Output} from '@angular/core';
import {PostService} from '../../services/post.service';
import {HttpClient} from '@angular/common/http';
import {EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../models/Post';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input()
  post: Post;
  @Output()
  bubbleUp = new EventEmitter<Post>();
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.bubbleUp.emit(this.post);

  }

  showDetails(post: any): void {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute, state: post});

  }
}
