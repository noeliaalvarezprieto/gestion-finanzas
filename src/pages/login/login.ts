import { Component } from '@angular/core';
import { NavController, NavParams, ToastController,AlertController } from 'ionic-angular';
import { IngresosPage } from '../ingresos/ingresos';
import { SignupPage} from '../signup/signup';
import { User} from "../../models/user";
import { AngularFireAuth} from 'angularfire2/auth'
import { AngularFireDatabase } from "angularfire2/database";


import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  alertCtrl: any;
  
  user = {} as User;
  myForm: FormGroup;
  

  constructor( private afAuth: AngularFireAuth, public navCtrl: NavController, 
    public fb:FormBuilder, private toast: ToastController,alertCtrl: AlertController,private db:AngularFireDatabase) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['',  [Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/),Validators.minLength(6)]],
    });
  }
  saveData(){
   // alert(JSON.stringify(this.myForm.value));
  }
 // async login(user: User){
   // try{
   //  const result = this.afAuth.auth.signInWithEmailAndPassword(this.myForm.get('email').value,this.myForm.get('password').value);
   
  // if(result){
   //  this.navCtrl.setRoot(IngresosPage);
  // }
  
   
 // }catch(e){
   // console.error(e);
    // }
 // }
 register(){
  this.navCtrl.push(SignupPage);
}
obtenerDatos(){
  this.myForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',  [Validators.required,Validators.pattern(/^[a-z0-9_-]{6,18}$/),Validators.minLength(6)]],
  });
}
 async login(user:User){
 // this.obtenerDatos();
  this.afAuth.auth.signInWithEmailAndPassword(this.myForm.get('email').value,this.myForm.get('password').value)
  .then(user => {
    this.navCtrl.setRoot(IngresosPage);
  }, error => {
    this.toast.create({
      message:`datos no válidos`,
      duration:5000
     
    }).present();
  })
 }


}
