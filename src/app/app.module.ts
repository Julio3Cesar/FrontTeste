import {ProdutosService} from './_services/produtos/produtos.service';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import { routing } from './app.routing';
import {ProdutosComponent} from './produtos/produtos.component';
import {ListaNegociosComponent} from './lista-negocios/lista-negocios.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    ListaNegociosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
