import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { environment } from 'src/environments/environment';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'evil',
    templateUrl: 'evil.component.html',
    styleUrls: ['evil.component.scss']
})
export class EvilComponent implements OnInit {
    evils: any = {};
    url: string = null;

    constructor(private apollo: Apollo, private router: Router, private spinner: NgxSpinnerService) { }

    ngOnInit(): void {
        this.spinner.show();
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
            this.spinner.hide();
        });
    }

    evilDetail(id) {
        this.router.navigateByUrl(`/wiki/evils/${id}`);
    }
}
