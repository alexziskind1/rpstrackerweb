import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';


import { BacklogService } from '../../backlog.service';
import { Store } from '../../../../core/app-store';
import { PtItem } from '../../../../shared/models/domain';
import { NavigationService } from '../../../../core/services/navigation.service';



@Component({
    selector: 'app-backlog',
    templateUrl: 'backlog.page.component.html'
})
export class BacklogPageComponent implements OnInit {

    public items$: Observable<PtItem[]>;
    public selectedViewIndex$: Observable<number> = this.store.select<number>('selectedViewIndex');

    constructor(
        private navigationService: NavigationService,
        private backlogService: BacklogService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.items$ = this.store.select<PtItem[]>('backlogItems');
        this.selectedViewIndex$.subscribe(next => {
            this.backlogService.fetchItems();
        });
    }

    public selectListItem(item: PtItem) {
        console.log('item sell: ' + item.title);
        this.navigationService.navigate(['/detail', item.id]);
    }
}
