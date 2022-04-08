import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LandingPageComponent
  ],
  exports:[
    LandingPageComponent,
    RouterModule
  ],
  imports: [
    CommonModule
  ]
})
export class LandingPageModule { }
