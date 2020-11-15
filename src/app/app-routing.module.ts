import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalhesComponent } from './navegacao/detalhes/detalhes.component';

import { HomeComponent } from './navegacao/home/home.component';
import { ListaProfissionaisComponent } from './navegacao/lista-profissionais/lista-profissionais.component';
import { PagamentoComponent } from './navegacao/pagamento/pagamento.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-profissionais', component: ListaProfissionaisComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'pagamento', component: PagamentoComponent },


  { path: '',
    loadChildren: () => import('./conta/conta.module')
      .then(m => m.ContaModule)
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
