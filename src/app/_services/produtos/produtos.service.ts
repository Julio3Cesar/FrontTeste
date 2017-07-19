import {Item} from '../../_share/models/Item';
import {Injectable} from '@angular/core';

@Injectable()
export class ProdutosService {

  public produtos: Item[] = new Array();

  constructor() {}

  getProdutos(): Item[] {
    const aux = localStorage.getItem('produtos');
    return aux ? JSON.parse(aux) : this.create();
  }

  create(): Item[] {
    for (let i = 0; i < 12; i++) {
      const negocio = i % 5 === 0 ? 'Comprar' : 'Vender';
      const link: string = i % 2 === 0 ? 'http://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/An' +
        'droid/3648317/244595839/Celular-Desbloqueado-Novo-Moto-X-32GB-Preto-com-Tela-de-5-2-Android-4-4-Wi-Fi-4G-Cam' +
        'era-13MP-e-Processador-Quad-Core-de-2-5-GHz-Claro-3648317.jpg' :
        'http://www.casasbahia-imagens.com.br/TelefoneseCelulares/Smartphones/iOSiPhone/10516014/622909758/iPho' +
        'ne-7-Apple-com-32GB-Tela-Retina-HD-de-47-com-3D-Touch-iOS-10-Sensor-Touch-ID-Camera-12MP-Resistente-a-Agua-' +
        'Wi-Fi-4G-LTE-e-NFC-Dourado-10516014.jpg';
      const produto = new Item(i + 'a', 'Celular', 'celular_nm_' + i, 0, i * 100, negocio, link);
      this.produtos[i] = produto;
    }
    localStorage.setItem('produtos', JSON.stringify(this.produtos));
    return this.produtos;
  }

}
