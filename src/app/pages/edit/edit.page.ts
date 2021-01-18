import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { UpdatePage } from '../update/update.page';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  etudiant: Etudiant[];

  constructor(private service: EtudiantService, private router: Router, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      res => {
        this.etudiant = res;
    });
  }
  Edit(student: Etudiant){
  this.modalCtrl.create({
    component: UpdatePage,
    componentProps: {student}
  }).then(
    modal =>
    {
       modal.present();
       return modal.onDidDismiss();
      }).then(({data, role}) =>
      {
        this.etudiant = this.etudiant.filter(
          std => {
            if(data.id === std.id)
            {
              return data;
            }
            return std;
          }
        );
      });  
  }
}
