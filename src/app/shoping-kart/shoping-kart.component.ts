import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ShopingKartServiceService } from '../shoping-kart-service.service';

@Component({
  selector: 'app-shoping-kart',
  templateUrl: './shoping-kart.component.html',
  styleUrls: ['./shoping-kart.component.css'],
})
export class ShopingKartComponent implements OnInit {
  products: any;
  message: any;

  constructor(
    private data: ShopingKartServiceService,
    private formBuilder: FormBuilder
  ) {}
  isLoader: boolean = false;
  ngOnInit(): void {
    this.getDataFromService();
  }
  getDataFromService() {
    this.isLoader = true;
    this.data.getDataFromApi().subscribe((res) => {
      this.products = res['products'];
      if (!res.error) {
        this.isLoader = false;
      }
    });
  }

  deleteProduct(product: any) {
    if (confirm('Do You Want to Delete')) {
      this.data.deleteDataFromApi(product._id).subscribe((res) => {
        if (!res.error) {
          this.products = this.products.splice(this.products.indexOf(product));
        }
      });
    }
  }

  modifyProduct: any = this.formBuilder.group({
    productName: this.formBuilder.control(''),
    productPrice: this.formBuilder.control(''),
    productDescription: this.formBuilder.control(''),
    productImageURL: this.formBuilder.control(''),
  });
  dataToForm(product: any) {
    this.modifyProduct = this.formBuilder.group({
      productName: this.formBuilder.control(product.productName),
      productPrice: this.formBuilder.control(product.productPrice),
      productDescription: this.formBuilder.control(product.productDescription),
      productImageURL: this.formBuilder.control(product.productImageURL),
    });
  }

  @ViewChild('close') close!: ElementRef;

  updatedDataToService(product: any) {
    this.data
      .updateDataToApi(product._id, this.modifyProduct.value)
      .subscribe((res) => {
        if (!res.error) {
          this.close.nativeElement.click();
          this.message = res.message;
          setTimeout(() => {
            this.message = '';
          }, 3000);
          this.getDataFromService();
        }
        if (res.error) {
          this.message = res.message;
          setTimeout(() => {
            this.message = '';
          }, 3000);
        }
      });
  }
}
