import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HcarreraPage } from './hcarrera';

@NgModule({
  declarations: [
    HcarreraPage,
  ],
  imports: [
    IonicPageModule.forChild(HcarreraPage),
  ],
  exports: [
    HcarreraPage
  ]
})
export class HcarreraPageModule {}
