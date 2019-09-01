import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthorComponent } from './author.component';
import { AuthorDetailComponent } from './detail/author-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: AuthorComponent },
      { path: ':id', component: AuthorDetailComponent }
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
  declarations: [AuthorComponent, AuthorDetailComponent]
})
export class AuthorModule { }
