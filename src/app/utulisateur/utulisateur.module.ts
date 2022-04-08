import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UtulisateurRoutingModule } from './utulisateur-routing.module';
import { UtulisateurComponent } from './components/utulisateur/utulisateur.component';
import { OneUserComponent } from './components/one-user/one-user.component';


@NgModule({
  declarations: [
    UtulisateurComponent,
    OneUserComponent
  ],
  exports: [
    UtulisateurComponent
  ],
  imports: [
    CommonModule,
    UtulisateurRoutingModule
  ]
})
export class UtulisateurModule { }
