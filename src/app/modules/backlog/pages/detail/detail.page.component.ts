import 'rxjs/add/operator/switchMap';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PtItem } from '../../../../shared/models/domain';
import { BacklogService } from '../../backlog.service';



@Component({
    selector: 'app-backlog-detail-page',
    templateUrl: 'detail.page.component.html'
})

export class DetailPageComponent implements OnInit {

    public selectedDetailsScreenIndex = 0;

    public item$ = new BehaviorSubject<PtItem>(null);

    constructor(
        private route: ActivatedRoute,
        private backlogService: BacklogService
    ) { }

    public ngOnInit() {
        this.route.params
            .switchMap((params: Params) => this.backlogService.getItem(parseInt(params['id'])))
            .subscribe((item: PtItem) => this.item$.next(item));
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
