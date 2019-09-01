import { Component, Input } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';

@Component({
    selector: 'app-home-popover',
    template: `
        <ion-button fill='clear' expand='full' (click)='alert()'>Sobre</ion-button>
    `,
    styleUrls: ['home.component.scss']
})
export class HomePopOverComponent {
    @Input() popover: any;

    constructor(private alertController: AlertController) { }

    async alert() {
        const alert = await this.alertController.create({
            header: 'Wiki Heroes',
            subHeader: 'Sobre',
            message: 'Um pequena enciclopédia sobre o mundo das HQs.',
            buttons: [{
                text: 'OK',
                handler: async () => {
                    this.popover.dismiss();
                },
            }]
        });
        await alert.present();
    }
}

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public popover: any;

    constructor(private popoverController: PopoverController) { }

    async openPopover(ev: any) {
        this.popover = await this.popoverController.create({
            component: HomePopOverComponent,
            componentProps: { popover: this.popover },
            event: ev,
            showBackdrop: false,
            translucent: true,
        });
        await this.popover.present();
    }
}
