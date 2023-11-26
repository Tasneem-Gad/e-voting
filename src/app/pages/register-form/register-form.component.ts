import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterRepository } from 'src/app/domain/register/register.repository';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm!: FormGroup;
  confirmPass:boolean=false;

  constructor(private formBuilder : FormBuilder,private registerRepository:RegisterRepository) {

  }
  ngOnInit(): void {
  this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['' , [Validators.required,Validators.email]],
      password: ['' , [Validators.required]],
      confirmPassword: ['' , [Validators.required]],
    });
  }
  addUser(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{
    this.confirmPassword();
    if(this.confirmPass==true){
    this.registerRepository.add(this.registerForm.value).subscribe();
    }
    else if(this.confirmPass==false){
      alert("please enter correct passwords");
    }
  }
  }
  confirmPassword(){
    if (this.registerForm.controls['password'].value==this.registerForm.controls['confirmPassword'].value) {
      this.confirmPass=true;
    }
    else{
      this.confirmPass=false;
    }
  }

}
