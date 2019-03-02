import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { PlatoDetalleComponent } from './component/plato-detalle/plato-detalle.component';
import { IndexHomeComponent } from './component/index/index-home/index-home.component';
import { DetalleComponent } from './component/view/detalle/detalle.component';
import { HomeComponent } from './component/view/home/home.component';
import { CheffComponent } from './component/view/cheff/cheff/cheff.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    PlatoDetalleComponent,
    IndexHomeComponent,
    DetalleComponent,
    HomeComponent,
    CheffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
