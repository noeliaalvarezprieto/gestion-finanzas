import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { NuevoPage} from '../nuevo/nuevo';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html'
})
export class GastosPage {
  movimiento: Movimiento;
  listaIngresos$: Observable<Movimiento[]>;//listaIngresos$->listaGastos$
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController,
    private lista: ListaIngresosService) 
    {
      this.listaIngresos$ = this.lista
      .getListaIngresos()
      .snapshotChanges()
      .map(
       changes => {
         return changes.map(c => ({
           key: c.payload.key,
           ...c.payload.val(),
         }));
       } 
      );
  }
  nuevo(){
    this.navCtrl.push(NuevoPage);
  }
}
