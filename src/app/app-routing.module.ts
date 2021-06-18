import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  /* {path:'', redirectTo:'/home', pathMatch:'full'}, = rajouter /home dans path: entre les '' */
  {path:'', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'about/:pageId', component:AboutComponent},
  {path:'about/:pageId/:imgId', component:DetailsComponent},
  {path:'contact', component:ContactComponent},
  {path:'login', component:LoginComponent},
  {path:'**', redirectTo:''}, /* bien le mettre en fin de parcours */


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
