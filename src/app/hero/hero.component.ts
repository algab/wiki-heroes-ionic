import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

import { environment } from 'src/environments/environment';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
    selector: 'hero',
    templateUrl: 'hero.component.html',
    styleUrls: ['hero.component.scss']
})
export class HeroComponent implements OnInit {
    url: string = null;
    heroes: any = null;

    constructor(private apollo: Apollo, private router: Router, private spinner: NgxSpinnerService) { }

    ngOnInit(): void {
        this.spinner.show();
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
            this.spinner.hide();
        });
    }

    heroDetail(id) {
        this.router.navigateByUrl(`/wiki/heroes/${id}`);
    }
}
