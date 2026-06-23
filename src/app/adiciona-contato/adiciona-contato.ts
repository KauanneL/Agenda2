import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Contato, TipoContato } from '../contatoQ1/contato';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss'
})
export class AdicionaContato {

  private formBuilder = inject(FormBuilder);

  protected contatos: Contato[] = [];

  protected tipos = Object.values(TipoContato);

  protected formContato: FormGroup;

  constructor() {

    this.formContato = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      aniversario: ['', Validators.required],
      tipo: ['', Validators.required]
    });

  }

  cadastrarContato(): void {

    const contato = new Contato(
      this.formContato.value.nome,
      this.formContato.value.telefone,
      this.formContato.value.email,
      this.formContato.value.aniversario,
      this.formContato.value.tipo
    );

    this.contatos.push(contato);

    this.formContato.reset();
  }

}