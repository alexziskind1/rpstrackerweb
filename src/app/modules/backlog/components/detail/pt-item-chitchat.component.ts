import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PtItem, PtComment } from '../../../../shared/models/domain';


@Component({
    selector: 'pt-item-chitchat',
    templateUrl: 'pt-item-chitchat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemChitchatComponent implements OnInit {
    @Input() public set item(val: PtItem) {
        this.comments$.next(val.comments);
    }
    public comments$ = new BehaviorSubject<PtComment[]>(null);

    constructor() { }

    public ngOnInit() { }
}
