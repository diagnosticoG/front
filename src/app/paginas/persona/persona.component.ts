import { Component } from '@angular/core';
import { MetaDataColumna } from 'src/app/compartido/interfaces/metaDataColumna.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ModalEliminarComponent } from 'src/app/compartido/modal-eliminar/modal-eliminar.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  datos: any[] = [
    {
      per_cedula: '1234567890',
      per_nombre: 'Juan',
      per_apellido: 'Pérez',
      per_fecha_nacimiento: '1990-05-15',
      per_genero: 'Masculino',
      per_estado_civil: 'Soltero'
    },
    {
      per_cedula: '9876543210',
      per_nombre: 'María',
      per_apellido: 'Gómez',
      per_fecha_nacimiento: '1985-08-20',
      per_genero: 'Femenino',
      per_estado_civil: 'Casada'
    },
    {
      per_cedula: '4567890123',
      per_nombre: 'Alex',
      per_apellido: 'García',
      per_fecha_nacimiento: '1995-03-10',
      per_genero: 'No binario',
      per_estado_civil: 'Divorciado'
    },
    {
      per_cedula: '7890123456',
      per_nombre: 'Patricia',
      per_apellido: 'López',
      per_fecha_nacimiento: '1982-11-25',
      per_genero: 'Otro',
      per_estado_civil: 'Viuda'
    }
  ];

  metaDataColumnas: MetaDataColumna[] = [
    { campo: 'per_cedula', titulo: 'GENERO' },
    { campo: 'per_nombre', titulo: 'NOMBRE' },
    { campo: 'per_apellido', titulo: 'APELLIDO' },
    { campo: 'per_fecha_nacimiento', titulo: 'FECHA NACIMIENTO' },
    { campo: 'per_genero', titulo: 'GENERO' },
    { campo: 'per_estado_civil', titulo: 'ESTADO CIVIL' },
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
