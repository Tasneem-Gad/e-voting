import { Component, Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRepository } from 'src/app/domain/login/login.repository';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
  loginForm!:FormGroup;
  email!:FormControl;
  password!:FormControl;

  constructor(private formBuilder:FormBuilder,
    private loginRepository:LoginRepository,
    private router:Router){
    }

    ngOnInit(){
      this.initializedLoginForm();
    }

  initializedLoginForm() {
    this.loginForm = this.formBuilder.group({
      email: ['' , [Validators.required,Validators.email]],
      password:['' , [Validators.required]],
    });
    this.email=this.loginForm.controls['email'] as FormControl;
    this.password= this.loginForm.controls['password'] as FormControl;
  }

  login()
  {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }
    else{
    this.loginRepository.add(this.loginForm.value).subscribe(ـ=>{
      this.router.navigate(['/main']);
    });
  }
}

}
