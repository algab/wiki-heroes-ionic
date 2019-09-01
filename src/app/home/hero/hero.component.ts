import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
    url: string;
    heroes: any;

    constructor(private apollo: Apollo, private router: Router) { }

    ngOnInit(): void {
        this.url = environment.url;
        this.apollo.watchQuery({
            query: gql`
                query {
                    listHeroes(end:20) {
                        id,
                        name,
                        authors {
                            name
                        },
                        photo
                    }
                }
            `
        }).valueChanges.subscribe(({ data }) => {
            this.heroes = data;
        });
    }

    heroDetail(id) {
        this.router.navigateByUrl(`/wiki/heroes/${id}`);
    }
}
