import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { IngresosPage } from '../ingresos/ingresos';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";
import { AngularFireDatabase } from "angularfire2/database";

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;
  myForm: FormGroup;

  constructor( private afAuth:AngularFireAuth,public navCtrl: NavController, public fb:FormBuilder,
    private db:AngularFireDatabase, private toast: ToastService) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required,Validators.minLength(6)]],
    });
  }
 async register(user: User){
  try{
   const result = await  this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.get('email').value,this.myForm.get('password').value);
  //console.log(result);
  this.toast.show(`usuario registrado!!`)
  }catch(e){
     console.error(e);
     this.toast.show(`usuario ya está registrado!!`)
  }
}
 //async register(user: User) {
 // var register = this.afAuth.auth.app.database().ref("Users/{{userId}}");//firebase.database().ref("Users/{{userId}}");

 // register.once('value', async function(snapshot) {
 //  if(snapshot.val().hasOwnProperty('value')) {
  //  console.log("Email exist.");
  // }
  // else {
  //   console.log("Email not exist.");
     /* Code to push email to the specific user */
  //   const result = await this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.get('email').value,this.myForm.get('password').value);
 // }
 // });
//}

}
