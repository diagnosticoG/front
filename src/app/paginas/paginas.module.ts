import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginasRoutingModule } from './paginas-routing.module';
import { GeneroComponent } from './genero/genero.component';
import { FormComponent as GeneroFormComponent } from './genero/form/form.component';
import { FormComponent as PersonaFormComponent } from './persona/form/form.component';

import { CompartidoModule } from '../compartido/compartido.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { PersonaComponent } from './persona/persona.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    GeneroComponent,
    GeneroFormComponent,
    PersonaFormComponent,
    ContenedorComponent,
    PersonaComponent,
  ],
  imports: [
    CommonModule,
    PaginasRoutingModule,
    CompartidoModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    GeneroComponent
  ]
})
export class PaginasModule { }
