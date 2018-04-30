import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
import { IngresosPage } from '../ingresos/ingresos';
import { ToastService } from '../../services/toast/toast.service';
import { Camera, CameraOptions, EncodingType } from '@ionic-native/camera';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { storage } from 'firebase';

@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html'
})
export class NuevoPage {
  myForm: FormGroup;
  movimiento ={
    clase:'',
    concepto: '',
    cantidad: '',
    fecha:'',
    imagen:''//aqui hay que guardar la referencia de storage
    
   };

 
  constructor(public navCtrl: NavController, private lista: ListaIngresosService,
    public navParams:NavParams, private toast: ToastService,private camera: Camera,
     public fb:FormBuilder) {
      this.myForm = this.fb.group({
        clase: ['', [Validators.required]],
        concepto: ['', [Validators.required]],
        cantidad: ['', [Validators.required]],
        fecha: ['', [Validators.required]],
      });
  }
  
 
  addMovimiento(movimiento: Movimiento){
    this.movimiento=this.myForm.value;
    this.lista.addMovimiento(movimiento).then(ref => {
      this.toast.show(`${movimiento.concepto} añadido!!`)
      this.navCtrl.setRoot(IngresosPage,{key:ref.key});
    })
  }
  async takePhoto()
   {
     try{
    
        const options: CameraOptions = {
          quality: 50,
           targetHeight: 600,
          targetWidth: 600,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE,
          sourceType:this.camera.PictureSourceType.CAMERA,
          correctOrientation:true
         }
        const result =  await this.camera.getPicture(options);
        const image = `data:image/jpeg;base64,${result}`;
        const pictures = storage().ref('this.movimiento.concepto');//envia img a storage 
        pictures.putString(image,'data_url');//ESTE NOMBRE SE SOBREESCRIBE
        //EL PROBLEMA ESTA EN MOSTRAR,ALMACENA BIEN
     
      }
      catch (e){

      }
  
    
    
  }
  
}
