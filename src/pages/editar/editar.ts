import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
import { IngresosPage } from '../ingresos/ingresos';
import { ToastService } from '../../services/toast/toast.service';

/**
 * Generated class for the EditarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editar',
  templateUrl: 'editar.html', 
})
export class EditarPage {
  movimiento: Movimiento ;
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private lista:ListaIngresosService, private toast: ToastService) {
  }

  ionViewWillLoad() {
    this.movimiento = this.navParams.get('movimiento');
  }
guardarMovimiento(movimiento: Movimiento){
  this.lista.editarMovimiento(this.movimiento).then(() => {
    this.toast.show(`${movimiento.concepto} guardado!!`)
    this.navCtrl.setRoot(IngresosPage);
  });
}
  eliminarMovimiento(movimiento: Movimiento){
    this.lista.eliminarMovimiento(movimiento).then(() => {
      this.toast.show(`${movimiento.concepto} borado!!`);
      this.navCtrl.setRoot(IngresosPage);
    });
  }
}
