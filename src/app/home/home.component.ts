import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
    selector: 'home-popover',
    template: `
        <ion-button fill='clear' expand='full' (click)='alert()'>Sobre</ion-button>
    `,
    styleUrls: ['home.component.scss']
})
export class HomePopOverComponent {
    constructor(private alertController: AlertController) { }

    async alert() {
        const alert = await this.alertController.create({
            header: 'Wiki Heroes',
            subHeader: 'Sobre',
            message: 'Um pequena enciclopédia sobre o mundo das HQs.',
            buttons: ['OK']
        });
        await alert.present();
    }
}

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent {
    public popover: any = null;

    constructor(private popoverController: PopoverController) { }

    async openPopover(ev: any) {
        this.popover = await this.popoverController.create({
            component: HomePopOverComponent,
            event: ev,
        });
        return await this.popover.present();
    }
}
