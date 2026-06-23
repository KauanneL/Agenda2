import { Component, inject } from '@angular/core';
import { AgendaService } from '../agenda-service';
import { Contato } from '../contatoQ1/contato';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  templateUrl: './exibe-contatos.html',
  styleUrl: './exibe-contatos.scss'
})
export class ExibeContatos {

  private agendaService = inject(AgendaService);

  obterContatos(): Contato[] {
    return this.agendaService.obterTodos();
  }

  removerContato(contato: Contato): void {
    this.agendaService.remover(contato);
  }

}