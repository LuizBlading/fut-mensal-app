import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaJogadoresPageRoutingModule } from './lista-jogadores-routing.module';

import { ListaJogadoresPage } from './lista-jogadores.page';
import { TabBarComponent } from 'src/app/components/tab-bar/tab-bar.component';
import { CardPerfilComponent } from 'src/app/components/card-perfil/card-perfil.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaJogadoresPageRoutingModule
  ],
  declarations: [ListaJogadoresPage, TabBarComponent, CardPerfilComponent]
})
export class ListaJogadoresPageModule {}
