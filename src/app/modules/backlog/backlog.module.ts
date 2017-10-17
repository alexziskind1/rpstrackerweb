import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogService } from './backlog.service';

import { BacklogPageComponent } from './pages/backlog/backlog.page.component';
import { DetailPageComponent } from './pages/detail/detail.page.component';
import { PtListComponent, PtListItemComponent } from './components/backlog';
import { PtItemDetailsComponent, PtItemChitchatComponent, PtItemTasksComponent } from './components/detail';





@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        BacklogPageComponent,
        DetailPageComponent,
        PtListComponent,
        PtListItemComponent,
        PtItemDetailsComponent,
        PtItemChitchatComponent,
        PtItemTasksComponent
    ],
    providers: [
        BacklogService
    ],
})
export class BacklogModule { }
