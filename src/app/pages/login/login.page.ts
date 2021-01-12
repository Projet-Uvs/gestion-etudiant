import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  @ViewChild ('loginform') myform: NgForm;

  constructor(private NavCtrl: NavController, private router: Router) { }

  UserData:
  {
    email:'',
    password:''
  }
   User_email = "admin@uvs.edu.sn";
   User_password= "passer"; 

  ngOnInit() {
  
  }

  OnSubmit(form: NgForm)
  {
    // console.log(form.value);  
    if(this.User_email == form.value.email && this.User_password == form.value.password)
    {
       //console.log('mogui dokh');
       this.router.navigate(['/admin']);
    }
    else
    {
        console.log("error");
    }

  }

  OnReset()
  {
    this.router.navigate(['/home']);  
  }
}
