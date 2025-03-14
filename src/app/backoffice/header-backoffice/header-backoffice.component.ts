import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {TabNotificationComponent} from '../tabs/tab-notification/tab-notification.component';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {SettingsComponent} from '../tabs/settings/settings.component';
import { Router } from '@angular/router';
import { UseStateService } from '../../services/auth/use-state.service';

@Component({
  selector: 'app-header-backoffice',
  imports: [
    NgIf,
    TabNotificationComponent,
    SettingsComponent,
  ],
  standalone: true,
  templateUrl: './header-backoffice.component.html',
  styleUrl: './header-backoffice.component.scss'
})
export class HeaderBackofficeComponent {

  username: string|null;
  isActive: boolean = false;

  // Variables de tabs

  isActiveItems: any = {
    isActiveNotification: false,
    isActiveSettings: false,
  }

  constructor(
    private sidebarStatusService: SidebarStatusService,
    private router: Router,
    private sessionStorage: UseStateService
  ) {
    this.username = this.sessionStorage.getUsername();
  }

  // isActiveNotification: boolean = false;

  toggleLogo() {
    this.isActive = !this.isActive;
    this.sidebarStatusService.changeStatus(this.isActive);
  }

  toggleItem(option: string) {
    if (this.isActiveItems[option]) {
      this.isActiveItems[option] = false;
    }
    else {
      Object.keys(this.isActiveItems).forEach((item) => {
        this.isActiveItems[item] = false;
      })
      this.isActiveItems[option] = true;
    }
  }

  goToProfile():void{
    this.router.navigate(['/app/profile']);
  }

}
