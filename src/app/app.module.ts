import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IngresosPage } from '../pages/ingresos/ingresos';
import { GastosPage } from '../pages/gastos/gastos';
import { BalancePage } from '../pages/balance/balance';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SucursalPage } from '../pages/sucursal/sucursal';
import { MiBancoPage } from '../pages/mi-banco/mi-banco';
import { ErrorPage } from '../pages/error/error';
import { NuevoPage } from '../pages/nuevo/nuevo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule} from "angularfire2/auth";

@NgModule({
  declarations: [
    MyApp,
    IngresosPage,
    GastosPage,
    BalancePage,
    LoginPage,
    SignupPage,
    SucursalPage,
    MiBancoPage,
    ErrorPage,
    NuevoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IngresosPage,
    GastosPage,
    BalancePage,
    LoginPage,
    SignupPage,
    SucursalPage,
    MiBancoPage,
    ErrorPage,
    NuevoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}