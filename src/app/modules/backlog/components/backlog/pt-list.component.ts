import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';

@Component({
    selector: 'pt-list',
    templateUrl: 'pt-list.component.html'
})
export class PtListComponent implements OnInit {

    @Input() items: PtItem[];
    @Output() listItemSelected: EventEmitter<PtItem> = new EventEmitter<PtItem>();

    constructor() { }

    ngOnInit() { }

    public listItemTap(args, item: PtItem) {
        this.listItemSelected.emit(item);
    }
}
