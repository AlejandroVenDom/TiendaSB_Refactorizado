import { Component } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-products',
  imports: [HeaderClienteComponent, FooterComponent],
  templateUrl: './client-products.component.html',
  styleUrl: './client-products.component.scss'
})
export class ClientProductsComponent {
  constructor(private router: Router) {}
  goToTienda():void {
    this.router.navigate(['/tienda']);
  }

  goToPay():void {
    this.router.navigate(['/payment']);
  }

}
