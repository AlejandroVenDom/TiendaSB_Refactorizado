import { Component } from '@angular/core';
import { UseStateService } from '../../services/auth/use-state.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  username: string | null;
  role: string | null;

  constructor(private useStateService: UseStateService) {
    this.username = this.useStateService.getUsername();
    this.role = this.useStateService.getRole();
  }
}
