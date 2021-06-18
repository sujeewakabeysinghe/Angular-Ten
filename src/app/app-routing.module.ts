import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoutingOneComponent } from './routing/routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing/routing-two/routing-two.component';
import { FourZeroFourComponent } from './routing/four-zero-four/four-zero-four.component';

import { OneComponent } from './advanced-module/one/one.component'; //sub module component added
import { TwoComponent } from './advanced-module/two/two.component'; //sub module component added

const routes: Routes = [
  { path : 'routerone' , component : RoutingOneComponent },
  { path : 'routertwo' , component : RoutingTwoComponent },

  { path: 'one', component: OneComponent }, //sub module component added same like before
  { path: 'two', component: TwoComponent }, //sub module component added same like before

  //{ path: '**' , component : FourZeroFourComponent } //this one shoud be the last one always

  { path: 'lazy', loadChildren:()=>import('./lazy-loading/lazy-loading.module').then(myModule=>myModule.LazyLoadingModule) } //this is the only place where this need to import, don't add in app module

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
