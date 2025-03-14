import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { CredentialsService } from '../../services/auth/credentials.service';
import { ProductInterface } from '../../services/interfaces/auth';
import { UseStateService } from '../../services/auth/use-state.service';
import { FooterBackofficeComponent } from "../footer-backoffice/footer-backoffice.component";

@Component({
  selector: 'app-products-backoffice',
  standalone: true,  // 📌 Importante para componentes standalone
  imports: [CommonModule, RouterModule, FooterBackofficeComponent],  // 📌 Importar los módulos necesarios
  templateUrl: './products-backoffice.component.html',
  styleUrls: ['./products-backoffice.component.scss']
})
export class ProductsBackofficeComponent implements OnInit {
  products: ProductInterface[] = [];
  username: string | null;

  constructor(
    private router: Router,
    private crudProducts: CredentialsService,
    private sessionStorage: UseStateService
  ) {
    this.username = this.sessionStorage.getUsername();
  }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    this.crudProducts.getAllProducts().subscribe({
      next: (data) => {
        this.products = data;
        console.log(this.products);
      },
      error: () => {
        console.log('Error al cargar los productos');
      }
    });
  }

  crearProducto(): void {
    this.router.navigate(['/app/createProducts']);
  }

  goBack(): void {
    this.router.navigate(['/app/control-panel']);
  }
}
