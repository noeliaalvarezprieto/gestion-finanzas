import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IngresosPage } from '../ingresos/ingresos';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToIngresos(params){
    if (!params) params = {};
    this.navCtrl.push(IngresosPage);
  }
}
