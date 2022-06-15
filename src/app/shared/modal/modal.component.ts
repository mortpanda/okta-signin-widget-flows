import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service/data.service';
import { Subject, BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import {OktaWidgetService} from '../okta/okta-widget.service';
import { ViewEncapsulation } from '@angular/core';
import {OktaConfigService} from '../okta/okta-config.service';
import { Router, Routes, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {
  selectedMessage: any;
  constructor(
    private DataService: DataService,
    private OktaWidgetService:OktaWidgetService,
    private OktaConfigService:OktaConfigService,
    private Router:Router,
  ) { }

  async ngOnInit() {
    this.DataService.currentMessage.subscribe(message => (this.selectedMessage = message));
    // alert(this.selectedMessage)

    await this.OktaWidgetService.CloseWidget();
    // await this.OktaWidgetService.login(this.selectedMessage);
    await this.OktaWidgetService.login(this.selectedMessage);
  }

  GoBack(){
     window.location.replace(this.OktaConfigService.strPostLogoutURL)
    
  }
  

}
