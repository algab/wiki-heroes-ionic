import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class AuthorRoutingModule { }
