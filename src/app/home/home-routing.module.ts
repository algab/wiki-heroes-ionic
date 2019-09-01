import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'wiki',
    component: HomeComponent,
    children: [
      {
        path: 'heroes',
        children: [
          {
            path: '',
            loadChildren: './hero/hero.module#HeroModule'
          }
        ]
      },
      {
        path: 'evils',
        children: [
          {
            path: '',
            loadChildren: './evil/evil.module#EvilModule'
          }
        ]
      },
      {
        path: 'authors',
        children: [
          {
            path: '',
            loadChildren: './author/author.module#AuthorModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/wiki/heroes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/wiki/heroes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
