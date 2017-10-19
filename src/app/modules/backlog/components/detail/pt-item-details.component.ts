import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PtItem } from '../../../../shared/models/domain';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

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

    public editDialogName = 'Edit';
    public showDialog = false;
    public editingTitle = false;
    public editingDescription = false;


    constructor() { }

    public ngOnInit() { }

    public onDialogSaveTap(args) {
        this.showDialog = !this.showDialog;
        this.itemSaved.emit(this.item);
    }

    public onTitleTap(args) {
        this.editDialogName = 'Edit Title';
        this.showDialog = !this.showDialog;
        this.editingTitle = true;
        this.editingDescription = false;
    }

    public onDescriptionTap(args) {
        this.editDialogName = 'Edit Description';
        this.showDialog = !this.showDialog;
        this.editingTitle = false;
        this.editingDescription = true;
    }
}
