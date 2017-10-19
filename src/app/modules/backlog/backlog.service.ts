import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import { Injectable, Inject, NgZone } from '@angular/core';
import { Http } from '@angular/http';
import { AppConfig, APP_CONFIG } from '../../app-config.module';
import { Hero } from '../../shared/models/hero';
import { Store } from '../../core/app-store';
import { PtItem, PtUser, PtTask } from '../../shared/models/domain';
import { ErrorHandlerService } from '../../core/services/error-handler.service';
import { ObservableInput } from 'rxjs/Observable';
import { PtNewItem, PtNewTask } from '../../shared/models';
import { PriorityEnum, StatusEnum } from '../../shared/enums';
import { BacklogRepository } from './backlog.repository';



@Injectable()
export class BacklogService {

    private get currentPreset() {
        return this.store.value.selectedPreset;
    }

    private get currentUserId() {
        if (this.store.value.currentUser) {
            return this.store.value.currentUser.id;
        } else {
            return undefined;
        }
    }

    constructor(
        private repo: BacklogRepository,
        private store: Store,
        private errorHandlerService: ErrorHandlerService,
        private zone: NgZone
    ) { }


    public fetchItems() {
        this.repo.getPtItems(
            this.currentPreset,
            this.currentUserId,
            this.errorHandlerService.handleHttpError,
            (ptItems: PtItem[]) => {
                this.store.set('backlogItems', ptItems);
            }
        );
    }


    public getPtItem(id: number) {
        this.repo.getPtItem(id,
            this.errorHandlerService.handleHttpError,
            (ptItem: PtItem) => {
                this.store.set('currentSelectedItem', ptItem);
            }
        );
    }

    public getItemFromCacheOrServer(id: number) {
        const selectedItem = _.find(this.store.value.backlogItems, i => i.id === id);
        if (selectedItem) {
            this.store.set('currentSelectedItem', selectedItem);
        } else {
            this.getPtItem(id);
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
        this.repo.insertPtItem(
            item,
            this.errorHandlerService.handleHttpError,
            (nextItem: PtItem) => {
                this.store.set('backlogItems', [...this.store.value.backlogItems, nextItem]);
            }
        );
    }

    public addNewPtTask(newTask: PtNewTask, currentItem: PtItem) {
        const task: PtTask = {
            id: 0,
            title: newTask.title,
            completed: false,
            dateCreated: new Date(),
            dateModified: new Date()
        };
        this.repo.insertPtTask(
            task,
            currentItem.id,
            this.errorHandlerService.handleHttpError,
            (nextTask: PtTask) => {
                this.getPtItem(currentItem.id);
                console.log(nextTask);
            }
        );
    }

    public togglePtTask(task: PtTask, currentItem: PtItem) {
        const taskToUpdate: PtTask = {
            id: task.id,
            title: task.title,
            completed: !task.completed,
            dateCreated: task.dateCreated,
            dateModified: new Date()
        };

        const updatedTasks = currentItem.tasks.map(t => {
            if (t.id === task.id) { return taskToUpdate; } else { return t; }
        });

        const updatedItem = Object.assign({}, currentItem, { tasks: updatedTasks });

        // Optimistically update local item
        this.store.set('currentSelectedItem', updatedItem);

        this.repo.updatePtTask(taskToUpdate, currentItem.id,
            this.errorHandlerService.handleHttpError,
            (updatedTask: PtTask) => {
                this.getPtItem(currentItem.id);
            }
        );
    }

}
