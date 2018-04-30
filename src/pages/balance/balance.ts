import { Component,ViewChild,OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IngresosPage } from '../ingresos/ingresos';
import { ListaIngresosService } from './../../services/listaingresos/lista-ingresos.service';
import { ListaGastosService } from './../../services/listagastos/lista-gastos.service';


import { Chart} from 'chart.js';

import { AngularFireDatabase, snapshotChanges } from 'angularfire2/database';
import  firebase from 'firebase';

import { ClaseProvider } from './../../providers/clase';

import { VoteService} from './../../services/vote/vote.service';
import { AngularFirestore } from 'angularfire2/firestore';//FIREDATABASE ?
import { Observable } from 'rxjs/Rx';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { Movimiento} from './../../models/movimiento/movimiento.model'
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html'
})
export class BalancePage implements OnInit{
  
  movimiento ={
    clase:'',
    concepto: '',
    cantidad: '',
    fecha:'',
    imagen:''
    
   };
  
  movimientos;
  chartdata: boolean = false;

  claseCount = [];
  claseData = [];

  //Chart
  view: any[] = [700, 400];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = true;
  doughnut = false;

  constructor(public navCtrl: NavController,public claseService:ClaseProvider,
    private afDatabase:AngularFireDatabase, private vote:VoteService,private afs: AngularFirestore) {
   this.movimientos =  this.claseService.getListaTotal();
   
    
  }
  saveEntry() {
    this.vote.saveEntry(this.movimiento);
  }
  

  ngOnInit() {
    this.vote.getAllEntries().subscribe((results) => {
      this.chartdata = true;
      this.processData(results);
    })
  }
  onSelect(event) {
    console.log(event);
  }

  processData(entries) {
    this.claseCount = [];
    this.claseData = [];
    entries.forEach(element => {
      if (this.claseCount[element.clase])
        this.claseCount[element.clase] += 1;
      else
        this.claseCount[element.clase] = 1;
    });
    for (var key in this.claseCount) {
      let singleentry = {
        name: key,
        value: this.claseCount[key]
      }
      this.claseData.push(singleentry);
    }

  }
  back(){
    this.navCtrl.setRoot(IngresosPage);
  }
}
