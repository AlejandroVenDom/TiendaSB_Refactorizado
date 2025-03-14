import { Component } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';
import { Router } from '@angular/router';
import { PopupService } from '../../services/utils/popup.service';
import { TokenService } from '../../services/auth/token.service';

@Component({
  selector: 'app-profile-client',
  imports: [],
  templateUrl: './profile-client.component.html',
  styleUrl: './profile-client.component.scss'
})
export class ProfileClientComponent {
  username: string | null;
    role: string | null;
    firstName: string | null ;
    lastName: string | null;
    Address: string | null ;
  
  
    constructor(
      private useStateService: UseStateService, 
      private router:Router,
      private popupService: PopupService,
      private tokenService: TokenService,
      private userStateService: UseStateService
    ) {
      this.username = this.useStateService.getUsername();
      this.role = this.useStateService.getRole();
      this.firstName = this.useStateService.getFirstName();
      this.lastName = this.useStateService.getLastName();
      this.Address = this.useStateService.getAddress();
    
    }

    verMisProductos():void{
      this.router.navigate(['/clientProducts'])
    }
  
    backHome():void{
      this.router.navigate(['/tienda'])
    }
  
    closeSession(): void {
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
