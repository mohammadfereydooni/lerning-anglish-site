import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StreemRoutingModule } from './streem-routing.module';
import { BanerComponent } from './baner/baner.component';
import { CarouselComponent } from './carousel/carousel.component';




@NgModule({
  declarations: [
    BanerComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    StreemRoutingModule,
    


  ],
  exports: [
    BanerComponent,
    CarouselComponent
  ]
})
export class StreemModule { }
