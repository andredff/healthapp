import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {MatIconModule} from '@angular/material/icon';
import { ListaProfissionaisComponent } from './lista-profissionais/lista-profissionais.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { PagamentoComponent } from './pagamento/pagamento.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MenuComponent,
    MenuLoginComponent,
    ListaProfissionaisComponent,
    DetalhesComponent,
    PagamentoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  exports: [
    MenuComponent,
    MenuLoginComponent,
    FooterComponent
  ]
})
export class NavegacaoModule {}
