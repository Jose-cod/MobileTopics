import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { HomeComponent } from './components/home/home.component';
import { SoftwareComponent } from './software/software.component';

@NgModule({
  declarations: [
    AppComponent,
    MetodologiaComponent,
    HomeComponent,
    SoftwareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
