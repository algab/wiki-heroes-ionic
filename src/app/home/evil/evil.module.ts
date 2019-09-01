import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EvilComponent } from './evil.component';
import { EvilDetailComponent } from './detail/evil-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: EvilComponent },
      { path: ':id', component: EvilDetailComponent }
    ]
  },
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EvilComponent, EvilDetailComponent]
})
export class EvilModule { }
