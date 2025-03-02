import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CredentialsService} from '../../services/auth/credentials.service';
import {LoginInterface} from '../../services/interfaces/auth';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }


  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        console.log(data);
        alert("Bienvenido de vuelta");
      },
      error: err => {
        console.log(err);
        alert("Credenciales incorrectas, usted no esta registrado cholo de mierda, registrese negro");
      }
    })
  }

}
