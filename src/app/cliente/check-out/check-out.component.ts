import { Component } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  imports: [HeaderClienteComponent, FooterComponent],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {
  constructor(private router: Router) {}
  goToTienda(): void{
    this.router.navigate(['/payment']);
  }
}


