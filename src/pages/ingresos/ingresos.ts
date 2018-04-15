import { Component } from '@angular/core';
import { NavController,ToastController, NavParams } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import { NuevoPage} from '../nuevo/nuevo';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
import { Observable } from 'rxjs/Observable';//from 'rxjs/Observable'
import { Movimiento } from '../../models/movimiento/movimiento.model';

import firebase from 'firebase';//
import { AngularFireDatabase } from "angularfire2/database";
@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html'
  
})
export class IngresosPage {
  imageSource;
 // movimientoImagen;
 // movimiento:Movimiento;
    listaIngresos$: Observable<Movimiento[]>;
  constructor( private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController, public navParams:NavParams,
     private lista: ListaIngresosService,private db:AngularFireDatabase)
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
     // this.imageSource= 'butterfly';//provisional
     // this.getPhotoURL();
    }
  ionViewWillLoad(){
    //this.afAuth.authState.subscribe(data => {
     // if(data.email && data.uid){
    // this.toast.create({
     //  message:`Bienvenido,${data.email}`,
     //   duration:3000
     // }).present();
   // }

    
  //  });
  
  }
 // getPhotoURL(){
   // firebase.storage().ref().child( this.imageSource+'.jpg').getDownloadURL()
   // .then((url)=>{
   //   this.movimientoImagen= url;
   // })
 // }
  nuevo(){
    this.navCtrl.push(NuevoPage);
  }

}
