import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../../core/services/storage.service';

@Component({
    selector: 'app-backlog',
    template: `
        <span>Backlog</span>
    `
})
export class BacklogPageComponent implements OnInit {
    constructor(private storageService: StorageService) {

    }

    ngOnInit() {
    }
}
