import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {PostsComponent}from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/post',
    pathMatch:'full'
  },
  {
    path: 'post',
    component:PostsComponent
  },
  {
    path:'post/add',
    component:PostsComponent
  },
  {
    path:'post/edit/:id',
    component:PostsComponent
  },
  {
    path:'post/:id',
    component:PostsComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
