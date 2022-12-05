import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { warningAlert } from './servers/servers.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { FormsModule } from '@angular/forms';
import { DatabindingassComponent } from './databindingass/databindingass.component';
import { StructuralaAssComponent } from './structurala-ass/structurala-ass.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DirassignComponent } from './dirassign/dirassign.component';
import { OutputComponent } from './output/output.component';
import { RemoveAssignComponent } from './remove-assign/remove-assign.component';
import { RemoveAddComponent } from './remove-add/remove-add.component';


@NgModule({
  declarations:[
    AppComponent,
    ServerComponent,
    warningAlert,
    DemodirectivesComponent,
    NgswitchComponent,
    DatabindingassComponent,
    StructuralaAssComponent,
    AttriComponent,
    CustdirDirective,
    DirassignComponent,
    OutputComponent,
    RemoveAssignComponent,
    RemoveAddComponent
  

  ],
  // get declarations() {
  //   return this._declarations;
  // },
  // set declarations(value) {
  //   this._declarations = value;
  // },
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }