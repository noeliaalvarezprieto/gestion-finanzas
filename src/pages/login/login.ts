import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IngresosPage } from '../ingresos/ingresos';
import { SignupPage} from '../signup/signup';
import { User} from "../../models/user";
import { AngularFireAuth} from 'angularfire2/auth'


import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  myForm: FormGroup;
  

  constructor( private afAuth: AngularFireAuth, public navCtrl: NavController, public fb:FormBuilder) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.pattern(/^[a-z0-9_-]{6,18}$/)]],
    });
  }
  saveData(){
   // alert(JSON.stringify(this.myForm.value));
  }
  async login(user: User){
    try{
     const result = this.afAuth.auth.signInWithEmailAndPassword(this.myForm.get('email').value,this.myForm.get('password').value);
   
   if(result){
     this.navCtrl.setRoot(IngresosPage);
   }
  }catch(e){
    console.error(e);
  }
  }
  register(){
    this.navCtrl.push(SignupPage);
  }

}
