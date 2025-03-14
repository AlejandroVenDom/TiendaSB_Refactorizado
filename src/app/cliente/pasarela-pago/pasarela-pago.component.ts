import { Component } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pasarela-pago',
  imports: [HeaderClienteComponent, FooterComponent],
  templateUrl: './pasarela-pago.component.html',
  styleUrl: './pasarela-pago.component.scss'
})
export class PasarelaPagoComponent {
  constructor(private router: Router) {}
  goToTienda(): void {
    this.router.navigate(['/tienda']);
  }
  goToPay(): void {
    this.router.navigate(['/checkout']);
  }
}
