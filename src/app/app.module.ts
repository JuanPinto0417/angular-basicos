import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroeModules } from './heroes/heroes.module';
import { ContadorModules } from './contador/contador.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroeModules,
    ContadorModules,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
