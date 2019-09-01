import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-home-author-detail',
    templateUrl: './author-detail.component.html'
})
export class AuthorDetailComponent implements OnInit {
    idAuthor: string = null;
    author: any = null;
    url: string = null;

    constructor(private apollo: Apollo, private router: ActivatedRoute) { }

    ngOnInit(): void {
        this.url = environment.url;
        this.idAuthor = this.router.snapshot.paramMap.get('id');
        this.apollo.watchQuery({
            query: gql`
                query author($id: Int!) {
                    searchAuthor(id:$id) {
                        name,
                        photo,
                        birthdate,
                        deathdate,
                        country,
                        city,
                        publisher
                    }
                    authorCharacter(idAuthor:$id) {
                        name
                    }
                }
            `,
            variables: {
                id: this.idAuthor
            }
        }).valueChanges.subscribe(({ data }) => {
            this.author = data;
        });
    }
}
