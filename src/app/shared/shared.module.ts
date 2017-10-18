import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './components/menu/menu.component';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        MenuComponent,
        DialogComponent
    ],
    declarations: [
        MenuComponent,
        DialogComponent
    ],
    providers: [],
})
export class SharedModule { }
