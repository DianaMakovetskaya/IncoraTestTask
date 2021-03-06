import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import {RouterModule} from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostComponent } from './components/post/post.component';
import { UserPostComponent } from './components/user-post/user-post.component';
import { PostInfoComponent } from './components/post-info/post-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    AuthComponent,
    AllPostsComponent,
    UserPostsComponent,
    PostComponent,
    UserPostComponent,
    PostInfoComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
      RouterModule.forRoot([
        {
          path: '', redirectTo: 'auth/login', pathMatch: 'full'
        },
        {
          path: 'auth', component: AuthComponent, children: [{
            path: 'login', component: LoginComponent
          }]
        },
        {
          path: 'main', component: MainComponent, children: [{
            path: 'AllPosts', component: AllPostsComponent, children: [{
              path: ':id', component: PostInfoComponent
            }]
          }, {
            path: 'UserPosts', component: UserPostsComponent, children : [{
              path: ':id', component: PostInfoComponent
            }]

          }
           ]
        }]),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
