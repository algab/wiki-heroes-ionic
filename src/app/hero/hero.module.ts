import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { HeroRoutingModule } from './hero.router.module';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './detail/hero-detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HeroRoutingModule,
    NgxSpinnerModule,
    RouterModule.forChild([{ path: '', component: HeroComponent }])
  ],
  declarations: [HeroComponent, HeroDetailComponent]
})
export class HeroModule { }
