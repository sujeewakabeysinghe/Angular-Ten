import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OneComponent,
    TwoComponent
  ] //created exports array for export component inside this
})
export class AdvancedModuleModule { }
