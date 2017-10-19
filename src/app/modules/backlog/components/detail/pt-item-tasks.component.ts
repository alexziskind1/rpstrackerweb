import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PtItem, PtTask } from '../../../../shared/models/domain';
import { PtNewTask } from '../../../../shared/models';


@Component({
    selector: 'pt-item-tasks',
    templateUrl: 'pt-item-tasks.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemTasksComponent implements OnInit {

    @Input() public set item(val: PtItem) {
        this.tasks = val.tasks;
    }
    @Output() addNewTask = new EventEmitter<PtNewTask>();

    public tasks: PtTask[] = [];

    public newTaskTitle: string = '';

    constructor() { }

    public ngOnInit() { }

    public onAddTapped(args) {
        let newTitle = this.newTaskTitle.trim();
        if (newTitle.length === 0)
            return;
        let newTask: PtNewTask = {
            title: newTitle,
            completed: false
        };
        this.addNewTask.emit(newTask);
        this.newTaskTitle = '';
        //newTaskTV.dismissSoftInput();
    }
}
