import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IngresosPage } from '../pages/ingresos/ingresos';
import { GastosPage } from '../pages/gastos/gastos';
import { BalancePage } from '../pages/balance/balance';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { SucursalPage } from '../pages/sucursal/sucursal';
import { MiBancoPage } from '../pages/mi-banco/mi-banco';

import { NuevoPage } from '../pages/nuevo/nuevo';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { ListaIngresosService } from '../services/listaingresos/lista-ingresos.service';
import {ListaGastosService} from '../services/listagastos/lista-gastos.service'
import { EditarPage } from '../pages/editar/editar';
import { ToastService } from '../services/toast/toast.service';

import { Camera} from '@ionic-native/camera'
import { ClaseProvider } from '../providers/clase';

import { InAppBrowser} from '@ionic-native/in-app-browser';

import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation} from '@ionic-native/geolocation';

import { VoteService} from '../services/vote/vote.service';

import { MatSelectModule,MatButtonModule,MatRadioModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    MyApp,
    IngresosPage,
    GastosPage,
    BalancePage,
    LoginPage,
    SignupPage,
    SucursalPage,
    MiBancoPage,
    
    NuevoPage,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    NgxChartsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IngresosPage,
    GastosPage,
    BalancePage,
    LoginPage,
    SignupPage,
    SucursalPage,
    MiBancoPage,
    
    NuevoPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListaIngresosService,
    ListaGastosService,
    ToastService,
    Camera,
    AngularFireDatabaseModule,
    ClaseProvider,
    InAppBrowser,
    GoogleMaps,
    Geolocation,
    VoteService,
    AngularFirestoreModule,
    
    
  ]
})
export class AppModule {}