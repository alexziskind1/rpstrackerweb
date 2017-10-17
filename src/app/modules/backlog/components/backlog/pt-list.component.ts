import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../../../shared/models/hero';

@Component({
    selector: 'pt-list',
    templateUrl: 'pt-list.component.html'
})
export class PtListComponent implements OnInit {

    @Input() heroes: Hero[];

    constructor() { }

    ngOnInit() { }
}