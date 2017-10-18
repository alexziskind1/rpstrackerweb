import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PtNewItem } from '../../../../shared/models';
import { ItemTypeEnum } from '../../../../shared/enums';

@Component({
    selector: 'pt-new-item-form',
    templateUrl: 'new-item-form.component.html'
})

export class NewItemFormComponent implements OnInit {

    @Output() onFormDone = new EventEmitter<PtNewItem>();

    public newItem: PtNewItem;

    public get isBtnDoneDisabled() {
        return this.newItem.title.length === 0;
    }

    constructor() { }

    public ngOnInit() {
        this.newItem = {
            title: '',
            description: '',
            type: ItemTypeEnum.PBI
        };
    }

    public onDoneTap(args) {
        this.onFormDone.emit(this.newItem);
    }
}
