import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogPageComponent } from './modules/backlog/pages/backlog/backlog.page.component';

// import { PageComponent } from './templates/components/page/page.component';

// import { AuthGuard } from "./services/auth-guard.service";

export const authProviders = [
    // AuthGuard
];

const routes: Routes = [
    {
        path: '',
        redirectTo: '/backlog',
        // redirectTo: '/app/profile',
        pathMatch: 'full'
    },
    /*{
        path: 'auth',
        loadChildren: './+auth/auth.module#AuthModule'
    },*/
    {
        path: 'backlog',
        component: BacklogPageComponent
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
