import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { UNIVERSIDADES } from "../../data/universidades.data";
import { Universidad }  from "../../interfaces/universidad.interface";
import { PrincipalPage } from "../index.paginas";
import {UniversityServiceProvider} from '../../providers/university-service/university-service';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UniversityServiceProvider]
})
export class HomePage {
  searchQuery: string = '';
  //public university:any;
  public university:any[]=[];
  //univerdidades:Universidad[]=[];
  //univerdidades:any[]=[];
  constructor(public navCtrl: NavController, public universityService: UniversityServiceProvider) {
    //this.univerdidades=UNIVERSIDADES.slice(0);
    //this.univerdidades=UNIVERSIDADES;
    this.searchQuery='';
    this.loadUniversity();
    //console.log(this.univerdidades);
  }

  mostrarDetalle(universidad:Universidad){
    //console.log(universidad);
    this.navCtrl.push (PrincipalPage, { 'universidad':universidad });
  }
  //Función que realiza una búsqueda por nombres de las Universidades
  getItems(ev: any) {
    //Resetear la carga de las univerdidades
    //this.loadUniversity();
    // Declarar la varibale de cada evento del searchbar
    let val = ev.target.value;
    //Si el valor es vacío no realizar ningún filtro
    if (val && val.trim() != '') {
      this.university = this.university.filter((item) => {
        return (item.name.first.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  loadUniversity(){
      this.universityService.load().then(data => {
      this.university=data;
      console.log(data);
    });
  }
}
