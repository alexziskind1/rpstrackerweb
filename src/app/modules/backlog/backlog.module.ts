import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BacklogPageComponent } from './pages/backlog/backlog.page.component';
import { DetailPageComponent } from './pages/detail/detail.page.component';
import { PtListComponent } from './components/backlog/pt-list.component';
import { PtListItemComponent } from './components/backlog/pt-list-item.component';
import { BacklogService } from './backlog.service';



@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [
        BacklogPageComponent,
        DetailPageComponent,
        PtListComponent,
        PtListItemComponent
    ],
    providers: [
        BacklogService
    ],
})
export class BacklogModule { }
