import { HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';
import { AngularFireDatabase } from "angularfire2/database";

import { Movimiento } from './../models/movimiento/movimiento.model';

@Injectable()
export class ClaseProvider {
    clase;
      private listaTotalRef = this.db.list('gestion-finanzas',ref => ref.orderByChild('clase'));
    constructor( private db:AngularFireDatabase) {

    }

    getListaTotal(){
        return this.listaTotalRef.valueChanges();
    }
}