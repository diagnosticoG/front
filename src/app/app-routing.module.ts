import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneroComponent } from './paginas/genero/genero.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/paginas/paginas.module').then(m => m.PaginasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
