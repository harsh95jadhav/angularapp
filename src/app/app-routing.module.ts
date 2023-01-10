import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  { path:'',redirectTo:'login',pathMatch:'full'},
  { path:'login',component: LoginComponent},
  { path:'home',component: HomeComponent },
  { path:'aboutus',component: AboutusComponent},//localhosts://4200/aboutus
  { path:'contactus',component: ContactusComponent},
  { path:'**',component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
