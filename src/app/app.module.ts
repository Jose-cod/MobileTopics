import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { HomeComponent } from './components/home/home.component';
import { SoftwareComponent } from './software/software.component';
import { FormsComponent } from './components/forms/forms.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DesignsComponent } from './components/designs/designs.component';
import { NgFallimgModule} from 'ng-fallimg';

@NgModule({
  declarations: [
    AppComponent,
    MetodologiaComponent,
    HomeComponent,
    SoftwareComponent,
    ControlsComponent,
    DesignsComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFallimgModule.forRoot({
      default: '/assets/images/guardin_logo.png'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
