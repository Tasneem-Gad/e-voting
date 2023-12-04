import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { SharedFormComponent } from './shared-form/shared-form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainInfoComponent } from './main-info/main-info.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
  declarations: [
    RegisterFormComponent,
    SharedFormComponent,
    LoginFormComponent,
    MainInfoComponent,
    ContactComponent,
    EducationComponent,
    AttachmentComponent,
    ConfirmationComponent,
  ],
  imports: [
    HttpClientModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    CommonModule,
    RouterModule
    ],
    providers: [],
    exports:[
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      CommonModule
    ]

})
export class SharedModule{}
