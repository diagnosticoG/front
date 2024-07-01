import { Component, OnInit } from '@angular/core';
import { MetaDataColumna } from 'src/app/compartido/interfaces/metaDataColumna.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ModalEliminarComponent } from 'src/app/compartido/modal-eliminar/modal-eliminar.component';
import { GeneroService } from 'src/app/servicios/genero.service';
import { Genero } from 'src/app/compartido/modelos/genero.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
})
export class GeneroComponent implements OnInit {
  datosTotales: any[] = [];
  datos: any[] = [];
  totalRecords = 0;

  metaDataColumnas: MetaDataColumna[] = [
    { campo: 'nombre', titulo: 'GENERO' },
    { campo: 'descripcion', titulo: 'DESCRIPCION' },
  ];

  constructor(private ventanaDialogo: MatDialog, private generoServicios: GeneroService,private toastr: ToastrService) {}

  ngOnInit() {
    this.cargarGeneros();
  }

  abrirFormulario(fila: any = null) {
    const opciones = {
      panelClass: 'panel-container',
      disableClose: true,
      data: fila,
    };
    const referencia: MatDialogRef<FormComponent> = this.ventanaDialogo.open(FormComponent, opciones);
    referencia.afterClosed().subscribe((form) => {
      const genero: Genero = {
        Id: form.id ? form.id : 0,
        Nombre: form.nombre,
        Descripcion: form.descripcion
      };

      if (form.id) {
        this.generoServicios.actualizarGenero(form.id, form).subscribe(
          (datos) => {
            this.mensajeExitoso()
            this.cargarGeneros();
          },
          (error) => {
            this.mensajeError()
          }
        );
      } else {
        this.generoServicios.crearGenero(genero).subscribe(
          (datos) => {
            this.mensajeExitoso()
            this.cargarGeneros();
          },
          (error) => {
            this.mensajeError()
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
      if (estado == true) {
        this.generoServicios.eliminarGenero(fila.id).subscribe(
          (datos) => {
            this.mensajeExitoso()
            this.cargarGeneros();
          },
          (error) => {
            this.mensajeError()
          }
        );
      }
    });
  }

  cargarGeneros() {
    this.generoServicios.cargarGeneros().subscribe(
      (datos) => {
        this.datosTotales = datos;
        this.totalRecords = this.datosTotales.length;
        this.changePage(0);
      },
      (error) => {
        this.mensajeError()
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
