import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenedorComponent } from './contenedor/contenedor.component';
import { GeneroComponent } from './genero/genero.component';
import { PersonaComponent } from './persona/persona.component';

const routes: Routes = [
  {
    path: '',
    component: ContenedorComponent,
    children: [
      { path: 'genero', component: GeneroComponent },
      { path: '', component: PersonaComponent },
      { path: 'persona', component: PersonaComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule { }
