import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse,HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  public url:string;
  this.http.get('http://localhost/wordpress/wp-json/wp/v2/pages').
  constructor(private http: HttpClient) {
    this.url
   }
}
