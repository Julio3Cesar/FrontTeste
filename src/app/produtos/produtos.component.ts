import {ProdutosService} from '../_services/produtos/produtos.service';
import {Component, OnInit} from '@angular/core';

import {Item} from '../_share/models/Item';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  public formulario: FormGroup;
  public negociados = new Array<Item>();
  public itens: Item[];

  constructor(private formBuilder: FormBuilder, private produtosService: ProdutosService) {
    this.formulario = this.formBuilder.group({
      qto: [null, [Validators.required, Validators.min(1)]]
    })
  }

  ngOnInit() {
    this.itens = this.produtosService.getProdutos();
  }

  public getFoto(linkFoto): string {
    return linkFoto ? linkFoto : 'http://placehold.it/700x400';
  }

  public action(item, n) {
    if (n.value <= 0) {
      alert('O numero minimo para compra e 1 produto!');
    } else {
      item.quantidade = n.value;
      item.preco *= n.value;
      this.saveLocalStorage(item);
      alert('Adicionado a lista de negocios!');
    }
  }

  private saveLocalStorage(item) {
    this.negociados = JSON.parse(localStorage.getItem('negociados'));
    if (this.negociados) {
      this.negociados.push(item);
    } else {
      this.negociados = [item];
    }
    localStorage.setItem('negociados', JSON.stringify(this.negociados));
  }
}
