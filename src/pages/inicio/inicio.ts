import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage, RegistroPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  login(){
    //this.navCtrl.setRoot(TabsPage);
    this.navCtrl.push (LoginPage);
  }

  registro(){
    this.navCtrl.push (RegistroPage);
  }
}
