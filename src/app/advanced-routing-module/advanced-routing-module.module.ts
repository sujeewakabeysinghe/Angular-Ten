import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedRoutingModuleRoutingModule } from './advanced-routing-module-routing.module';
import { OneComComponent } from './one-com/one-com.component';
import { TwoComComponent } from './two-com/two-com.component';


@NgModule({
  declarations: [
    OneComComponent,
    TwoComComponent
  ],
  imports: [
    CommonModule,
    AdvancedRoutingModuleRoutingModule
  ]
})
export class AdvancedRoutingModuleModule { }
