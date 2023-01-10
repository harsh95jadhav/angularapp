import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule, Routes } from '@angular/router';
import { LaptopComponent } from './laptop/laptop.component';
import { ProductComponent } from './product.component';
import { TabletComponent } from './tablet/tablet.component';
import { TVComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';

const promodule:Routes = [
  { path:'product',component:ProductComponent, children: [ 
    // when open product on same page
  // { path:'product',children:[
  //   {path: '', component:ProductComponent},

  // ] } when open product on there component
    {path: 'laptop',component:LaptopComponent},
    {path: 'washingmachine',component:WashingmachineComponent},
    {path: 'Tablet',component:TabletComponent},
    {path: 'TV',component:TVComponent},
  ]},
]

@NgModule({
  declarations: [
    ProductComponent,
    LaptopComponent,
    WashingmachineComponent,
    TabletComponent,
    TVComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(promodule)
  ],
  exports: [
    RouterModule

  ]
})
export class PromoduleModule { }
