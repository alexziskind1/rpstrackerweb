import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';

import { AuthService } from '../../core/services/auth.service';
import { authProviders } from '../../app.routing';
import { AuthPageComponent } from './pages/auth/auth.page.component';
import { LoginFormComponent } from './components/login-form.component';
import { RegisterFormComponent } from './components/register-form.component';



@NgModule({
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        TranslateModule.forChild()
    ],
    exports: [],
    declarations: [
        AuthPageComponent,
        LoginFormComponent,
        RegisterFormComponent
    ],
    providers: [
        AuthService,
        authProviders
    ]
})
export class AuthModule { }
