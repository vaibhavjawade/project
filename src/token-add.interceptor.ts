import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShopingKartServiceService } from './app/shoping-kart-service.service';

@Injectable()
export class TokenAddInterceptor implements HttpInterceptor {

  constructor(private data:ShopingKartServiceService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let modifyRequest= request.clone({

      headers: request.headers.append(
        'authorization',
        `Baerer ${this.data.getToken()}`
        )
    })
    return next.handle(modifyRequest);
  }
}
