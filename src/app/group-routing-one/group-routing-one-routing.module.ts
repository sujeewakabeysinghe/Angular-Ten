import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CleanerComponent } from './cleaner/cleaner.component';
import { CustomerComponent } from './customer/customer.component';

const routes: Routes = [
  {
    path: 'oneadmin', children: [
      { path: 'cleaner' , component: CleanerComponent },
      { path: 'customer', component: CustomerComponent }
    ]
  } //to group we have to 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GroupRoutingOneRoutingModule { }
