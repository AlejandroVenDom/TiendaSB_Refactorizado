import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, NgxPayPalModule } from 'ngx-paypal';
import { NgIf } from '@angular/common';
import { environment } from '../../../environments/environment';
import { ICreateOrderRequest } from 'ngx-paypal';

@Component({
  selector: 'app-check-out-pay-pal',
  imports: [NgxPayPalModule, NgIf],
  standalone: true,
  templateUrl: './check-out-pay-pal.component.html',
  styleUrl: './check-out-pay-pal.component.scss',
})
export class CheckOutPayPalComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  public isSdkReady = false;

  price: string = '49.99';

  ngOnInit(): void {
    this.loadPayPalSDK()
      .then(() => {
        this.isSdkReady = true;
        this.initConfig(this.price);
      })
      .catch((error) => console.error('Error cargando PayPal', error));
  }

  private loadPayPalSDK(): Promise<void> {
    return new Promise((resolve) => {
      if ((window as any).paypal) {
        resolve();
      } else {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=${environment.PAYPAL_CLIENT_ID}&currency=EUR`;
        script.onload = () => resolve();
        script.onerror = () => console.error('Error al cargar PayPal SDK');
        document.body.appendChild(script);
      }
    });
  }

  private convertEUR(pricePEN: string): string {
    const priceUSD = (parseFloat(pricePEN)).toFixed(2);
    return priceUSD.toString();
  }
 
  private initConfig(price: string): void {
    // @ts-ignore
    const priceValueEUR = this.convertPENtoUSD(price);

    this.payPalConfig = {
      currency: 'EUR',
      clientId: environment.PAYPAL_CLIENT_ID,
      advanced: { commit: 'true' },
      createOrderOnClient: (data) =>
        <ICreateOrderRequest>{
          purchase_units: [
            {
              description: `Compra del producto:`,
              amount: {
                currency_code: 'EUR',
                value: priceValueEUR,
              },
            },
          ],
        },
      style: {
        layout: 'vertical',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
      },
      onApprove: (data, actions) => {
        actions.order.capture().then((details: any) => {
          // Si todo ha ido bien entonces lo que hacemos es mostrar un mensaje
          console.log("pago realizado correctamente");
        })
          .catch((error: any) => {

            // Si ha habido un error a la hora de pagar (Error dentro de la api de paypal)
            console.log('catch Error', error);
          });
      },
      onError: (err: any) => {
        console.log("onError: " + err);
      },
    };
  }
}
