import { Component, OnInit } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';
import { TokenService } from '../../services/auth/token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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

  perfilRoute():void{
    this.router.navigate(['/clientProfile']);
  }

  closeSession():void{
    this.popupService.loader(
      "Cerrando sesión",
      "Vuelva pronto"
    );

    this.tokenService.removeToken();
    this.userStateService.removeSession()
    setTimeout(() => {
      this.popupService.close()
      this.router.navigate(['/login']);
    }, 1500)
  }

  
}
