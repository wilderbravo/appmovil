import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import {
  HomePage,
  PrincipalPage,
  DescripcionPage,
  LoginPage,
  RegistroPage,
  TabsPage,
  InicioPage,
  HcarreraPage,
  HfinanciamientoPage
} from "../pages/index.paginas";
import { UniversityServiceProvider } from '../providers/university-service/university-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    DescripcionPage,
    LoginPage,
    RegistroPage,
    TabsPage,
    InicioPage,
    HcarreraPage,
    HfinanciamientoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Atrás'
     })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    DescripcionPage,
    LoginPage,
    RegistroPage,
    TabsPage,
    InicioPage,
    HcarreraPage,
    HfinanciamientoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UniversityServiceProvider
  ]
})
export class AppModule {}
