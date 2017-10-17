import { Component, OnInit, Input } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';


@Component({
    selector: 'pt-list-item',
    templateUrl: 'pt-list-item.component.html'
})
export class PtListItemComponent implements OnInit {

    @Input() item: PtItem;

    constructor() { }

    ngOnInit() { }
}
