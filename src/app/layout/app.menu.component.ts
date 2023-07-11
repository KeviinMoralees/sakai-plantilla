import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'AMU2',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard'] },
                    { label: 'Mensajes de audio', icon: 'pi pi-fw pi-circle-off', routerLink: ['/messages'] },
                    { label: 'Estaciones', icon: 'pi pi-fw pi-circle-off', routerLink: ['/stations'] },
                ]
            },
        ];
    }
}
