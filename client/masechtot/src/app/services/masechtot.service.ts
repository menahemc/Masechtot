import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasechtotService {

  constructor(private http: HttpClient) { }
  getProjectsByUserId(){
    var projs;
    this.http.get("http://localhost:3000/users").subscribe(x=>console.log(x));
    alert();
    return this.http.get("http://localhost:3000/users");
  }
}
