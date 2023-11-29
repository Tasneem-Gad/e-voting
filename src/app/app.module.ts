import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfigService } from './core/services/config.service';
import { HeaderComponent } from './core/layout/header/header.component';
import { MatIconModule } from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './core/layout/footer/footer.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import{MatSelectModule} from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { SharedFormComponent } from './pages/shared-form/shared-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { CookieService } from 'ngx-cookie-service';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from './pages/shared.module';
import { RouterModule } from '@angular/router';

export function configServiceFactory(
  config: ConfigService
): () => Promise<boolean> {
  return (): Promise<boolean> => config.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    RouterModule
    ],
  providers: [
    ConfigService,
    CookieService,
    {
      provide: APP_INITIALIZER,
      useFactory: configServiceFactory,
      deps: [ConfigService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
