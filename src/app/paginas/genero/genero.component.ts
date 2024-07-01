import { Component } from '@angular/core';
import { MetaDataColumna } from 'src/app/compartido/interfaces/metaDataColumna.interface';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormComponent } from './form/form.component';
import { ModalEliminarComponent } from 'src/app/compartido/modal-eliminar/modal-eliminar.component';
import { GeneroService } from 'src/app/servicios/genero.service';
import {Genero} from 'src/app/compartido/modelos/genero.model'

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css'],
})
export class GeneroComponent {
  datos: any[] = [
  ];

  metaDataColumnas: MetaDataColumna[] = [
    { campo: 'nombre', titulo: 'GENERO' },
    { campo: 'descripcion', titulo: 'DESCRIPCION' },
  ];

  constructor(private ventanaDialogo: MatDialog,private generoServicios:GeneroService) {
    this.cargarGeneros()
  }

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

      const genero: Genero = {
        Id:form.id ? form.id : 0,
        Nombre: form.nombre,         
        Descripcion: form.descripcion
      };

      if (form.id) {
        this.generoServicios.actualizarGenero(form.id,form).subscribe(
          (datos) =>{
            this.cargarGeneros()
          },
          (error)=>{
            console.log(error)
          }
        );
      } else {
        
        this.generoServicios.crearGenero(genero).subscribe(
          (datos) => {
            this.cargarGeneros()
          },
          (error) => {
            console.log(error);
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
    const referencia: MatDialogRef<ModalEliminarComponent> =
      this.ventanaDialogo.open(ModalEliminarComponent, opciones);
    referencia.afterClosed().subscribe((estado) => {
      if (estado == true) {
        this.generoServicios.eliminarGenero(fila.id).subscribe(
          (datos) => {
            this.cargarGeneros()
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }

  cargarGeneros(){
    this.generoServicios.cargarGeneros().subscribe(
      (datos) => {
        this.datos = datos;
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
