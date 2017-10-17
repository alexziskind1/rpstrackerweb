import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-backlog-detail-page',
    templateUrl: 'detail.page.component.html'
})

export class DetailPageComponent implements OnInit {

    public selectedDetailsScreenIndex = 0;

    constructor() { }

    public ngOnInit() { }

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
