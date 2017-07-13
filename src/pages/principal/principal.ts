import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DescripcionPage } from "../index.paginas";

@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  universidad:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.universidad=this.navParams.get("universidad");
  }
  mostrarDescripcion(descripcion:any){
    console.log(descripcion);
    this.navCtrl.push (DescripcionPage, { 'descripcion':descripcion });
  }

}
