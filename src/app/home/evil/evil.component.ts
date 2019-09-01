import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home-evil',
    templateUrl: './evil.component.html',
    styleUrls: ['./evil.component.scss']
})
export class EvilComponent implements OnInit {
    url: string;
    evils: any;

    constructor(private apollo: Apollo, private router: Router) { }

    ngOnInit(): void {
        this.url = environment.url;
        this.apollo.watchQuery({
            query: gql`
                query {
                    listEvils(end:20) {
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
            this.evils = data;
        });
    }

    evilDetail(id) {
        this.router.navigateByUrl(`/wiki/evils/${id}`);
    }
}
