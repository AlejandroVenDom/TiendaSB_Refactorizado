import { Component } from '@angular/core';
import {StatsComponent} from '../control-panel-tabs/stats/stats.component';
import {GraphicsComponent} from '../control-panel-tabs/graphics/graphics.component';
import { FooterBackofficeComponent } from "../footer-backoffice/footer-backoffice.component";

@Component({
  selector: 'app-control-panel',
  imports: [
    StatsComponent,
    GraphicsComponent,
    FooterBackofficeComponent
],
  standalone: true,
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss'
})
export class ControlPanelComponent {

}
