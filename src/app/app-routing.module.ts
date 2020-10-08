import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { HomeComponent } from './components/home/home.component';
import { SoftwareComponent} from './software/software.component'


const routes: Routes = [
  {path:'software',component:SoftwareComponent},
  {path:'home', component:HomeComponent},
  {path:'metodologia', component:MetodologiaComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
