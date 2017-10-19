import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemDetailsComponent implements OnInit {

    @Input() public set item(val: PtItem) {
        this.item$.next(val);
    }
    public item$ = new BehaviorSubject<PtItem>(null);

    constructor() { }

    public ngOnInit() { }
}
