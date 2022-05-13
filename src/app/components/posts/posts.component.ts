import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers:[PostService]
})
export class PostsComponent implements OnInit {
   public postList = new Array();
   public wordSearch = "";
  constructor( private postService: PostService) { }

  ngOnInit(): void {

    this.postService.getPosts().subscribe(
       result => {
         for( let clave in result){
           if(result.hasOwnProperty(clave)){
             this.postList.push(result[clave]);
           }
         }
         console.log(this.postList);
       },
       error =>{
         console.log(<any> error);
       }
    )
  }
  searchWord(){
    this.postList = [];

    this.postService.getPostsSearch(this.wordSearch).subscribe(
       result =>{
        for( let clave in result){
          if(result.hasOwnProperty(clave)){
            this.postList.push(result[clave]);
          }
        }
        console.log(this.postList);
      },
      error =>{
        console.log(<any> error);
      }

    )
  }

}
