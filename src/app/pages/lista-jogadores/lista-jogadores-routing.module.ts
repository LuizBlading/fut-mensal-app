import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaJogadoresPage } from './lista-jogadores.page';

const routes: Routes = [
  {
    path: '',
    component: ListaJogadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaJogadoresPageRoutingModule {}
