import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {CognitoService, IUser} from './cognito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean;
  user: IUser;

  constructor(private router: Router,
              private cognitoService: CognitoService) {
    this.user = {} as IUser;
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
      .then((user: any) => {
        this.user = user.attributes;
      });
    this.cognitoService.isAuthenticated()
      .then((success: boolean) => {
        this.isAuthenticated = success;
      });
  }

  public signOut(): void {
    this.cognitoService.signOut()
      .then(() => {
        this.router.navigate(['/signIn']);
      });
  }

}
