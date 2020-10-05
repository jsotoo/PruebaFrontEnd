import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VentaComponent } from './venta/venta.component';
import { ListaVentaComponent } from './lista-venta/lista-venta.component';

@NgModule({
  declarations: [
    AppComponent,
    VentaComponent,
    ListaVentaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
