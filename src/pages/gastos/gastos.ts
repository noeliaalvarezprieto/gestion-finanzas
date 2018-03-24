import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { NuevoPage} from '../nuevo/nuevo';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListaGastosService } from '../../services/listagastos/lista-gastos.service';
@Component({
  selector: 'page-gastos',
  templateUrl: 'gastos.html',
  providers:[ListaGastosService]
})
export class GastosPage {
  movimiento: Movimiento;
  listaGastos$: Observable<Movimiento[]>;//listaIngresos$->listaGastos$
  constructor(private afAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController,
    private lista: ListaGastosService) 
    {
      this.listaGastos$ = this.lista
      .getListaGastos()
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
