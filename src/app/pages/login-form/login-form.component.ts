import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRepository } from 'src/app/domain/login/login.repository';
import { User } from 'src/app/domain/login/models/user';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private loginRepository:LoginRepository,
    private router:Router,
    private http:HttpClient){}

    ngOnInit(){
      this.initializedLoginForm();
    }

  initializedLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['' , [Validators.required,Validators.email]],
      password: ['' , [Validators.required]],
    });
  }

  login()
  {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else{
    this.loginRepository.add(this.loginForm.value).subscribe(ـ=>{
      this.router.navigate(['/home']);
    });


  }
}

}
