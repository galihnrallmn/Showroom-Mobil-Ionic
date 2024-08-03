import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerekTambahPage } from './merek-tambah.page';

const routes: Routes = [
  {
    path: '',
    component: MerekTambahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerekTambahPageRoutingModule {}
