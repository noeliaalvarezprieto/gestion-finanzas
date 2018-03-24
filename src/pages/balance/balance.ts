import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IngresosPage } from '../ingresos/ingresos';




import { Chart} from 'chart.js';

import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import  firebase from 'firebase';

import { ClaseProvider } from './../../providers/clase';
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html'
})
export class BalancePage {
  @ViewChild('lineCanvas')lineCanvas;
  private chartChart: any;
 
  movimientos;
  gast:number;
  ingr:number;
  
  constructor(public navCtrl: NavController,public claseService:ClaseProvider,private afDatabase:AngularFireDatabase) {
   this.movimientos =  this.claseService.getListaTotal();
   
    
  }
  
  basicChart(clase,value){
    this.chartChart = new Chart(this.lineCanvas.nativeElement,{
      type:'pie',
      data: {
          datasets:[{
            data: [{
              data:value,
            }],
            backgroundColor: [
                    'rgba(41,255,122,1)',
                    'rgba(255,148,12,1'
            ]
         }],
         label:[
           'Gastos',
           'Ingresos'
         ]
      },
      options:{
        tooltips:{
          enable: true
        }
      }
    });
  }
  back(){
    this.navCtrl.setRoot(IngresosPage);
  }
}
