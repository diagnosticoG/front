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
      gen_id: new FormControl(this.datos?.gen_id),
      gen_nombre: new FormControl(this.datos ? this.datos.gen_nombre : '', Validators.required),
      gen_descripcion: new FormControl(this.datos ? this.datos.gen_descripcion : ''),
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
