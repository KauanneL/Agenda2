import { Injectable } from '@angular/core';
import { Contato } from '../app/contatoQ1/contato';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private contatos: Contato[] = [];

  constructor() { }

  existe(c: Contato): boolean {

    const contato = this.contatos.find(
      contato => contato.getEmail() === c.getEmail()
    );

    return contato !== undefined;
  }

  adicionar(c: Contato): boolean {

    if (this.existe(c)) {
      return false;
    }

    this.contatos.push(c);
    return true;
  }

  remover(c: Contato): boolean {

    const indice = this.contatos.indexOf(c);

    if (indice === -1) {
      return false;
    }

    this.contatos.splice(indice, 1);
    return true;
  }

  obterTodos(): Contato[] {
    return this.contatos;
  }

}