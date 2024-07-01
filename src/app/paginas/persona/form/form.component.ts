import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GeneroService } from 'src/app/servicios/genero.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  titulo : string = ''
  formulario!: FormGroup;
  datosGenero:any[]=[]
  
  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: any, private generoServicio:GeneroService
 
  ) {
    this.titulo = datos ? 'EDITAR' : 'AGREGAR';
  }

  ngOnInit(): void {
    this.cargarGeneros();
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      Id: new FormControl(this.datos?.id),
      Cedula: new FormControl(this.datos ? this.datos.cedula : '', Validators.required),
      Nombre: new FormControl(this.datos ? this.datos.nombre : '', Validators.required),
      Apellido: new FormControl(this.datos ? this.datos.apellido : '', Validators.required),
      Fecha_Nacimiento: new FormControl(this.datos ? this.datos.fecha_Nacimiento : '', Validators.required),
      Genero_Id: new FormControl(this.datos ? this.datos.genero_Id : '', Validators.required),
      Estado_Civil: new FormControl(this.datos ? this.datos.estado_Civil : '', Validators.required),
    });
  }
  grabar(){
    const form = this.formulario.getRawValue();
    this.dialogRef.close(form);
  }
  onCancel(): void {
    this.dialogRef.close();
  }

  cargarGeneros(){
    this.generoServicio.cargarGeneros().subscribe(
      (datos)=>{
        this.datosGenero = datos
        console.log(this.datosGenero)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
