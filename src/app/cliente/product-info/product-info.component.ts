import { Component } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  imports: [HeaderClienteComponent, FooterComponent],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.scss'
})
export class ProductInfoComponent {
  constructor(private router: Router) {}
  goToTienda():void{
    this.router.navigate(['/tienda']);
  }

  goToCarrito():void{
    this.router.navigate(['/clientProducts']);
  }

}
