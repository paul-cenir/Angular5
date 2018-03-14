import { Component } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Angular 4 with SASS';
    globalNamePaul = 'Paul Cenir';

    constructor() { }

}
