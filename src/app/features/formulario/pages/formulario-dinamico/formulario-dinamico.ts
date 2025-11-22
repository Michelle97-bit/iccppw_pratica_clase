import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { FormUtils } from '../formulario-basic/formUtils';

@Component({
  selector: 'app-formulario-dinamico',
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-dinamico.html',
  styleUrl: './formulario-dinamico.css',
})
export class FormularioDinamico {
  private fb = inject(FormBuilder);
  formUtils = FormUtils;

  // Formulario principal
  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],

    lenguajes: this.fb.array([
      this.fb.control('Python', [Validators.required, Validators.minLength(3)]),
      this.fb.control('Java', [Validators.required, Validators.minLength(3)]),
    ], Validators.minLength(3))
  });

  newLenguaje: FormControl = this.fb.control('', [Validators.required, Validators.minLength(3)]);
onAddToLenguajes() {
  if (this.newLenguaje.invalid) return;

  this.lenguajes.push(
    this.fb.control(this.newLenguaje.value, Validators.required)
  );

  this.newLenguaje.reset();
}
get lenguajes(): FormArray {
  return this.myForm.get('lenguajes') as FormArray;
}
onDeleteLenguaje(index: number) {
  this.lenguajes.removeAt(index);
}

// Enviar
onSubmit() {
  this.myForm.markAllAsTouched();
  console.log(this.myForm.value);
}
}
