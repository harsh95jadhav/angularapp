import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { warningAlert } from './servers/servers.component';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatabindingassComponent } from './databindingass/databindingass.component';
import { StructuralaAssComponent } from './structurala-ass/structurala-ass.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DirassignComponent } from './dirassign/dirassign.component';
import { OutputComponent } from './output/output.component';
import { RemoveAddComponent } from './remove-add/remove-add.component';
import { HookComponent } from './hook/hook.component';
import { InputComponent } from './input/input.component';
import { SimpletemplateformComponent } from './simpletemplateform/simpletemplateform.component';
import { StudentresistrationassignComponent } from './studentresistrationassign/studentresistrationassign.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormAssignComponent } from './reactive-form-assign/reactive-form-assign.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { TemplateassComponent } from './templateass/templateass.component';
import { Serviecomp1Component } from './serviecomp1/serviecomp1.component';
import { Servicecomp2Component } from './servicecomp2/servicecomp2.component';


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
    RemoveAddComponent,
    HookComponent,
    InputComponent,
    SimpletemplateformComponent,
    StudentresistrationassignComponent,
    ReactiveFormComponent,
    ReactiveFormAssignComponent,
    TemplateDrivenFormComponent,
    TemplateassComponent,
    Serviecomp1Component,
    Servicecomp2Component
  

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
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
