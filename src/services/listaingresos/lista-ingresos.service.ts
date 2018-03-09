import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Movimiento } from './../../models/movimiento/movimiento.model';


@Injectable()
export class ListaIngresosService{
    private listaIngresosRef = this.db.list<Movimiento>('gestion-finanzas');
    constructor(private db:AngularFireDatabase){

    }
    getListaIngresos(){
        return this.listaIngresosRef;
    }
    addMovimiento(movimiento: Movimiento){
        return this.listaIngresosRef.push(movimiento);
    }
}