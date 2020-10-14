import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { HomeComponent } from './components/home/home.component';
import { FormsComponent } from './components/forms/forms.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DesignsComponent } from './components/designs/designs.component';



const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'metodologia', component:MetodologiaComponent},
  {path:'forms',component:FormsComponent},
  {path:'controls',component:ControlsComponent},
  {path:'designs', component:DesignsComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
