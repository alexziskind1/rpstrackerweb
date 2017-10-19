import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

type EditingPropType = 'title' | 'description';

@Component({
    selector: 'pt-item-details',
    templateUrl: 'pt-item-details.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PtItemDetailsComponent implements OnInit {
    /*
    @Input() public set item(val: PtItem) {
        this.item$.next(val);
    }

    //public get item: PtItem;
    */

    @Input() public item: PtItem;
    @Output() itemSaved = new EventEmitter<PtItem>();

    public showDialog = false;
    public editingProp: EditingPropType;

    constructor() { }

    public ngOnInit() { }

    public onDialogSaveTap(args) {
        this.showDialog = !this.showDialog;
        this.itemSaved.emit(this.item);
    }

    public onTitleTap(args) {
        this.showDialog = !this.showDialog;
        this.editingProp = 'title';
    }

    public onDescriptionTap(args) {
        this.showDialog = !this.showDialog;
        this.editingProp = 'description';
    }
}
