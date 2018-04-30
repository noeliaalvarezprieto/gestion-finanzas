import { Injectable } from "@angular/core";
import { AngularFirestore } from 'angularfire2/firestore';//FIREDATABASE
import { Observable } from 'rxjs/Rx';

@Injectable()
export class VoteService {
    constructor(private afs: AngularFirestore) {

    }
    saveEntry(movimiento) :void {
        this.afs.collection('gestion-finanzas').add(movimiento);
    }
    getAllEntries() : Observable<any>{
        return this.afs.collection('gestion-finanzas').valueChanges();
    }
    
}