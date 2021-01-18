import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  
  @ViewChild ('Create') myform: NgForm;
  constructor(private services: EtudiantService) { }

  etudiant;
  ngOnInit() {
  }

  OnSubmit(form: NgForm)
  {
    this.etudiant = form.value;
    this.services.create(this.etudiant).subscribe(res => console.log(res)
    );    
  }

}
