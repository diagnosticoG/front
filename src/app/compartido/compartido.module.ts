import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './tabla/tabla.component';
import { MatTableModule } from '@angular/material/table';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { MatCardModule } from '@angular/material/card';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule} from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalEliminarComponent } from './modal-eliminar/modal-eliminar.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    TablaComponent,
    ContenedorComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    ModalEliminarComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports:[
    TablaComponent,
    ContenedorComponent,
    BarraLateralComponent,
    BarraSuperiorComponent,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule
  ]
})
export class CompartidoModule { }
