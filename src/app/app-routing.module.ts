import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { MainInfoComponent } from './pages/main-info/main-info.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'main',component:MainInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
