import { Component } from '@angular/core';
import {GraphicPrimeraCajaComponent} from '../graphic-primera-caja/graphic-primera-caja.component';
import {GraphicSegundaCajaComponent} from '../graphic-segunda-caja/graphic-segunda-caja.component';
import {GraphicTerceraCajaComponent} from '../graphic-tercera-caja/graphic-tercera-caja.component';
import { GraphicCuartaCajaComponent } from "../graphic-cuarta-caja/graphic-cuarta-caja.component";
import { GraphicQuintaCajaComponent } from "../graphic-quinta-caja/graphic-quinta-caja.component";
import { GraphicSextaCajaComponent } from "../graphic-sexta-caja/graphic-sexta-caja.component";

@Component({
  selector: 'app-graphics',
  imports: [
    GraphicPrimeraCajaComponent,
    GraphicSegundaCajaComponent,
    GraphicTerceraCajaComponent,
    GraphicCuartaCajaComponent,
    GraphicSextaCajaComponent
],
  standalone: true,
  templateUrl: './graphics.component.html',
  styleUrl: './graphics.component.scss'
})
export class GraphicsComponent {

}
