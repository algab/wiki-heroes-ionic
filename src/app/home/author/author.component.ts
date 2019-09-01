import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home-author',
    templateUrl: './author.component.html',
    styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
    url: string;
    authors: any;

    constructor(private apollo: Apollo, private router: Router) { }

    ngOnInit(): void {
        this.url = environment.url;
        this.apollo.watchQuery({
            query: gql`
                query {
                    listAuthors(end:21) {
                        id,
                        name,
                        photo,
                        birthdate,
                        deathdate
                    }
                }
            `
        }).valueChanges.subscribe(({ data }) => {
            this.authors = data;
        });
    }

    authorDetail(id) {
        this.router.navigateByUrl(`/wiki/authors/${id}`);
    }
}
