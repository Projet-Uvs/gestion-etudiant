import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-remove-list',
  templateUrl: './remove-list.page.html',
  styleUrls: ['./remove-list.page.scss'],
})
export class RemoveListPage implements OnInit {

  etudiant: Etudiant[];
  constructor(private service: EtudiantService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      res => {
        this.etudiant = res;
    });
  }
}
