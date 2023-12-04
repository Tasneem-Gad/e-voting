import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttachmentComponent } from './pages/attachment/attachment.component';
import { ConfirmationComponent } from './pages/confirmation/confirmation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EducationComponent } from './pages/education/education.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { MainInfoComponent } from './pages/main-info/main-info.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'login',component:LoginFormComponent},
  {path:'register',component:RegisterFormComponent},
  {path:'main',component:MainInfoComponent},
  {path:'contact',component:ContactComponent},
  {path:'education',component:EducationComponent},
  {path:'attachment',component:AttachmentComponent},
  {path:'confirmation',component:ConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
