import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(
    private _matdialog: MatDialog,
  ) { }

  menuItems = [
    {
      label: 'Login',
      tooltipOptions: {
        tooltipLabel: "Login",
        tooltipPosition: "right",
      },
      // icon: "assets/img/signin_white.png",
      icon:"pi pi-sign-in",
      command: () => {
        this.Logout();
      }
    },
    {
      label: 'Sign Up',
      tooltipOptions: {
        tooltipLabel: "Sign Up",
        tooltipPosition: "right",
      },
      // icon: "assets/img/home_white.png",
      icon: "pi pi-sign-in",
      command: () => {
        this.Logout();
      } 
    },
    {
      label: 'Reset Password',
      tooltipOptions: {
        tooltipLabel: "Reset Password",
        tooltipPosition: "right",
      },
      // icon: "assets/img/logout_white.png",
      icon:"pi pi-refresh",
      command: () => {
        this.Logout();
      }
    },
    {
      label: 'Unlock Account',
      tooltipOptions: {
        tooltipLabel: "Unlock Account",
        tooltipPosition: "right",
      },
      // icon: "assets/img/logout_white.png",
      icon:"pi pi-unlock",
      command: () => {
        this.Logout();
      }
    },
  ];


  async Logout() {
    // this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  async GoHome() {
    // window.location.replace(this.OktaConfigService.strPostLogoutURL);
  }
}
