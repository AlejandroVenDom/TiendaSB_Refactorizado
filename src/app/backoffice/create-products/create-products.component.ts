import { Component } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsService } from '../../services/auth/credentials.service';
import { ProductInterface } from '../../services/interfaces/auth';
import { TokenService } from '../../services/auth/token.service';
import { Router } from '@angular/router';
import { PopupService } from '../../services/utils/popup.service';


@Component({
  selector: 'app-create-products',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './create-products.component.html',
  styleUrl: './create-products.component.scss'
})
export class CreateProductsComponent {
  
  productRegisterForm: FormGroup;
  username:string|null;
  
  constructor(
    private formBuilder: FormBuilder,
    private sessionStorageUser: UseStateService,
    private credentialServices: CredentialsService,
    private tokenUser: TokenService,
    private router:Router,
    private popupService: PopupService
  ){
    
    this.productRegisterForm = this.formBuilder.group({
      name: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image:['',[Validators.required]],
      price:['',[Validators.required]],
      tax:['',[Validators.required]],
      currencyName:['',[Validators.required]]
    })
    this.username= this.sessionStorageUser.getUsername();
  }

  verProductos():void{
    this.router.navigate(['/app/productsBack'])
  }
  goBack():void{
    this.router.navigate(['app/productsBack'])
  }

  submit(){
    if(this.productRegisterForm.invalid){
      return;
    }

    this.credentialServices.registerProduct(this.productRegisterForm.value as ProductInterface, this.username!).subscribe({
  
      next: (data) => {
        console.log(data);
        
        this.popupService.loader("Subiendo producto...", "Espere un momento por favor");
        setTimeout(() => {
          let message;
          message="PRODUCTO CREADO";
          this.popupService.showMessage(
            'Producto creado exitosamente',
            message,
            "success"
          );
          this.popupService.close
        }, 1500);


      },
      error: err => {
        console.log(err)
        let message;
        message = "Error al crear producto";
        this.popupService.showMessage(
          'Ups no se ha podido crear el producto',message,'error'
        );
      }
    })

    
  }


}
