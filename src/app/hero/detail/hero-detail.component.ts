import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'hero-detail',
    templateUrl: 'hero-detail.component.html'
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
