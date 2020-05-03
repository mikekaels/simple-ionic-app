import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/camera/ngx';
import { Contacts } from '@ionic-native/contacts/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { SMS } from '@ionic-native/sms/ngx';
import { FormsModule } from '@angular/forms';

@NgModule({
   declarations: [AppComponent],
   entryComponents: [],
   imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
   providers: [
      Camera,
      StatusBar,
      SplashScreen,
      { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
      Contacts,
      CallNumber,
      SMS
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
