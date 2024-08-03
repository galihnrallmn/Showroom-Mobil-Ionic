import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerekTambahPageRoutingModule } from './merek-tambah-routing.module';

import { MerekTambahPage } from './merek-tambah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerekTambahPageRoutingModule
  ],
  declarations: [MerekTambahPage]
})
export class MerekTambahPageModule {}
