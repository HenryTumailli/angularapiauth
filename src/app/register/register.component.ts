import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form!: FormGroup

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ){}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      name: '',
      email: '',
      password: ''
    })
    
  }

  submit(): void{
    //console.log(this.form.getRawValue());
    this.apiService.register(this.form.getRawValue())
    /*this.http.post('https://djangoapiauth.onrender.com/api/register', this.form.getRawValue())
      .subscribe( () => {this.router.navigate(['/login']) })*/
  }
}
