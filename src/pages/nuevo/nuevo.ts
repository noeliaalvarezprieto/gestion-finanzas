import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
import { IngresosPage } from '../ingresos/ingresos';

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

  constructor(public navCtrl: NavController, private lista: ListaIngresosService) {
  }
  addMovimiento(movimiento: Movimiento){
    this.lista.addMovimiento(movimiento).then(ref => {
      this.navCtrl.setRoot(IngresosPage,{key:ref.key});
    })
  }
  
}
