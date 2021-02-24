import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../models/Post';


@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  userId: number;
  posts: Post[];
  createPostFormActive = false;
  postsLength: number;
  createPostForm: any = {
    title: '',
    body: '',
  };

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.userId = this.router.getCurrentNavigation().extras.state.id;
    });
  }

  ngOnInit(): void {
    this.postService.getUserPosts(this.userId).subscribe(value => {
      this.posts = value;
      this.postsLength = value.length;
    });
  }
  getBubble(post: Post): void {
    this.deletePost(post);
  }
   deletePost(post): void {
    this.posts = this.posts.filter(value => value.id !== post.id);

   }
  createPost(): void{
    this.postsLength += 1;
    this.posts.push({
      id: this.postsLength,
      title: this.createPostForm.title,
      body: this.createPostForm.body
    });
    this.createPostFormActive = false;
  }
  makeFormVisible(): void {
    this.createPostFormActive = true;
  }
}
