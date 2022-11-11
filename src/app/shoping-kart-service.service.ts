import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ShopingKartServiceService {

  isUserLogin:any;
  detailUsed: any;


  constructor(private apiData:HttpClient) { }

  getDataFromApi(){
    return this.apiData.get<any>(`${environment.baseUrl}/products`);
  }

  setDataToApi(product:any){
    return this.apiData.post<any>(`${environment.baseUrl}/products`,product);
  }

  deleteDataFromApi(id:any){
    return this.apiData.delete<any>(`${environment.baseUrl}/products/${id}`);
  }

  updateDataToApi(id:any,product:any){
    return this.apiData.put<any>(`${environment.baseUrl}/products/${id}`,product);
  }

  loginData(user:any){
    return this.apiData.post<any>(`${environment.loginUrl}/users/login`,user);
  }

  registerUser(user:any){
    return this.apiData.post<any>(`${environment.loginUrl}/users/register`,user);
  }

  isUser():any{
    this.detailUsed = localStorage.getItem('userDetails');
    if(this.detailUsed){
      this.detailUsed = JSON.parse(this.detailUsed);
      if(this.detailUsed.role == 'admin'){
        return true;
      }
      else{
        return false;
      }
    }
  }

  isLogin():any{
    this.isUserLogin = localStorage.getItem('userDetails');
    return this.isUserLogin?true:false;
  }

  getToken(){
    let token = localStorage.getItem('userDetails');
    if(this.isLogin()){
      if(token){
        return (JSON.parse(token)).token;
      }
    }
  }
}
