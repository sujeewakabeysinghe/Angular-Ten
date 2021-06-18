import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingTwoRoutingModule } from './group-routing-two-routing.module';
import { CleanerComponent } from './cleaner/cleaner.component';
import { CustomerComponent } from './customer/customer.component';


@NgModule({
  declarations: [
    CleanerComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingTwoRoutingModule
  ]
})
export class GroupRoutingTwoModule { }
