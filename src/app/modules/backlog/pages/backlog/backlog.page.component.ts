import { Component, OnInit } from '@angular/core';
import { BacklogService } from '../../backlog.service';


@Component({
    selector: 'app-backlog',
    templateUrl: 'backlog.page.component.html'
})
export class BacklogPageComponent implements OnInit {

    heroes = [];

    constructor(private backlogService: BacklogService) {
        this.heroes = backlogService.getHeroes();
    }

    ngOnInit() {

    }
}
