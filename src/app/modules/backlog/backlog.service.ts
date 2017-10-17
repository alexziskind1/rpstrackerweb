import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import { Injectable, Inject, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig, APP_CONFIG } from '../../app-config.module';
import { Hero } from '../../shared/models/hero';
import { Store } from '../../core/app-store';
import { PtItem } from '../../shared/models/domain';


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
        private zone: NgZone
    ) { }

    public getHeroes() {
        return HEROES;
    }

    public fetchItems() {
        this.http.get(this.filteredBacklogUrl)
            .map(res => res.json())
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            })
            .subscribe((data: PtItem[]) => {

                data.forEach(i => {
                    i.assignee.avatar = `${this.config.apiEndpoint}/photo/${i.assignee.id}`;
                });

                this.store.set('backlogItems', data);
            });
    }
}

const HEROES = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
];
