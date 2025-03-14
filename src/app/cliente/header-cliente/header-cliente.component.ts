import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopupService } from '../../services/utils/popup.service';
import {  TokenService } from '../../services/auth/token.service';
import { UseStateService } from '../../services/auth/use-state.service';

@Component({
  selector: 'app-header-cliente',
  imports: [],
  standalone: true,
  templateUrl: './header-cliente.component.html',
  styleUrl: './header-cliente.component.scss'
})
export class HeaderClienteComponent {
  username: string|null ;
  constructor(
    private router: Router,
    private popupService: PopupService,
    private tokenService: TokenService,
    private userStateService: UseStateService
  ) {
    this.username = userStateService.getUsername();
  }

  goToHome():void{
    this.router.navigate(['/tienda']);  
  }

  goToProfile(): void {
    this.router.navigate(['/clientProfile']);
  }

  goToProducts():void{
    this.router.navigate(['/clientProducts'])
  }

  closeSession():void{
    this.popupService.loader(
      "CERRANDO SESIÓN",
      "Hasta pronto "+ this.username
    );

    this.tokenService.removeToken();
    this.userStateService.removeSession()
    setTimeout(() => {
      this.popupService.close()
      this.router.navigate(['/login']);
    }, 1500)
  }
} 
