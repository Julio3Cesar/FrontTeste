export class Item {
  codigo: string;
  tipoMercadoria: string;
  nome: string;
  quantidade: number;
  preco: number;
  tipoNegocio: string;
  linkFoto: string;

  constructor(
    codigo?: string,
    tipoMercadoria?: string,
    nome?: string,
    quantidade?: number,
    preco?: number,
    tipoNegocio?: string,
    linkFoto?: string
  ) {
    this.codigo = codigo;
    this.tipoMercadoria = tipoMercadoria;
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
    this.tipoNegocio = tipoNegocio;
    this.linkFoto = linkFoto;
  }
}
