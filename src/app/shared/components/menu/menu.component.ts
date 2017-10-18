import { Component, OnInit } from '@angular/core';
import { ViewIndex } from '../../models/ui';
import { Store } from '../../../core/app-store';

@Component({
    selector: 'pt-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

    constructor(private store: Store) { }

    public ngOnInit() { }


    public selectFilteredView(itemFilterIndex: number) {
        this.store.set<ViewIndex>('selectedViewIndex', { idx: itemFilterIndex });
    }

}
