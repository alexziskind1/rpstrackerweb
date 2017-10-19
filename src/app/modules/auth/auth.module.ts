import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { LoginPageComponent } from './pages/login.page.component';
import { AuthService } from '../../core/services/auth.service';
import { LogoutPageComponent } from './pages/logout.page.component';
import { authProviders } from '../../app.routing';



@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        TranslateModule.forChild()
    ],
    exports: [],
    declarations: [
        LoginPageComponent,
        LogoutPageComponent
    ],
    providers: [
        AuthService,
        authProviders
    ]
})
export class AuthModule { }
