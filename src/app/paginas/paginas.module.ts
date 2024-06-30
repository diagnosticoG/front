import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { GeneroComponent } from './genero/genero.component';
import { FormComponent } from './genero/form/form.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { MatIconModule } from '@angular/material/icon';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PersonaComponent } from './persona/persona.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    GeneroComponent,
    FormComponent,
    ContenedorComponent,
    PersonaComponent,
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    CompartidoModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule
  ],
  exports: [
    GeneroComponent
  ]
})
export class PaginasModule { }
