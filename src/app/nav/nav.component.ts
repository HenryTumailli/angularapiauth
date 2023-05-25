import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitters/emitters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{

  constructor(
    private http:HttpClient
  ){}

  authenticated = false
  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean) =>{
        this.authenticated = auth
      }
    )
  }

  logout():void{
    this.http.post('http://localhost:8000/api/logout',{},{withCredentials:true})
    .subscribe(
      ()=>{
        this.authenticated = false
      }
    )
  }
}
