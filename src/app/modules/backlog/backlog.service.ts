import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import { Injectable, Inject, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig, APP_CONFIG } from '../../app-config.module';
import { Hero } from '../../shared/models/hero';
import { Store } from '../../core/app-store';
import { PtItem, PtUser } from '../../shared/models/domain';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { ObservableInput } from 'rxjs/Observable';
import { PtNewItem } from '../../shared/models';
import { PriorityEnum, StatusEnum } from '../../shared/enums';


@Injectable()
export class BacklogService {

    private get currentPreset() {
        return this.store.value.selectedPreset;
    }

    private get filteredBacklogUrl() {
        switch (this.currentPreset) {
            case 'my':
                const user = this.store.value.currentUser;
                if (user) {
                    return `${this.config.apiEndpoint}/myItems?userId=${this.store.value.currentUser.id}`;
                } else {
                    return `${this.config.apiEndpoint}/backlog`;
                }
            case 'open':
                return `${this.config.apiEndpoint}/openItems`;
            case 'closed':
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

    private postSingleItemUrl() {
        return `${this.config.apiEndpoint}/item`;
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

    public addNewPtItem(newItem: PtNewItem, assignee: PtUser) {
        const item: PtItem = {
            id: 0,
            title: newItem.title,
            description: newItem.description,
            type: newItem.type,
            estimate: 0,
            priority: PriorityEnum.Medium,
            status: StatusEnum.Open,
            assignee: assignee,
            tasks: [],
            comments: [],
            dateCreated: new Date(),
            dateModified: new Date()
        };
        this.addItem(item);
    }

    public addItem(item: PtItem) {
        this.http.post(
            this.postSingleItemUrl(),
            { item: item }
        )
            .map(res => res.json())
            .catch(this.errorHandlerService.handleHttpError)
            .subscribe(next => {
                this.fetchItems();
                console.log(next);
            });
    }
}
