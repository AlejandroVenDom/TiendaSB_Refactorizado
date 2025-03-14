import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialsService } from '../../services/auth/credentials.service';
import { ProductInterface } from '../../services/interfaces/auth';
import { OnInit } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';

@Component({
  selector: 'app-products-backoffice',
  imports: [],
  templateUrl: './products-backoffice.component.html',
  styleUrl: './products-backoffice.component.scss'
})
export class ProductsBackofficeComponent implements OnInit{
  products: ProductInterface[]=[];
  username: string|null;

  constructor(
    private router: Router,
    private crudProducts: CredentialsService,
    private sessionStorage: UseStateService
  ){
    this.username = this.sessionStorage.getUsername();
  }
  ngOnInit():void{
    this.obtenerProducto();
  }

  obtenerProducto():void{
    this.crudProducts.getAllProducts().subscribe({
      next:(data) =>{
        this.products = data.filter(product => product.userName === this.username);
        console.log(this.products);
      },
      error: (err)=>{
        console.log("error al cargar los productos")
      }
    })
  }

  crearProducto(): void{
    this.router.navigate(['/app/createProducts']);

  }

  goBack():void{
  this.router.navigate(['/app/control-panel']);
  }

  
}