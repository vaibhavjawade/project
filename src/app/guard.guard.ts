import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ShopingKartServiceService } from './shoping-kart-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private data:ShopingKartServiceService ){}
  canActivate(){
    if(this.data.isUser() && this.data.isLogin()){
      return true;
    }
    else{
      window.alert('Access denied for this page.........')
      return false;
    }


  }

}


