import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GroupRoutingOneRoutingModule } from './group-routing-one-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { CleanerComponent } from './cleaner/cleaner.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CleanerComponent
  ],
  imports: [
    CommonModule,
    GroupRoutingOneRoutingModule
  ]
})
export class GroupRoutingOneModule { }
