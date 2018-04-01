import { Component } from '@angular/core';
import { NavController,Platform, Icon } from 'ionic-angular';
import { IngresosPage } from '../ingresos/ingresos';

import { GoogleMap,GoogleMaps,LatLng,GoogleMapsEvent, CameraPosition } from '@ionic-native/google-maps';

import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@Component({
  selector: 'page-mi-banco',
  templateUrl: 'mi-banco.html'
})
export class MiBancoPage {
  map: any;
  markers: any;

  sucursales = [{
    nombre:'BBVA',
    lat:42.6027571  ,
    lng:-5.570859100000007
  },{
    nombre:'BBVA',
    lat:42.5925072 ,
    lng:-5.560866499999975
  },{
    nombre:'BBVA',
    lat:42.6087364 ,
    lng:-5.572409300000004
  },{
    nombre:'BBVA',
    lat:42.5981822 ,
    lng:-5.571500300000025
  },{
    nombre:'BBVA',
    lat:42.5981822 ,
    lng:-5.571500300000025
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.6000032 ,
    lng:-5.575819700000011
  }]
  constructor(public navCtrl: NavController,public geolocation: Geolocation,
  private platform: Platform) {
  }
  ionViewWillEnter(){
    this.platform.ready().then(() =>{
      this.initPage();
    })
  }
  initPage() {
    this.geolocation.getCurrentPosition().then(result => {
      this.loadMap(result.coords.latitude,result.coords.longitude);
    })
  }
 

  loadMap(lat,lng){
    let latLng = new google.maps.LatLng(lat,lng);
    
    let mapOption = {
      center: latLng,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }
    let element = document.getElementById('map');
     this.map = new google.maps.Map(element,mapOption);
    
    let marker = new google.maps.Marker({
      position: latLng,
      title:'Mi posicion',
      
    })
    let content = `
    <div id="myId" class="item item-thumbnail-left item-text-wrap"
      <ion-item>
        <ion-row>
          <h6> `+marker.title+` </h6>
        <ion-row>
      <ion-item>
    </div>
    `
    this.addInfoWindow(marker,content);
    marker.setMap(this.map);
    this.loadPoints();
    
  }
  loadPoints() {
    this.markers = [];
    
    for(const key of Object.keys(this.sucursales)){
      let latLng = new google.maps.LatLng(this.sucursales[key].lat,this.sucursales[key].lng,)
      let marker = new google.maps.Marker({
        position: latLng,
        title: this.sucursales[key].nombre,
        icon: '../assets/img/moneda.png'
        
      })

      let content = `
      <div id="myId" class="item item-thumbnail-left item-text-wrap"
        <ion-item>
          <ion-row>
            <h6> `+this.sucursales[key].nombre+` </h6>
          <ion-row>
        <ion-item>
      </div>
      `
      this.addInfoWindow(marker,content);
      marker.setMap(this.map);
     
    }
  }
  addInfoWindow(marker,content) {
    let infoWindow = new google.maps.InfoWindow({
      content: content
    })
    google.maps.event.addListener(marker,'click',() => {
      infoWindow.open(this.map,marker)
   })
  }

  back(){
    this.navCtrl.setRoot(IngresosPage);
  }
  
}
