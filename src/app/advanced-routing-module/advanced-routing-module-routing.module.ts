import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComComponent } from './one-com/one-com.component'; //added the sub module component to sub route module
import { TwoComComponent } from './two-com/two-com.component'; //added the sub module component to sub route module

const routes: Routes = [
  { path: 'onecomponent', component: OneComComponent},
  { path: 'twocomponent', component: TwoComComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvancedRoutingModuleRoutingModule { }
