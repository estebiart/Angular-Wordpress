import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // posts: Array<Object> = [];
 /*  posts: any =[];*/
  constructor(private http: HttpClient){
      
  
}
/*/wp-json/wp/v2/pages*/
 ngOnInit(): void {
    /*   this.http.get('http://localhost/wordpress/wp-json/wp/v2/pages').subscribe(resultado => {
         console.log(resultado);
         let valores = Object.values(resultado);
         for(let i=0; i< valores.length; i++){
            console.log(valores[i].title.rendered);
            this.posts.push(valores[i]);
            console.log(this.posts[i].title);
            */
          }
          
         /*for (let clave in resultado)
         {
           if(resultado.hasOwnProperty(clave))
           {
               console.log(resultado);
               console.log(typeof(resultado));
               console.log(typeof(this.posts));
                this.posts.push(resultado[clave]);
               
           }
         }*//*
      
        
      } )
    }*/
}
