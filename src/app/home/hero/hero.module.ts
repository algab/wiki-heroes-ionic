import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HeroComponent },
      { path: ':id', component: HeroDetailComponent }
    ]
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [HeroComponent, HeroDetailComponent]
})
export class HeroModule { }
