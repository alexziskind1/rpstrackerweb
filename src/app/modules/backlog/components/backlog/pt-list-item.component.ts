import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../../shared/models/hero';


@Component({
    selector: 'pt-list-item',
    templateUrl: 'pt-list-item.component.html'
})
export class PtListItemComponent implements OnInit {

    @Input() hero: Hero;

    constructor() { }

    ngOnInit() { }
}