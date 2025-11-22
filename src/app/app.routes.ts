import { Routes } from '@angular/router';
import { PerfilPage } from './features/perfil-page/perfil-page';
import { HomePage } from './features/home-page/home-page';
import { FormularioBasic } from './features/formulario/pages/formulario-basic/formulario-basic';
import { FormularioDinamico } from './features/formulario/pages/formulario-dinamico/formulario-dinamico';
import { FormularioSwitches } from './features/formulario/pages/formulario-switches/formulario-switches';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component : HomePage
  },
  {
    path: 'perfil',
    component : PerfilPage
  },

  {
    path: 'formulario-basic',
    component : FormularioBasic
  },
  {
    path: 'formulario-dinamico',
    component : FormularioDinamico
  },
  {
    path: 'formulario-switches',
    component : FormularioSwitches
  },


];
