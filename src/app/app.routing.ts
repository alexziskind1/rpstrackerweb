import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogPageComponent } from './modules/backlog/pages/backlog/backlog.page.component';
import { DetailPageComponent } from './modules/backlog/pages/detail/detail.page.component';
import { AuthGuard } from './core/services/auth-guard.service';
// import { loginRoutes } from './modules/auth/auth.routing';
import { LoginPageComponent } from './modules/auth/pages/login.page.component';
import { LogoutPageComponent } from './modules/auth/pages/logout.page.component';

// import { PageComponent } from './templates/components/page/page.component';

// import { AuthGuard } from "./services/auth-guard.service";

export const authProviders = [
    AuthGuard
];

/*
export const guards = [
    AuthGuard,
];

const authGuards = {
    canLoad: [AuthGuard],
    canActivateChild: [AuthGuard],
};
*/

const routes: Routes = [
    {
        path: '',
        redirectTo: '/backlog/open',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: 'logout',
        component: LogoutPageComponent
    },
    {
        path: 'backlog',
        redirectTo: 'backlog/open',
        pathMatch: 'full'
    },
    /*{
        path: 'auth',
        loadChildren: './+auth/auth.module#AuthModule'
    },*/
    {
        path: 'backlog/:preset',
        component: BacklogPageComponent,
        canActivate: [AuthGuard]

        /*children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            {
                path: 'dashboard',
                loadChildren: './+dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'settings',
                loadChildren: './+settings/settings.module#SettingsModule'
            },
            {
                path: 'profile',
                loadChildren: './+profile/profile.module#ProfileModule'
            }
        ]*/
    },
    {
        path: 'detail/:id',
        component: DetailPageComponent
        /*children: [
            { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
            {
                path: 'dashboard',
                loadChildren: './+dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'settings',
                loadChildren: './+settings/settings.module#SettingsModule'
            },
            {
                path: 'profile',
                loadChildren: './+profile/profile.module#ProfileModule'
            }
        ]*/
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
