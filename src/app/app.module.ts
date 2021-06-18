import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

import { ModuleModule } from './module/module.module'; //imported sub module
import { ClickFunctionComponent } from './click-function/click-function.component';
import { EventsComponent } from './events/events.component';
import { GetInputValueComponent } from './get-input-value/get-input-value.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';
import { ConditionalStatementComponent } from './conditional-statement/conditional-statement.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentTwoComponent } from './parent-two/parent-two.component';
import { ChildTwoComponent } from './parent-two/child-two/child-two.component';
import { PipesComponent } from './pipes/pipes.component';
import { RoutingOneComponent } from './routing/routing-one/routing-one.component';
import { RoutingTwoComponent } from './routing/routing-two/routing-two.component';
import { FourZeroFourComponent } from './routing/four-zero-four/four-zero-four.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ModelsInterfacesComponent } from './models-interfaces/models-interfaces.component';

import { AdvancedModuleModule } from './advanced-module/advanced-module.module';
import { AdvancedRoutingModuleModule } from './advanced-routing-module/advanced-routing-module.module'

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ClickFunctionComponent,
    EventsComponent,
    GetInputValueComponent,
    PropertyBindComponent,
    ConditionalStatementComponent,
    SwitchCaseComponent,
    ForLoopComponent,
    SimpleFormComponent,
    StyleBindingComponent,
    ParentComponent,
    ChildComponent,
    ParentTwoComponent,
    ChildTwoComponent,
    PipesComponent,
    RoutingOneComponent,
    RoutingTwoComponent,
    FourZeroFourComponent,
    CustomDirectiveDirective,
    ModelsInterfacesComponent,
  ], //all the components contain in this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleModule, //added the created module to access things inside it
    FormsModule, //to implement forms we need to import this
    AdvancedModuleModule, //added the created sub module to access things inside it
    AdvancedRoutingModuleModule, //added the created sub module to access things inside it
  ],
  providers: [],
  bootstrap: [AppComponent] //which component want to show from this module
})
export class AppModule { }
