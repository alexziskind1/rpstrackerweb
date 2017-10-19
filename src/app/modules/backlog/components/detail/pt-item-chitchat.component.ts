

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PtItem, PtComment } from '../../../../shared/models/domain';


@Component({
    selector: 'pt-item-chitchat',
    templateUrl: 'pt-item-chitchat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemChitchatComponent implements OnInit {
    @Input() public set item(val: PtItem) {
        this.comments = val.comments;
    }
    public comments: PtComment[] = [];

    constructor() { }

    public ngOnInit() { }
}
