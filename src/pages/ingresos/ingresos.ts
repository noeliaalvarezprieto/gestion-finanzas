import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';

@Component({
  selector: 'page-ingresos',
  templateUrl: 'ingresos.html'
})
export class IngresosPage {

  constructor( private afAuth: AngularFireAuth, private toast: ToastController,public navCtrl: NavController) {
  }
  ionViewWillLoad(){
    this.afAuth.authState.subscribe(data => {
      if(data.email && data.uid){
      this.toast.create({
        message:`Bienvenido,${data.email}`,
        duration:3000
      }).present();
    }

    
    });
  
  }
}