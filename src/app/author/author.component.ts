import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { environment } from 'src/environments/environment';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'author',
    templateUrl: 'author.component.html',
    styleUrls: ['author.component.scss']
})
export class AuthorComponent implements OnInit {
    authors: any = {};
    url: string = null;

    constructor(private apollo: Apollo, private router: Router, private spinner: NgxSpinnerService) { }

    ngOnInit(): void {
        this.spinner.show();
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
            this.spinner.hide();
        });
    }

    authorDetail(id) {
        this.router.navigateByUrl(`/wiki/authors/${id}`);
    }
}
