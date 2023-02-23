import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { SeriesComponent } from './components/series/series.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    IngresarComponent,
    InicioComponent,
    PeliculasComponent,
    SeriesComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    InicioComponent,
    
  ]
})
export class RoutesModule { }
