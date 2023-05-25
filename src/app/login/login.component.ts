import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private apiService: ApiService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: '',
      password: ''
    })
  }

  submit():void{
    this.apiService.login(this.form.getRawValue())
  }
}
