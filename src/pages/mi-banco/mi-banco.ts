import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IngresosPage } from '../ingresos/ingresos';

import { GoogleMap,GoogleMaps,LatLng,GoogleMapsEvent, CameraPosition } from '@ionic-native/google-maps';

import { Geolocation, Geoposition } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-mi-banco',
  templateUrl: 'mi-banco.html'
})
export class MiBancoPage {
  map: any;
  constructor(public navCtrl: NavController,public geolocation: Geolocation) {
  }
  ionViewDidLoad(){
    this.getPosition();
  }

  getPosition():any{
    this.geolocation.getCurrentPosition().then(response => {
      this.loadMap(response);
    })
    .catch(error =>{
      console.log(error);
    })
  }

  loadMap(position: Geoposition){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    
    // create a new map by passing HTMLElement
    let mapEle: HTMLElement = document.getElementById('map');
  
    // create LatLng object
    let myLatLng = {lat: latitude, lng: longitude};
  
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: myLatLng,
      zoom: 12
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      let marker = new google.maps.Marker({
        position: myLatLng,
        map: this.map,
        title: 'Bancos cercanos'
      });
      mapEle.classList.add('show-map');
    });
  }

  back(){
    this.navCtrl.setRoot(IngresosPage);
  }
  
}
