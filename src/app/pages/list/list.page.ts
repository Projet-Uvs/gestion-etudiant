import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant.model';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { FilterPipe } from '../../pipes/filter.pipe';




@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  @Output() searchEvent = new EventEmitter();
  @Input() receiveSearchFromApp: string="";

  etudiant: Etudiant[];
  search: string='';
  searchVal: string="";

  constructor(private service: EtudiantService) { }

  ngOnInit() {
    this.service.getAll().subscribe(
      res => {
        this.etudiant = res;
    });
  }

  filters()
  {
    this.searchEvent.emit(
      this.searchVal
    )
  }

}
