import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MerekEditPage } from './merek-edit.page';

const routes: Routes = [
  {
    path: '',
    component: MerekEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MerekEditPageRoutingModule {}
