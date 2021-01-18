import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemoveListPageRoutingModule } from './remove-list-routing.module';

import { RemoveListPage } from './remove-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemoveListPageRoutingModule
  ],
  declarations: [RemoveListPage]
})
export class RemoveListPageModule {}
