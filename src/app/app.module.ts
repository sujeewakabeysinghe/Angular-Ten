import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

import { ModuleModule } from './module/module.module';
import { ClickFunctionComponent } from './click-function/click-function.component';
import { EventsComponent } from './events/events.component'

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    ClickFunctionComponent,
    EventsComponent
  ], //all the components contain in this module
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModuleModule, //added the created module to access things inside it
  ],
  providers: [],
  bootstrap: [AppComponent] //which component want to show from this module
})
export class AppModule { }
