import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IngresosPage } from '../ingresos/ingresos';
import { SignupPage} from '../signup/signup';
import { User} from "../../models/user";
import { AngularFireAuth} from 'angularfire2/auth'
import { ErrorPage } from '../error/error';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user = {} as User;
  

  constructor( private afAuth: AngularFireAuth, public navCtrl: NavController) {
  }
  async login(user: User){
    try{
     const result = this.afAuth.auth.signInWithEmailAndPassword(user.email,user.password);
   // console.log(result);
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
