import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PtItem } from '../../../../shared/models/domain';
import { BacklogService } from '../../backlog.service';
import { Store } from '../../../../core/app-store';
import { Observable } from 'rxjs/Observable';



@Component({
    selector: 'app-backlog-detail-page',
    templateUrl: 'detail.page.component.html'
})

export class DetailPageComponent implements OnInit {

    public selectedDetailsScreenIndex = 0;

    public item$: Observable<PtItem>;
    public currentSelectedItem$: Observable<PtItem> = this.store.select<PtItem>('currentSelectedItem');

    constructor(
        private activatedRoute: ActivatedRoute,
        private backlogService: BacklogService,
        private store: Store
    ) { }

    public ngOnInit() {
        this.item$ = this.store.select<PtItem>('currentSelectedItem');
        this.backlogService.getItem(parseInt(this.activatedRoute.snapshot.params['id']));
    }

    public onDetailsTap(args) {
        this.selectedDetailsScreenIndex = 0;
    }
    public onTasksTap(args) {
        this.selectedDetailsScreenIndex = 1;
    }
    public onChitchatTap(args) {
        this.selectedDetailsScreenIndex = 2;
    }
}
