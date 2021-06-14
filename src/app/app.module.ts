import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

import { ModuleModule } from './module/module.module';
import { ClickFunctionComponent } from './click-function/click-function.component';
import { EventsComponent } from './events/events.component';
import { GetInputValueComponent } from './get-input-value/get-input-value.component';
import { PropertyBindComponent } from './property-bind/property-bind.component';
import { ConditionalStatementComponent } from './conditional-statement/conditional-statement.component';
import { SwitchCaseComponent } from './switch-case/switch-case.component';
import { ForLoopComponent } from './for-loop/for-loop.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { StyleBindingComponent } from './style-binding/style-binding.component'

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
    StyleBindingComponent
  ], //all the components contain in this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleModule, //added the created module to access things inside it
    FormsModule, //to implement forms we need to import this
  ],
  providers: [],
  bootstrap: [AppComponent] //which component want to show from this module
})
export class AppModule { }
