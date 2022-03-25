import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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
  isModalOpen: boolean;
  // modalController: any;

  // TODO: Criar um "JogadorRequest() para salvar os nomes"
  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {

  }

  buscarJogadores() {
    this.buscou = true;
  }

  adicionarJogador(){
    
  }

  closeModal(){
   // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
