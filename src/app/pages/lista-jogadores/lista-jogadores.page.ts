import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-jogadores',
  templateUrl: './lista-jogadores.page.html',
  styleUrls: ['./lista-jogadores.page.scss'],
})
export class ListaJogadoresPage implements OnInit {

  // nomeJogador: string;
  // tipoAssinatura: string;
  // descricao: string;

  buscou: boolean;
  Jogadores = [
    {
      nomeJogador: 'Luiz Felipe da Silva',
      tipoAssinatura: 'Mensalista',
      posicao: 'Meio Campo',
      descricao: 'Prefe jogar no meio campo e flutuar pelos lados, troca de passes rapidos' +
      ' e longos. Chutes de longa distancia'
    },
    {
      nomeJogador: 'Enrique Paiva',
      tipoAssinatura: 'Mensalista',
      posicao: 'Ataque',
      descricao: 'Velocidade, drible a grande numero de gols sao seu destaque durante a partida.' +
      ' Dificil de marcar por ter constante movimentação'
    },
    {
      nomeJogador: 'Dudu',
      tipoAssinatura: 'Mensalista',
      posicao: 'Zaga',
      descricao: 'Ótimo tempo de roubo de bola, grande força para retirar jogador da jogada.' +
      ' Bom senso coletivo, presença de area e forte transição da defesa ao ataque'
    },
  ]

  // TODO: Criar um "JogadorRequest() para salvar os nomes"
  constructor() { }

  ngOnInit() {
  }

  buscarJogadores(){
    this.buscou = true;
  }
}
