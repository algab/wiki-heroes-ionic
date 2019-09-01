import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-home-evil-detail',
    templateUrl: './evil-detail.component.html'
})
export class EvilDetailComponent implements OnInit {
    idEvil: string = null;
    evil: any = null;
    url: string = null;

    constructor(private apollo: Apollo, private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.url = environment.url;
        this.idEvil = this.router.snapshot.paramMap.get('id');
        this.apollo.watchQuery({
            query: gql`
                query evil($id: Int!) {
                    queryEvil:searchEvil(id:$id) {
                        name,
                        authors {
                            name
                        },
                        heroes {
                            name
                        },
                        photo,
                        publisher,
                        year,
                        first
                    }
                    queryNameEvil:searchEvil(id:$id) {
                        name(language:Portuguese)
                    }
                }
            `,
            variables: {
                id: this.idEvil
            }
        }).valueChanges.subscribe(({ data }) => {
            this.evil = data;
        });
    }
}
