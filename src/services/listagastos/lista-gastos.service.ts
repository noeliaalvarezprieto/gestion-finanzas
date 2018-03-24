import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Movimiento } from './../../models/movimiento/movimiento.model';


@Injectable()
export class ListaGastosService{
    
    clase="Gasto";
 //  private listaGastosRef = this.db.list<Movimiento>('gestion-finanzas');
     private listaGastosRef = this.db.list<Movimiento>('/gestion-finanzas',ref =>this.clase? ref.orderByChild('clase').equalTo('Gasto'):ref);
    constructor(private db:AngularFireDatabase){
        
    }


    getListaGastos(){
        return this.listaGastosRef;
    }
    addMovimiento(movimiento: Movimiento){
        return this.listaGastosRef.push(movimiento);
    }
    editarMovimiento(movimiento: Movimiento){
        return this.listaGastosRef.update(movimiento.key,movimiento);
    }
    eliminarMovimiento(movimiento: Movimiento){
        return this.listaGastosRef.remove(movimiento.key);
    }
}