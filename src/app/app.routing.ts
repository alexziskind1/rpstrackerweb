import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogPageComponent } from './modules/backlog/pages/backlog/backlog.page.component';
import { DetailPageComponent } from './modules/backlog/pages/detail/detail.page.component';
import { AuthGuard } from './core/services/auth-guard.service';
import { AuthPageComponent } from './modules/auth/pages/auth/auth.page.component';

export const authProviders = [
    AuthGuard
];


const routes: Routes = [
    {
        path: '',
        redirectTo: '/backlog/open',
        pathMatch: 'full'
    },
    {
        path: 'auth/:action',
        component: AuthPageComponent
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
