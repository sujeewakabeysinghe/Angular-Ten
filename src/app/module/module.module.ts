import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModcomComponent } from './modcom/modcom.component';



@NgModule({
  declarations: [
    ModcomComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModcomComponent
  ] //to get component which are inside this module
})
export class ModuleModule { }
