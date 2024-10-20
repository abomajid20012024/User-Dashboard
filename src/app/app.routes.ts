import { Routes } from '@angular/router';
import { Error404Component } from './shard/error/error404/error404.component';

export const routes: Routes =
    [
        {
            path: 'user',
            loadChildren: () => import('./presentation/user/user.module').then(m => m.UserModule)
        },

        { path: '**', component: Error404Component }

    ];
