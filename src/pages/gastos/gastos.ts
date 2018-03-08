import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { NuevoPage} from '../nuevo/nuevo';
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html'
})
export class GastosPage {

  constructor(public navCtrl: NavController) {
  }
  nuevo(){
    this.navCtrl.push(NuevoPage);
  }
}
