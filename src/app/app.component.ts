import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ShopingKartServiceService } from './shoping-kart-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public sks:ShopingKartServiceService, private router:Router){ }

  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/loginPage');
  }
}
