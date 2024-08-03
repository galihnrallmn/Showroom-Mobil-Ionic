import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MerekEditPageRoutingModule } from './merek-edit-routing.module';

import { MerekEditPage } from './merek-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MerekEditPageRoutingModule
  ],
  declarations: [MerekEditPage]
})
export class MerekEditPageModule {}
