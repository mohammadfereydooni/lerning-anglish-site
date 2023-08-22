import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home/home.component';
import { HomeModule } from './home/home.module';
import { StreemModule } from './streem/streem.module';
import { NgImageSliderModule  } from 'node_modules/ng-image-slider';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    StreemModule,
    NgImageSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
