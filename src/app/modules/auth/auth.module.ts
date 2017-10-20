import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '../../core/services/auth.service';
import { authProviders } from '../../app.routing';
import { LoginPageComponent } from './pages/login/login.page.component';
import { LogoutPageComponent } from './pages/login/logout.page.component';

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
