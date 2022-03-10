import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaJogadoresPageRoutingModule } from './lista-jogadores-routing.module';

import { ListaJogadoresPage } from './lista-jogadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaJogadoresPageRoutingModule
  ],
  declarations: [ListaJogadoresPage]
})
export class ListaJogadoresPageModule {}
