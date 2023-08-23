import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { GenericsComponent } from './generics/generics.component';
import { TypeassertionComponent } from './typeassertion/typeassertion.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DatatypesComponent,
    InterfacesComponent,
    GenericsComponent,
    TypeassertionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
