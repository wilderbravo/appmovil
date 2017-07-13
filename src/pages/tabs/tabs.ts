import { Component } from '@angular/core';
import { HomePage, HcarreraPage, HfinanciamientoPage } from "../index.paginas";

//@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  thcarrera:any;
  thome:any;
  thfinanciamiento:any;
  constructor() {
    this.thcarrera=HcarreraPage;
    this.thome=HomePage;
    this.thfinanciamiento=HfinanciamientoPage;
  }
}
