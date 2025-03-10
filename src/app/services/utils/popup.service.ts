import { Injectable } from '@angular/core';
import Swal from "sweetalert2";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  showMessage(title: string, message: string,
              icon: 'success' | 'warning' | 'error' | 'info' | 'question' = 'info'): void {
    Swal.fire({
      title: title,
      text: message,
      icon: icon,
      confirmButtonText: "Cerrar notificación",
      confirmButtonColor: '#3085d6', // Botón de confirmación con color llamativo
      background: '#f7f7f7', // Fondo del popup
      backdrop: 'rgba(0, 0, 0, 0.7)', // Sombra de fondo
      customClass: {
        popup: 'animate__animated animate__zoomIn', // Animación
        title: 'text-uppercase font-weight-bold', // Estilo de título
      },
      timer: 5000, // Popup se cierra automáticamente después de 5 segundos
    });
  }

  loader(title: string = "Cargando...", message: string = ''): void {
    Swal.fire({
      title: title,
      text: message,
      allowEscapeKey: false,
      didOpen() {
        Swal.showLoading();
      },
      customClass: {
        popup: 'animate__animated animate__fadeIn' // Animación de entrada
      },
      background: '#343a40', // Fondo oscuro
      color: '#fff', // Color del texto
      timer: 2000, // Cierra el loader después de 2 segundos
    });
  }

  async showConfirmation(
    title: string, message: string, confirmButtonText: string = "Aceptar", cancelButtonText: string = "Cancelar",
  ): Promise<boolean> {
    const result = await Swal.fire({
      title: title,
      text: message,
      icon: "question",
      confirmButtonText: confirmButtonText,
      cancelButtonText: cancelButtonText,
      confirmButtonColor: '#28a745', // Color del botón Aceptar
      cancelButtonColor: '#dc3545', // Color del botón Cancelar
      showCancelButton: true,
      customClass: {
        popup: 'animate__animated animate__fadeInUp', // Animación de entrada
        title: 'font-weight-bold', // Estilo de título
      },
      backdrop: 'rgba(0, 0, 0, 0.5)', // Fondo oscuro
    });

    return result.isConfirmed;
  }

  close(): void {
    Swal.close();
  }
}
