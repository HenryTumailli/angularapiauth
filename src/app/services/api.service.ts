import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  //api_url = 'https://djangoapiauth.onrender.com/'
  //api_url = 'http://localhost:8000/'
  api_url = 'http://15.229.0.243:8000/'

  login(form:any){
    this.http.post(this.api_url+'api/login',form, {withCredentials: true})
      .subscribe(res =>{
        console.log(res);
        //document.cookie = "jwt="+JSON.parse(JSON.stringify(res)).jwt+"; max-age=3600; path=/";
        this.router.navigate(['/'])
      })
  }

  register(form:any){
    this.http.post(this.api_url+'/api/register', form)
    .subscribe( () => {this.router.navigate(['/login']) })
  }
}
