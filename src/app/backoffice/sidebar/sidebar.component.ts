import {Component, OnInit} from '@angular/core';
import {SidebarStatusService} from '../../services/status/sidebar-status.service';
import {UseStateService} from '../../services/auth/use-state.service';
import {PopupService} from '../../services/utils/popup.service';
import {TokenService} from '../../services/auth/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

  username:string|null;
  isActiveMenuHeader: boolean = true;
  constructor(
    private sidebarStatusService: SidebarStatusService,
    private tokenService: TokenService,
    private popupService: PopupService,
    private userStateService: UseStateService,
    private router: Router,
  )
  {
    this.username = this.userStateService.getUsername();

  }

  ngOnInit(): void {
    this.sidebarStatusService.status$.subscribe(status => {
      this.isActiveMenuHeader = status;
    })
  }

  profileAdminSeller():void{
    this.router.navigate(['/app/profile']);
  }

  mainPage():void{
    this.router.navigate(['/app/control-panel']);
  }

  verMisProductos():void{
    this.router.navigate(['/app/productsBack']);
  }

  closeSession(): void {

    
    this.popupService.loader(
      "CERRANDO SESIÓN",
      'VUELVE PRONTO '+ this.username
    );

    this.tokenService.removeToken();
    this.userStateService.removeSession()
    setTimeout(() => {
      this.popupService.close()
      this.router.navigate(['/login']);
    }, 1500)
  }

}
