import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
// Servicio de cookies
// Archivo importante si hay inicio de sesión, vale el mismo archivo
// en todos los proyectos
export class TokenService {

  // Variable privada de solo lectura
  private readonly ACCESS_TOKEN_KEY:string = 'tienda_token';

/**
 * La variable refresh sirve para que cuando el token llegue a su fin, es decir, se concluye su tiempo
 * de caducidad. El refresh se encargara de renovarlo para que el cliente no tenga que estar volviendo a iniciar
 * sesión en la página web.
 */

  private readonly REFRESH_TOKEN_KEY:string = 'tienda_refresh_token';



  constructor(
    private cookieService: CookieService,
  ) { }


  saveTokens(token:string, refreshToken:string){
    this.cookieService.set(this.ACCESS_TOKEN_KEY, token, {
      path: '/', // Damos permisos a donde pueda entrar el token
      secure: environment.tokenSecure, // En producción esto tiene que ser true, ahora estamos testing
      sameSite:"Strict" // Restringimos todo tipos de accesos
    })

    this.cookieService.set(this.REFRESH_TOKEN_KEY, refreshToken, {
      path: '/', // Damos permisos a donde pueda entrar el token
      secure: environment.tokenSecure, // En producción esto tiene que ser true, ahora estamos testing
      sameSite:"Strict" // Restringimos todo tipos de accesos
    })
  }

// Recogeremos los tokens 
  getAccessToken(){
    return this.cookieService.get(this.ACCESS_TOKEN_KEY);
  }

  getAccessRefreshToken(){
    return this.cookieService.get(this.REFRESH_TOKEN_KEY);
  }

  removeToken(){
    this.cookieService.delete(this.ACCESS_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict'); // En producción esto tiene que ser true
    this.cookieService.delete(this.REFRESH_TOKEN_KEY, '/', '', environment.tokenSecure, 'Strict'); // En producción esto tiene que ser true
  }
  

}
