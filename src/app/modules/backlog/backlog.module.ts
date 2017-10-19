import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BacklogService } from './backlog.service';

import { BacklogPageComponent } from './pages/backlog/backlog.page.component';
import { DetailPageComponent } from './pages/detail/detail.page.component';
import { PtListComponent, PtListItemComponent } from './components/backlog';
import {
    PtItemDetailsComponent,
    PtItemChitchatComponent,
    PtItemTasksComponent
} from './components/detail';
import { SharedModule } from '../../shared/shared.module';
import { NewItemFormComponent } from './components/new-item-form/new-item-form.component';
import { BacklogRepository } from './backlog.repository';




@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SharedModule
    ],
    exports: [],
    declarations: [
        BacklogPageComponent,
        DetailPageComponent,
        PtListComponent,
        PtListItemComponent,
        PtItemDetailsComponent,
        PtItemChitchatComponent,
        PtItemTasksComponent,
        NewItemFormComponent
    ],
    providers: [
        BacklogRepository,
        BacklogService
    ],
})
export class BacklogModule { }
