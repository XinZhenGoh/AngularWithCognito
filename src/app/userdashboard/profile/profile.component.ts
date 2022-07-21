import { Component, OnInit } from '@angular/core';

import { IUser, CognitoService } from '../../cognito.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  loading: boolean;
  user: IUser;
  isAuthenticated: boolean;

  constructor(private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
    this.isAuthenticated = false;
  }

  public ngOnInit(): void {
    this.cognitoService.getUser()
      .then((user: any) => {
        this.user = user.attributes;
      });
    this.cognitoService.isAuthenticated().then((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

}
