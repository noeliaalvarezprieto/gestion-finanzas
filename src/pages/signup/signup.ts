import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { IngresosPage } from '../ingresos/ingresos';
import { User } from '../../models/user';
import {AngularFireAuth} from "angularfire2/auth";

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;
  myForm: FormGroup;

  constructor( private afAuth:AngularFireAuth,public navCtrl: NavController, public fb:FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }
 async register(user: User){
   try{
  const result = await  this.afAuth.auth.createUserWithEmailAndPassword(this.myForm.get('email').value,this.myForm.get('password').value);
  //console.log(result);
}catch(e){
     console.error(e);
   }
}

}
