import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { BacklogService } from '../../backlog.service';
import { Store } from '../../../../core/app-store';
import { PtItem } from '../../../../shared/models/domain';
import { NavigationService } from '../../../../core/services/navigation.service';
import { PtNewItem } from '../../../../shared/models';
import { Preset } from '../../../../shared/models/ui';


@Component({
    selector: 'app-backlog',
    templateUrl: 'backlog.page.component.html'
})
export class BacklogPageComponent implements OnInit {

    public items$: Observable<PtItem[]>;

    public selectedPreset$: Observable<Preset> = this.store.select<Preset>('selectedPreset');

    public showAddItemDialog = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private navigationService: NavigationService,
        private backlogService: BacklogService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            const reqPreset = params['preset'];
            if (reqPreset) {
                this.store.set('selectedPreset', reqPreset);
            }
        });

        this.items$ = this.store.select<PtItem[]>('backlogItems');

        this.selectedPreset$.subscribe(next => {
            this.backlogService.fetchItems();
        });
    }

    public selectListItem(item: PtItem) {
        this.navigationService.navigate(['/detail', item.id]);
    }

    public onAddTap(args) {
        this.showAddItemDialog = !this.showAddItemDialog;
    }

    public onAddDialogCloseTap(args) {
        this.showAddItemDialog = !this.showAddItemDialog;
    }

    public onNewItemFormDone(newItem: PtNewItem) {
        if (newItem != null) {
            this.backlogService.addNewPtItem(newItem, this.store.value.currentUser);
        }
        this.showAddItemDialog = !this.showAddItemDialog;
    }
}
