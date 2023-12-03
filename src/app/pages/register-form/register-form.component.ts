import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterRepository } from 'src/app/domain/register/register.repository';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
  registerForm!: FormGroup;
  username!:FormControl;
  email!:FormControl;
  password!:FormControl;
  confirmPassword!:FormControl;

  constructor(private formBuilder : FormBuilder,
    private registerRepository:RegisterRepository,
    private router:Router) {

  }
  ngOnInit(): void {
  this.initializeRegisterForm();
  }

  initializeRegisterForm() {
    this.registerForm = this.formBuilder.group({
      email: ['' , [Validators.required,Validators.email]],
      password: ['' , [Validators.required]],
      confirmPassword: ['' , [Validators.required]],
    },
    {
      validators:this.passwordMatchValidator
    });
    this.email=this.registerForm.controls['email'] as FormControl;
    this.password= this.registerForm.controls['password'] as FormControl;
    this.confirmPassword=this.registerForm.controls['confirmPassword'] as FormControl;
  }
  passwordMatchValidator(control:AbstractControl){
    return control.get('password')?.value === control.get('confirmPassword')?.value
    ?null:{mismatch:true};
  }
  addUser(){
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
    }
    else{
      const registerDate={...this.registerForm.value};
      delete registerDate.confirmPassword;
      this.registerRepository.add(registerDate).subscribe(_=>{
          this.router.navigate(['/login']);
      });
      }
  }

}
