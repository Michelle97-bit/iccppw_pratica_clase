import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './perfil-page.html',
  styleUrl: './perfil-page.css',
})
export class PerfilPage {


  name = signal('Michelle');
  lastName = signal('Morocho');
  age = signal(28);

  getFullName = computed(() => `${this.name()} ${this.lastName()} con edad ${this.age()} años`);


  // Método para cambiar datos
  cambiarDatos() {
    this.name.set('Ana');
    this.lastName.set('Gonzales');
    this.age.set(25);
  }

  // Método para cambiar edad
  cambiarEdad() {
    this.age.set(18);
  }

  // Método para reset
  reset() {
    this.name.set('Michelle');
    this.lastName.set('Morocho');
    this.age.set(28);
  }

}
