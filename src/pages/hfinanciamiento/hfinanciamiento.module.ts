import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HfinanciamientoPage } from './hfinanciamiento';

@NgModule({
  declarations: [
    HfinanciamientoPage,
  ],
  imports: [
    IonicPageModule.forChild(HfinanciamientoPage),
  ],
  exports: [
    HfinanciamientoPage
  ]
})
export class HfinanciamientoPageModule {}
