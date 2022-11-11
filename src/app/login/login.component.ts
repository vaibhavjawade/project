import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShopingKartServiceService } from '../shoping-kart-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  message:any;
  login:boolean = true;

  @ViewChild('login')loginElement!:ElementRef;


  constructor(private data:ShopingKartServiceService,private fb:FormBuilder, private router:Router) { }

  ngOnInit(): void {}
//Registration From
  registrationForm:any = this.fb.group({
    fullName : this.fb.control('',[Validators.required]),
    email : this.fb.control('',[Validators.required]),
    password : this.fb.control('',[Validators.required]),
    role : this.fb.control('',[Validators.required])
  })
  saveFormData(){
    this.data.registerUser(this.registrationForm.value).subscribe((res)=>{
      if(!res.error){
        this.message = res.message;
        this.loginElement.nativeElement.click();
    }else{
      this.message = res.message;
    }
    })
  }

//Login Form
loginForm:any = this.fb.group({
  email : this.fb.control('',[Validators.required]),
  password : this.fb.control('',[Validators.required]),
})
loginUser(){
  this.data.loginData(this.loginForm.value).subscribe((res)=>{
    if(!res.error){
      this.message = res.message;
      localStorage.setItem('userDetails',JSON.stringify(res));
      this.router.navigateByUrl('/productPage');
  }
  if(res.error){
    this.message = res.message;
  }
  })
}

//Show Hide Forms
regShow(){
  this.login = !this.login;
}

}
