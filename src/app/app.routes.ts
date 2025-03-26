import {Routes} from '@angular/router';
import {LayoutComponent} from './cliente/layout/layout.component';
import {LayoutBackComponent} from './backoffice/layout/layout.component';
import {HomeComponent} from './cliente/home/home.component';
import {LoginComponent} from './cliente/login/login.component';
import {RegistroComponent} from './cliente/registro/registro.component';
import {TiendaComponent} from './cliente/tienda/tienda.component';
import {ControlPanelComponent} from './backoffice/control-panel/control-panel.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { authGuard } from './services/guards/auth.guard';
import { publicGuard } from './services/guards/public.guard';
import { ProfileComponent } from './backoffice/profile/profile.component';
import { roleAuthGuard } from './services/guards/role-auth.guard';
import { ProfileClientComponent } from './cliente/profile-client/profile-client.component';
import { ClientProductsComponent } from './cliente/client-products/client-products.component';
import { ProductsBackofficeComponent } from './backoffice/products-backoffice/products-backoffice.component';
import { CreateProductsComponent } from './backoffice/create-products/create-products.component';
import { ProductInfoComponent } from './cliente/product-info/product-info.component';
import { PasarelaPagoComponent } from './cliente/pasarela-pago/pasarela-pago.component';
import { CheckOutComponent } from './cliente/check-out/check-out.component';



export const routes: Routes = [

  // cliente
  // localhost:4200 -> www.ejemplo.com
  {
    path: "", component: LayoutComponent, children: [ // -> www.ejemplo.com
      {path: "", component: HomeComponent}, // -> www.ejemplo.com
      {path: "login", component: LoginComponent, canActivate: [publicGuard]}, // -> www.ejemplo.com/login
      {path: "registro", component: RegistroComponent, canActivate: [publicGuard]}, // -> www.ejemplo.com/registro
      {path: "tienda", component: TiendaComponent}, // www.ejemplo.com/tienda
      { path: "clientProfile", component: ProfileClientComponent },
      { path: "clientProducts", component: ClientProductsComponent },
      {path:"info", component: ProductInfoComponent},
      {path:"payment", component: PasarelaPagoComponent},
      {path:"checkout", component: CheckOutComponent},
      
    ]
  },
  // backoffice
  // www.ejemplo.com/app
  {
    path: "app", canActivate: [authGuard,roleAuthGuard], component: LayoutBackComponent, children: [ // -> www.ejemplo.com/app
      // www.ejemplo.com/app -> no hay parámetros después del app, por lo tanto angular buscar dentro de esta sección de children el path que esté vacío ""

      {path: "", redirectTo: "control-panel", pathMatch: "full"}, // -> www.ejemplo.com/app
      {path: "control-panel", component: ControlPanelComponent}, // -> www.ejemplo.com/app/control-panel
      { path : "profile", component: ProfileComponent },
      { path: "productsBack", component: ProductsBackofficeComponent },
      {path: "createProducts", component: CreateProductsComponent}
    ]
  },

  // Si el usuario introduce una url que no existe en la parte superior
  {path: "**", component: PageNotFoundComponent},
];
















