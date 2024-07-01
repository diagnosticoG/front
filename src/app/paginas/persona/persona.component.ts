import { Component } from '@angular/core';
import { MetaDataColumna } from 'src/app/compartido/interfaces/metaDataColumna.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ModalEliminarComponent } from 'src/app/compartido/modal-eliminar/modal-eliminar.component';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Persona } from 'src/app/compartido/modelos/persona.model';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  datosTotales: any[] = [];
  datos: any[] = [];
  totalRecords = 0;

  metaDataColumnas: MetaDataColumna[] = [
    { campo: 'cedula', titulo: 'CEDULA' },
    { campo: 'nombre', titulo: 'NOMBRE' },
    { campo: 'apellido', titulo: 'APELLIDO' },
    { campo: 'fecha_Nacimiento', titulo: 'FECHA NACIMIENTO' },
    { campo: 'genero_Nombre', titulo: 'GENERO' },
    { campo: 'estado_Civil', titulo: 'ESTADO CIVIL' },
  ];

  constructor(private ventanaDialogo: MatDialog, private personaServicio: PersonaService,private toastr: ToastrService,private castFecha: DatePipe) {
    this.cargarPersonas();
    this.changePage(0);
  }

  abrirFormulario(fila: any = null) {
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };
    const referencia: MatDialogRef<FormComponent> = this.ventanaDialogo.open(FormComponent, opciones);
    referencia.afterClosed().subscribe((form) => {
      const persona: Persona = form as Persona;
      persona.Id = form.Id ? form.Id : 0;
      if (form.Id) {
        this.personaServicio.actualizarPersona(form.Id, persona).subscribe(
          (data) => {
            this.mensajeExitoso()
            this.cargarPersonas();
          },
          (error) => {
            this.mensajeError();
          }
        );
      } else {
        this.personaServicio.crearPersona(persona).subscribe(
          (data) => {
            this.mensajeExitoso();
            this.cargarPersonas();
          },
          (error) => {
            this.mensajeError();
          }
        );
      }
    });
  }

  eliminarRegistro(fila: any = null) {
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };
    const referencia: MatDialogRef<ModalEliminarComponent> = this.ventanaDialogo.open(ModalEliminarComponent, opciones);
    referencia.afterClosed().subscribe((estado) => {
      if (estado) {
        this.personaServicio.eliminarPersona(fila.id).subscribe(
          (datos) => {
            this.mensajeExitoso()
            this.cargarPersonas();
          },
          (error) => {
            this.mensajeError()
          }
        );
      }
    });
  }

  cargarPersonas() {
    this.personaServicio.cargarPersonas().subscribe(
      (datos) => {
        this.datosTotales = datos.map((persona:any) => ({
          ...persona,
          fecha_Nacimiento: this.castFecha.transform(persona.fecha_Nacimiento,'yyyy-MM-dd')
        }));
        this.totalRecords = this.datosTotales.length;
        this.changePage(0);
      },
      (error) => {
        this.mensajeError();
      }
    );
  }

  changePage(page: number) {
    const pageSize = 5;
    const skip = pageSize * page;
    this.datos = this.datosTotales.slice(skip, skip + pageSize);
  }

  mensajeExitoso() {
    this.toastr.success('Operación realizada exitosamente', 'Sistema GAIA');
  }

  mensajeError() {
    this.toastr.error('Oops. Parece que hubo un problema con el servidor', 'Sistema GAIA');
  }
}
