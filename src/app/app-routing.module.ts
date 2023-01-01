import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TVComponent } from './product/tv/tv.component';
import { WashingmachineComponent } from './product/washingmachine/washingmachine.component';


const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component: LoginComponent},
  { path:'home',component: HomeComponent },
  { path:'aboutus',component: AboutusComponent},//localhosts://4200/aboutus
  { path:'contactus',component: ContactusComponent},
  { path:'product',component:ProductComponent, children: [ 
    // when open product on same page
  // { path:'product',children:[
    // {path: '', component:ProductComponent},

  // ] } when open product on there component
    {path: 'laptop',component:LaptopComponent},
    {path: 'washingmachine',component:WashingmachineComponent},
    {path: 'Tablet',component:TabletComponent},
    {path: 'TV',component:TVComponent},
  ]},
  { path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
