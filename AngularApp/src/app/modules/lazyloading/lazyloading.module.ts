import { FooterComponent } from './../../components/footer/footer.component';
import { HeaderComponent } from './../../components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyloadingRoutingModule } from './lazyloading-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LazyloadingRoutingModule
  ]
})
export class LazyloadingModule { }
