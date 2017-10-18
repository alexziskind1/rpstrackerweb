import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'app-dialog',
    templateUrl: 'dialog.component.html',
    styleUrls: ['dialog.component.css'],
    animations: [
        trigger('dialog', [
            transition('void => *', [
                style({ transform: 'scale(.3, .3)' }),
                animate(200)
            ]),
            transition('* => void', [
                animate(200, style({ transform: 'scale(.0, .0)' }))
            ])
        ])
    ]
})
export class DialogComponent implements OnInit {
    @Input() closable = true;
    @Input() visible: boolean;
    @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    close() {
        this.visible = false;
        this.visibleChange.emit(this.visible);
    }
}
