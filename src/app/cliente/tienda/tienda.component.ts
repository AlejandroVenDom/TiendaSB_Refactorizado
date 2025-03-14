import { Component } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';
import { TokenService } from '../../services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  imports: [],
  standalone: true,
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent {
  username: string|null;
  
  constructor(
    private tokenService: TokenService,
    private popupService: PopupService,
    private userStateService: UseStateService,
    private router: Router
  ){
    this.username = this.userStateService.getUsername();
  }

  homeRoute():void{
    this.router.navigate(['/']);
  }

  carritoRoute():void{
    this.router.navigate(['/clientProducts']);
  }

  perfilRoute():void{
    this.router.navigate(['/clientProfile']);
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
