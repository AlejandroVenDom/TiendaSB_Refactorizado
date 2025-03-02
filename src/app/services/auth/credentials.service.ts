import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LoginInterface,
  UserInterface,
  LoginResponse,
  RegisterResponse,
} from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  constructor(private http: HttpClient) {}

  login(credentials: LoginInterface): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${environment.apiUrl}/users/login`,
      credentials
    );
  }

  register(userData: UserInterface): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(
      `${environment.apiUrl}/users/register`,
      userData
    );
  }
}
