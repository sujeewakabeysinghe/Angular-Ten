import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { MyOneComponent } from './my-one/my-one.component';
import { MyTwoComponent } from './my-two/my-two.component';

console.log('Lazy Loading Module Loaded!')

@NgModule({
  declarations: [
    MyOneComponent,
    MyTwoComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ]
})
export class LazyLoadingModule { }
