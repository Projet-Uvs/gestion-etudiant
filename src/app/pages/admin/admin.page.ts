import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OnCreate()
  {
    this.router.navigate(['/add']);  
  }


  OnRead()
  {
    this.router.navigate(['/list']);  
  }


  OnUpdatet()
  {
    this.router.navigate(['/edit']);  
  }

  
  OnDelete()
  {
    this.router.navigate(['/delete']);  
  }
  

}
