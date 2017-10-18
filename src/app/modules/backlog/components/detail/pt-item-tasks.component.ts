import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { PtItem, PtTask } from '../../../../shared/models/domain';


@Component({
    selector: 'pt-item-tasks',
    templateUrl: 'pt-item-tasks.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemTasksComponent implements OnInit {

    @Input() public set item(val: PtItem) {
        this.tasks$.next(val.tasks);
    }
    public tasks$ = new BehaviorSubject<PtTask[]>(null);

    constructor() { }

    public ngOnInit() { }
}
