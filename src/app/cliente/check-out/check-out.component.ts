import { Component } from '@angular/core';
import { HeaderClienteComponent } from "../header-cliente/header-cliente.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CheckOutPayPalComponent } from "../check-out-pay-pal/check-out-pay-pal.component";

@Component({
  selector: 'app-check-out',
  imports: [HeaderClienteComponent, FooterComponent, NgIf, ReactiveFormsModule, CheckOutPayPalComponent],
  standalone: true,
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.scss'
})
export class CheckOutComponent {

  checkOutForm: FormGroup;
  showPayPalButton = false;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.checkOutForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }
  goToTienda(): void{
    this.router.navigate(['/payment']);
  }

  getPay():void{
    if(this.checkOutForm.valid){
        return;
      }
    this.showPayPalButton = true;
  }
}


