import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
import { IngresosPage } from '../ingresos/ingresos';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html'
})
export class NuevoPage {
  movimiento: Movimiento ={
    clase:'',
    concepto: '',
    cantidad: 0,
    fecha:null,
    imagen:''
    
  };

  constructor(public navCtrl: NavController, private lista: ListaIngresosService,
    public navParams:NavParams, private toast: ToastService) {
  }
  addMovimiento(movimiento: Movimiento){
    this.lista.addMovimiento(movimiento).then(ref => {
      this.toast.show(`${movimiento.concepto} añadido!!`)
      this.navCtrl.setRoot(IngresosPage,{key:ref.key});
    })
  }
  
}
