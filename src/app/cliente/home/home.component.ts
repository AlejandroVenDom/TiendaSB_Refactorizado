import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";



@Component({
  selector: 'app-home',
  imports: [HeaderClienteComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private router:Router,
  ){}

  iniciarSesion():void{
    this.router.navigate(['/login'])
  }

  registrarSesion():void{
    this.router.navigate(['/registro'])
  }
}
