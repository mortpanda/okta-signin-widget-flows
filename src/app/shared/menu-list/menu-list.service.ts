import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {ModalComponent} from '../modal/modal.component';
import { OktaConfigService } from '../okta/okta-config.service';
import { DataService } from '../data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import {OktaWidgetService} from '../okta/okta-widget.service';

@Injectable({
  providedIn: 'root'
})
export class MenuListService {

  constructor(
    private _matdialog: MatDialog,
    private ModalComponent:ModalComponent,
    private DataService: DataService,
    private OktaWidgetService:OktaWidgetService,
  ) { }

  menuItems = [
    {
      label: 'Login',
      tooltipOptions: {
        tooltipLabel: "Login",
        tooltipPosition: "right",
      },
      icon:"pi pi-sign-in",
      command: () => {
        this.OpenWidget('login');
      }
    },
    {
      label: 'Sign Up',
      tooltipOptions: {
        tooltipLabel: "Sign Up",
        tooltipPosition: "right",
      },
      icon: "pi pi-sign-in",
      command: () => {
        this.OpenWidget('signup');
      } 
    },
    {
      label: 'Reset Password',
      tooltipOptions: {
        tooltipLabel: "Reset Password",
        tooltipPosition: "right",
      },
      icon:"pi pi-refresh",
      command: () => {
        this.OpenWidget('resetPassword');
      }
    },
    {
      label: 'Unlock Account',
      tooltipOptions: {
        tooltipLabel: "Unlock Account",
        tooltipPosition: "right",
      },
      icon:"pi pi-unlock",
      command: () => {
        this.OpenWidget('unlockAccount');
      }
    },
  ];


  async Logout() {
    // this.OktaSDKAuthService.OktaSDKAuthClient.signOut();
  }

  
  async OpenWidget(flow) {
    await this.OktaWidgetService.CloseWidget();
    await this.DataService.changeMessage(flow);
    const DialogConfig = new MatDialogConfig();
    DialogConfig.disableClose = true;
    DialogConfig.id = "widget-modal-component";
    DialogConfig.height = "auto";
    DialogConfig.width = "auto";
    const modalDialog = await this._matdialog.open(ModalComponent, DialogConfig);
  }
}
