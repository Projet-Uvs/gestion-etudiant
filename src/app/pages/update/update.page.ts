import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  @Input() student: Etudiant;

  isUpdate = false;
  constructor(private services: EtudiantService, private modalCtrl: ModalController) { }

  data = {
    prenom:'',
    nom:'',
    ine:'',
    filiere:''
  };


  ngOnInit() {
   if(this.student){
     this.isUpdate = true;
     this.data = this.student;
   }
  }

  OnSubmit(form: NgForm)
  {    
    const etudiant = form.value;

    if (this.isUpdate) 
    {      
      this.services.update(etudiant, this.student.id).subscribe((res) => {        
        etudiant.id = this.student.id;
        this.modalCtrl.dismiss(etudiant, 'update');
        return etudiant;
      });
    }
    else
    {
     this.services.create(etudiant).subscribe(
       res => console.log(res));
    }
   
  }
}
