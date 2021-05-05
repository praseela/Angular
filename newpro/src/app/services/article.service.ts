import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(public http: HttpClient) { }
  getDetails() {

    return this.http.get("http://localhost:8080/spring-app/article/details");
    }
    
    register(data: any) {
    
    return this.http.post(" http://localhost:8080/spring-app/article/add", data ,{responseType:'text'});
    
    
    }
    
    deletedata(data: any)
    {
    
    
    return this.http.delete(" http://localhost:8080/spring-app/article/"+data);
    
    }




}
