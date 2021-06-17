import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingOneComponent } from './routing/routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing/routing-two/routing-two.component';
import { FourZeroFourComponent } from './routing/four-zero-four/four-zero-four.component';

const routes: Routes = [
  { path : 'routerone' , component : RoutingOneComponent },
  { path : 'routertwo' , component : RoutingTwoComponent },
  { path: '**' , component : FourZeroFourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
