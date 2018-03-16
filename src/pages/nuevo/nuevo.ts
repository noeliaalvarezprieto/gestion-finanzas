import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Movimiento } from '../../models/movimiento/movimiento.model';
import { ListaIngresosService } from '../../services/listaingresos/lista-ingresos.service';
import { IngresosPage } from '../ingresos/ingresos';
import { ToastService } from '../../services/toast/toast.service';
import { Camera, CameraOptions, EncodingType } from '@ionic-native/camera';

@Component({
  selector: 'page-nuevo',
  templateUrl: 'nuevo.html'
})
export class NuevoPage {
  movimiento: Movimiento ={
    clase:'',
    concepto: '',
    cantidad: 0,
    fecha:null,
    imagen:''
    
  };

  constructor(public navCtrl: NavController, private lista: ListaIngresosService,
    public navParams:NavParams, private toast: ToastService,private camera: Camera) {
  }
  addMovimiento(movimiento: Movimiento){
    this.lista.addMovimiento(movimiento).then(ref => {
      this.toast.show(`${movimiento.concepto} añadido!!`)
      this.navCtrl.setRoot(IngresosPage,{key:ref.key});
    })
  }
   takePhoto()
   {
    
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
     this.camera.getPicture(options).then((imageData)=>{
        this.movimiento.imagen = "data:image/jpeg;base64,"+imageData;
     },(err)=>{
       console.log(err);
     });
  
  
    
    
  }
  
}
