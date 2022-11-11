import { Component, OnInit } from '@angular/core';
import { ShopingKartServiceService } from '../shoping-kart-service.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
  message:any;
  constructor(private postData:ShopingKartServiceService) { }

  ngOnInit(): void {
  }

  sendDataToService(data:any){
    this.postData.setDataToApi(data.value).subscribe((res)=>{
      if(!res.error){
      this.message = res.message;
      setTimeout((ele)=>{
        this.message = ''
      },3000)
    }
    if(res.error){
      this.message = res.message;
      setTimeout((ele)=>{
        this.message = ''
      },3000)
    }
    })
  }



}
