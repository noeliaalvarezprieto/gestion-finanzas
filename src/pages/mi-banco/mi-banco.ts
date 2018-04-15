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
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.594962 ,
    lng:-5.573173399999973
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.6029882 ,
    lng:-5.570338300000003
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.60252070000001   ,
    lng: -5.575865099999987
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.5976649  ,
    lng:-5.57236510000007
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.5916339,
    lng:-5.565239199999951
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.596909 ,
    lng: -5.565460700000017
  },{
    nombre:'CAJA ESPAÑA DUERO',
    lat:42.6000989,
    lng:-5.562855899999931
  },{
    nombre:'BANKIA',
    lat:42.5984448,
    lng:-5.569419499999981
  },{
    nombre:'BANKIA',
    lat:42.59714169999999 ,
    lng:-5.575819700000011
  },{
    nombre:'BANKIA',
    lat:42.60358000000001,
    lng:-5.5793599999999515
  },{
    nombre:'BANKIA',
    lat:42.5927114,
    lng:-5.564918900000066
  },{
    nombre:'BANCO SABADELL',
    lat:42.5963234,
    lng:-5.607825000000048
  },{
    nombre:'BANCO SABADELL',
    lat:42.6239474,
    lng:-5.5639446000000135
  },{
    nombre:'BANCO SABADELL',
    lat:42.6127359,
    lng:-5.550520499999948
  },{
    nombre:'BANCO SABADELL',
    lat:42.5870944 ,
    lng:-5.568246899999963
  },{
    nombre:'BANCO SABADELL',
    lat:42.5995382,
    lng:-5.587293999999929
  },{
    nombre:'BANCO SANTANDER',
    lat:42.5986475,
    lng:-5.56167460000006
  },{
    nombre:'BANCO SANTANDER',
    lat:42.59851,
    lng:-5.571930000000066
  },{
    nombre:'BANCO SANTANDER',
    lat:42.59757339999999,
    lng:-5.567876800000022
  },{
    nombre:'BANCO SANTANDER',
    lat:42.5931425,
    lng:-5.572993600000018
  },{
    nombre:'BANCO SANTANDER',
    lat:42.6045555,
    lng:-5.562557800000036
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
      //FALTA SAN ANDRES Y TROBAJO
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
