import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  LoginInterface,
  ProductInterface,
  UserInterface,

} from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class CredentialsService {
  constructor(
    private http: HttpClient,
  ) { }

  login(credentials: LoginInterface): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/login`, credentials)
  }


  register(userData: UserInterface): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}/users/register`, userData)
  }

  registerProduct(productData: ProductInterface, username:string):Observable<any>{
    const body = {
      ...productData,
      userName: username
    }
    return this.http.post<any>(`${environment.apiUrl}/products/registerProduct`, body)
  }

  getAllProducts():Observable<ProductInterface[]>{
    return this.http.get<ProductInterface[]>(`${environment.apiUrl}/products`)

  }

}
