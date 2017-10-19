

import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { PtItem, PtComment } from '../../../../shared/models/domain';
import { PtNewComment } from '../../../../shared/models/index';

@Component({
    selector: 'pt-item-chitchat',
    templateUrl: 'pt-item-chitchat.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class PtItemChitchatComponent implements OnInit {
    @Input() public set item(val: PtItem) {
        this.comments = val.comments;
    }
    @Output() addNewComment = new EventEmitter<PtNewComment>();


    public comments: PtComment[] = [];

    public newComment = '';

    constructor() { }

    public ngOnInit() { }

    public onAddTapped(args) {
        const newCommentText = this.newComment.trim();
        if (newCommentText.length === 0) {
            return;
        }
        const newComment: PtNewComment = {
            title: newCommentText
        };
        this.addNewComment.emit(newComment);
        this.newComment = '';
        // newTaskTV.dismissSoftInput();
    }
}
