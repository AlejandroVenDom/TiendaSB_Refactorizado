import { Component } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';
import { PopupService } from '../../services/utils/popup.service';
import { TokenService } from '../../services/auth/token.service';
import { Router } from '@angular/router';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { ProductInterface } from '../../services/interfaces/auth';
import { CredentialsService } from '../../services/auth/credentials.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabNotificationComponent } from "../../backoffice/tabs/tab-notification/tab-notification.component";
import { FooterComponent } from "../../footer/footer.component";



@Component({
  selector: 'app-tienda',
  imports: [HeaderClienteComponent, CommonModule, FooterComponent],
  standalone: true,
  templateUrl: './tienda.component.html',
  styleUrl: './tienda.component.scss'
})
export class TiendaComponent implements OnInit {
  username: string|null;
  
  products: ProductInterface[] = [];  
  
  constructor(
    private tokenService: TokenService,
    private popupService: PopupService,
    private userStateService: UseStateService,
    private router: Router,
    private CRUD: CredentialsService
  ){
    this.username = this.userStateService.getUsername();
  }



  ngOnInit(): void {
    this.obtenerProducto();
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

  infoProductoRoute():void{
    this.router.navigate(['/info']);
  }

  obtenerProducto():void{
    this.CRUD.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: () => {
        console.log('Error al cargar los productos');
      }
    })
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
