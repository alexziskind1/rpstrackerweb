import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import { Injectable, Inject, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig, APP_CONFIG } from '../../app-config.module';
import { Hero } from '../../shared/models/hero';
import { Store } from '../../core/app-store';
import { PtItem } from '../../shared/models/domain';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { ObservableInput } from 'rxjs/Observable';


@Injectable()
export class BacklogService {

    private get filterIndex() {
        return this.store.value.selectedViewIndex;
    }

    private get filteredBacklogUrl() {
        switch (this.filterIndex.idx) {
            case 0:
                const user = this.store.value.currentUser;
                if (user) {
                    return `${this.config.apiEndpoint}/myItems?userId=${this.store.value.currentUser.id}`;
                } else {
                    return `${this.config.apiEndpoint}/backlog`;
                }
            case 1:
                return `${this.config.apiEndpoint}/openItems`;
            case 2:
                return `${this.config.apiEndpoint}/closedItems`;
            default:
                return `${this.config.apiEndpoint}/backlog`;
        }
    }

    constructor(
        @Inject(APP_CONFIG) private config: AppConfig,
        private http: Http,
        private store: Store,
        private errorHandlerService: ErrorHandlerService,
        private zone: NgZone
    ) { }

    private getSingleItemUrl(itemId: number) {
        return `${this.config.apiEndpoint}/item/${itemId}`;
    }

    public fetchItems() {
        this.http.get(this.filteredBacklogUrl)
            .map(res => res.json())
            .catch(this.errorHandlerService.handleHttpError)
            .subscribe((data: PtItem[]) => {
                data.forEach(i => {
                    i.assignee.avatar = `${this.config.apiEndpoint}/photo/${i.assignee.id}`;
                });
                this.store.set('backlogItems', data);
            });
    }

    public getItem(id: number) {
        let selectedItem = _.find(this.store.value.backlogItems, i => i.id === id);
        if (selectedItem) {
            this.store.set('currentSelectedItem', selectedItem);
        } else {
            this.http.get(this.getSingleItemUrl(id))
                .map(res => res.json())
                .catch(this.errorHandlerService.handleHttpError)
                .subscribe((data: PtItem) => {
                    this.store.set('currentSelectedItem', data);
                });
        }
    }
}
