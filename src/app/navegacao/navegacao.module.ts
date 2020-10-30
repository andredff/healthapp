import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLoginComponent } from './menu-login/menu-login.component';

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    MenuComponent,
    MenuLoginComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    MenuComponent,
    MenuLoginComponent,
    FooterComponent
  ]
})
export class NavegacaoModule {}
