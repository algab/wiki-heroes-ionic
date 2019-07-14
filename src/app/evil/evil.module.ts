import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { EvilRoutingModule } from './evil.router.module';

import { EvilComponent } from './evil.component';
import { EvilDetailComponent } from './detail/evil-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    EvilRoutingModule,
    NgxSpinnerModule,
    RouterModule.forChild([{ path: '', component: EvilComponent }])
  ],
  declarations: [EvilComponent, EvilDetailComponent]
})
export class EvilModule { }
