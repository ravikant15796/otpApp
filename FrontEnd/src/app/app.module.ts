import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GetcontactComponent } from './getcontact/getcontact.component';
import { HeaderComponent } from './header/header.component';
import { ContactdetailComponent } from './contactdetail/contactdetail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.modules';
import { SendsmsComponent } from './sendsms/sendsms.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    GetcontactComponent,
    HeaderComponent,
    ContactdetailComponent,
    SendsmsComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
