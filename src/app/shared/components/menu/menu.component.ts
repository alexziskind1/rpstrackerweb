import { Component, OnInit } from '@angular/core';
import { Preset } from '../../models/ui';
import { Store } from '../../../core/app-store';
import { NavigationService } from '../../../core/services/navigation.service';

@Component({
    selector: 'pt-menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent implements OnInit {

    constructor(
        private store: Store,
        private navigationService: NavigationService
    ) { }

    public ngOnInit() { }

    public selectPreset(preset: Preset) {
        this.navigationService.navigate(['/backlog', preset]);
    }

}
