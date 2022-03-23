import { Component, OnInit } from '@angular/core';
import { ListaJogadoresPage } from 'src/app/pages/lista-jogadores/lista-jogadores.page';

@Component({
  selector: 'app-card-perfil',
  templateUrl: './card-perfil.component.html',
  styleUrls: ['./card-perfil.component.scss'],
})
export class CardPerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }


  Jogadores = [
    {
      avatar: "/assets/images/luiz.jpg",
      nomeJogador: 'Luiz Felipe da Silva',
      tipoAssinatura: 'Mensalista',
      posicao: 'Meio Campo',
      descricao: 'Prefe jogar no meio campo e flutuar pelos lados, troca de passes rapidos' +
      ' e longos. Chutes de longa distancia'
    },
    {
      avatar: "/assets/images/rique.jpg",
      nomeJogador: 'Enrique Paiva',
      tipoAssinatura: 'Mensalista',
      posicao: 'Ataque',
      descricao: 'Velocidade, drible a grande numero de gols sao seu destaque durante a partida.' +
      ' Dificil de marcar por ter constante movimentação'
    },
    {
      avatar: "/assets/images/dudu.jpg",
      nomeJogador: 'Dudu',
      tipoAssinatura: 'Mensalista',
      posicao: 'Zaga',
      descricao: 'Ótimo tempo de roubo de bola, grande força para retirar jogador da jogada.' +
      ' Bom senso coletivo, presença de area e forte transição da defesa ao ataque'
    },
  ]

}
