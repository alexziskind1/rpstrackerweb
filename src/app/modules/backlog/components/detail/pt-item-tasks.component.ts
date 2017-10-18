import { Component, OnInit, Input } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';

@Component({
    selector: 'pt-item-tasks',
    templateUrl: 'pt-item-tasks.component.html'
})

export class PtItemTasksComponent implements OnInit {

    @Input() public item: PtItem;

    constructor() { }

    public ngOnInit() { }
}
