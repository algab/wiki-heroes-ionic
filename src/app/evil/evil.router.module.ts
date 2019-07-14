import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class EvilRoutingModule { }
