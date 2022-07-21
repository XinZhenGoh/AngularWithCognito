import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponent } from './userdashboard/profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LeftNagivationPaneComponent } from './userdashboard/left-nagivation-pane/left-nagivation-pane.component';
import {UserdashboardModule} from "./userdashboard/userdashboard.module";
import {MatSidenavModule} from "@angular/material/sidenav";

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    UserdashboardModule,
    MatSidenavModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
