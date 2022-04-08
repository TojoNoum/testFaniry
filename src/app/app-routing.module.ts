import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'utulisateur', loadChildren: () => import('./utulisateur/utulisateur.module').then(m => m.UtulisateurModule)},
  {path: '', component: LandingPageComponent}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
