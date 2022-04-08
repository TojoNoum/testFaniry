import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UtulisateurComponent } from './components/utulisateur/utulisateur.component';

const routes: Routes = [
  {path: '', component: UtulisateurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtulisateurRoutingModule { }
