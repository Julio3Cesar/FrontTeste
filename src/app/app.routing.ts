import { ListaNegociosComponent } from './lista-negocios/lista-negocios.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'loja', component: ProdutosComponent},
  { path: 'lista', component: ListaNegociosComponent},
  { path: '', redirectTo: 'loja', pathMatch: 'full' },
  { path: '**', redirectTo: 'loja' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
