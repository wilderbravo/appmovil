import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-descripcion',
  templateUrl: 'descripcion.html',
})
export class DescripcionPage {
  descripcion:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.descripcion=this.navParams.get("descripcion");
  }

}
