import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { LoginRepository } from 'src/app/domain/login/login.repository';
import { User } from 'src/app/domain/login/models/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private loginRepository:LoginRepository,
    private authService:AuthService,
    private router:Router){}

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
    this.loginRepository.add(this.loginForm.value).subscribe((response)=>{
      this.authService.setToken(response.accessToken);
  })
  }
}
}
