import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  titulo : string = ''
  formulario!: FormGroup;
  
  constructor(
    private dialogRef: MatDialogRef<FormComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: any,
 
  ) {
    this.titulo = datos ? 'EDITAR' : 'AGREGAR';
  }

  ngOnInit(): void {
    console.log(this.datos)
    this.cargarFormulario();
  }

  cargarFormulario() {
    this.formulario = new FormGroup({
      per_id: new FormControl(this.datos?.per_id),
      per_cedula: new FormControl(this.datos ? this.datos.per_cedula : '', Validators.required),
      per_nombre: new FormControl(this.datos ? this.datos.per_nombre : '', Validators.required),
      per_apellido: new FormControl(this.datos ? this.datos.per_apellido : '', Validators.required),
      per_fecha_nacimiento: new FormControl(this.datos ? this.datos.per_fecha_nacimiento : '', Validators.required),
      per_gen_id: new FormControl(this.datos ? this.datos.per_gen_id : '', Validators.required),
      per_estado_civil: new FormControl(this.datos ? this.datos.per_estado_civil : '', Validators.required),
    });
  }
  grabar(){
    const form = this.formulario.getRawValue();
    this.dialogRef.close(form);
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
