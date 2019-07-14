import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { AuthorRoutingModule } from './author.router.module';

import { AuthorComponent } from './author.component';
import { AuthorDetailComponent } from './detail/author-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AuthorRoutingModule,
    NgxSpinnerModule,
    RouterModule.forChild([{ path: '', component: AuthorComponent }])
  ],
  declarations: [AuthorComponent, AuthorDetailComponent]
})
export class AuthorModule { }
