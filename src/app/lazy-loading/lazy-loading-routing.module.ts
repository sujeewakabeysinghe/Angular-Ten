import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyOneComponent } from './my-one/my-one.component';
import { MyTwoComponent } from './my-two/my-two.component';

const routes: Routes = [
  { path: 'myone' , component: MyOneComponent },
  { path: 'mytwo' , component: MyTwoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadingRoutingModule { }
