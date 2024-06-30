import { Component } from '@angular/core';
import { MetaDataColumna } from 'src/app/compartido/interfaces/metaDataColumna.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ModalEliminarComponent } from 'src/app/compartido/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
})
export class GeneroComponent {
  datos: any[] = [
    { gen_nombre: 'Masculino', gen_descripcion: 'Persona de género masculino' },
    { gen_nombre: 'Femenino', gen_descripcion: 'Persona de género femenino' },
    {
      gen_nombre: 'No binario',
      gen_descripcion:
        'Persona que no se identifica exclusivamente como masculina o femenina',
    },
    {
      gen_nombre: 'Otro',
      gen_descripcion: 'Persona con otro tipo de identidad de género',
    },
  ];

  metaDataColumnas: MetaDataColumna[] = [
    { campo: 'gen_nombre', titulo: 'GENERO' },
    { campo: 'gen_descripcion', titulo: 'DESCRIPCION' },
  ];

  constructor(private ventanaDialogo: MatDialog) {}

  abrirFormulario(fila: any = null) {
    console.log(fila);
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };
    const referencia: MatDialogRef<FormComponent> = this.ventanaDialogo.open(
      FormComponent,
      opciones
    );
    referencia.afterClosed().subscribe((form) => {
      if (form.gen_id) {
      } else {
      }
    });
  }

  eliminarRegistro(fila: any = null) {
    console.log(fila);
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };
    const referencia: MatDialogRef<ModalEliminarComponent> =
      this.ventanaDialogo.open(ModalEliminarComponent, opciones);
    referencia.afterClosed().subscribe((estado) => {
      if (estado == true) {
        console.log('hola');
      }
    });
  }
}
