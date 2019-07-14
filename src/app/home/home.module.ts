import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NgxSpinnerModule } from 'ngx-spinner';

import { HomeRoutingModule } from './home.router.module';

import { HomeComponent, HomePopOverComponent } from './home.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NgxSpinnerModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, HomePopOverComponent],
  entryComponents: [HomePopOverComponent]
})
export class HomeModule { }
