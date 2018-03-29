import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GastosPage } from '../pages/gastos/gastos';
import { BalancePage } from '../pages/balance/balance';
import { SucursalPage } from '../pages/sucursal/sucursal';
import { MiBancoPage } from '../pages/mi-banco/mi-banco';
import {LoginPage} from '../pages/login/login';

import {NuevoPage} from '../pages/nuevo/nuevo';
import {SignupPage} from '../pages/signup/signup';

import { IngresosPage } from '../pages/ingresos/ingresos';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToIngresos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IngresosPage);
  }goToGastos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(GastosPage);
  }goToBalance(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BalancePage);
  }goToSucursal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SucursalPage);
  }goToMiBanco(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MiBancoPage);
  }
}
