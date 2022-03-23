import { Component, OnInit } from '@angular/core';
import { CardPerfilComponent } from 'src/app/components/card-perfil/card-perfil.component';

@Component({
  selector: 'app-lista-jogadores',
  templateUrl: './lista-jogadores.page.html',
  styleUrls: ['./lista-jogadores.page.scss'],
  providers: [CardPerfilComponent]
})
export class ListaJogadoresPage implements OnInit {

  // nomeJogador: string;
  // tipoAssinatura: string;
  // descricao: string;
  // public cardJogadores: CardPerfilComponent;

  buscou: boolean = false;

  // TODO: Criar um "JogadorRequest() para salvar os nomes"
  constructor(
  ) { }

  ngOnInit() {

  }

  buscarJogadores() {
    this.buscou = true;
  }

  adicionarJogador(){
    
  }

}
