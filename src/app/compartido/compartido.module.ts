import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    TablaComponent,
    ContenedorComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports:[
    TablaComponent,
    ContenedorComponent,
    MatTableModule,
    MatCardModule
  ]
})
export class CompartidoModule { }
