import { Component, OnInit, Input } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';

@Component({
    selector: 'pt-item-chitchat',
    templateUrl: 'pt-item-chitchat.component.html'
})

export class PtItemChitchatComponent implements OnInit {
    @Input() public item: PtItem;

    constructor() { }

    public ngOnInit() { }
}
