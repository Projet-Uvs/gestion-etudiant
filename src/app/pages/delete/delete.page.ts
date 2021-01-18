import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.page.html',
  styleUrls: ['./delete.page.scss'],
})
export class DeletePage implements OnInit {
  etudiant: Etudiant[];

  constructor(private services: EtudiantService, private router: Router, 
              private modalCtrl: ModalController, private AlertCtrl: AlertController) { }

  ngOnInit() {
    this.services.getAll().subscribe(
      res => {
        this.etudiant = res;
    });
  }


  OnDelete(id: string)
{
    this.AlertCtrl.create({
        header: 'Supprimer',
        message: 'Confirmez-vous la suppression',
        buttons: 
        [{
            text: 'Oui',
            handler: ()=>{  
              this.services.delete(id).subscribe(
                () => {
                  this.etudiant = this.etudiant.filter(
                    std => std.id !== id
                  )
                });
            }
        },
        {
            text: 'Non'
        }
        ]
    }).then(alertEl => alertEl.present());
}

  
}
