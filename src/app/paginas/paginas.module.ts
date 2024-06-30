import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { GeneroComponent } from './genero/genero.component';
import { FormComponent } from './genero/form/form.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    GeneroComponent,
    FormComponent,
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    CompartidoModule,
    MatIconModule,
  ],
  exports: [
    GeneroComponent
  ]
})
export class PaginasModule { }
