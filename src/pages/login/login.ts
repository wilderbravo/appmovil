import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage, RegistroPage } from "../index.paginas";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  todo = {}
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController) {

  }

  login(){
    //console.log(this.todo);   console.log(this.todo["usuario"]);
    let usuario = this.todo["usuario"];
    let contrasena = this.todo["contrasena"];
    if ((usuario=='user') && (contrasena=='123456'))
    {
      this.showAlert('Bienvenido!', usuario);
      this.navCtrl.setRoot(TabsPage);
      this.navCtrl.push (TabsPage);
    }
    else
    {
      this.showAlert('Alerta!', 'Usuario o contraseña incorrecta');
    }
  }

  registro(){
    this.navCtrl.push (RegistroPage);
  }

  showAlert(title:string, subtitle:string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: subtitle,
      buttons: ['OK']
    });
    alert.present();
  }
}
