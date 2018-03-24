import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Movimiento } from './../../models/movimiento/movimiento.model';


@Injectable()
export class ListaIngresosService{
    
    clase="Ingreso";
  //  private listaIngresosRef = this.db.list<Movimiento>('gestion-finanzas');
  private listaIngresosRef = this.db.list<Movimiento>('/gestion-finanzas',ref =>this.clase? ref.orderByChild('clase').equalTo('Ingreso'):ref);
    constructor(private db:AngularFireDatabase){
        
    }


    getListaIngresos(){
        return this.listaIngresosRef;
    }
    addMovimiento(movimiento: Movimiento){
        return this.listaIngresosRef.push(movimiento);
    }
    editarMovimiento(movimiento: Movimiento){
        return this.listaIngresosRef.update(movimiento.key,movimiento);
    }
    eliminarMovimiento(movimiento: Movimiento){
        return this.listaIngresosRef.remove(movimiento.key);
    }
}