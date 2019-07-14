import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class HeroRoutingModule { }
