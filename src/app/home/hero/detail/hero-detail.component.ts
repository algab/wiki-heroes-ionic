import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-home-hero-detail',
    templateUrl: './hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
    idHero: string = null;
    hero: any = null;
    url: string = null;

    constructor(private apollo: Apollo, private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.url = environment.url;
        this.idHero = this.router.snapshot.paramMap.get('id');
        this.apollo.watchQuery({
            query: gql`
                query hero($id: Int!) {
                    queryHero:searchHero(id:$id) {
                        name,
                        authors {
                            name
                        }
                        photo,
                        publisher,
                        year,
                        first,
                        evils {
                            name
                        }
                    }
                    queryNameHero:searchHero(id:$id) {
                        name(language:Portuguese)
                    }
                }
            `,
            variables: {
                id: this.idHero
            }
        }).valueChanges.subscribe(({ data }) => {
            this.hero = data;
        });
    }
}
