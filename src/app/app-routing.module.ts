import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './navegacao/home/home.component';
import { ListaProfissionaisComponent } from './navegacao/lista-profissionais/lista-profissionais.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'lista-profissionais', component: ListaProfissionaisComponent },

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
