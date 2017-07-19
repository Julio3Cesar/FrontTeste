import {Item} from '../_share/models/Item';
import {Component, OnInit} from '@angular/core';

import {ProdutosService} from '../_services/produtos/produtos.service';

@Component({
  selector: 'app-lista-negocios',
  templateUrl: './lista-negocios.component.html',
  styleUrls: ['./lista-negocios.component.css']
})
export class ListaNegociosComponent implements OnInit {

  public negociados: Item[];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.negociados = JSON.parse(localStorage.getItem('negociados'));
  }

  public showMsg(): boolean {
    return this.negociados ? false : true;
  }

}
