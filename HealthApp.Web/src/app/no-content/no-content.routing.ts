import { Routes, RouterModule } from '@angular/router';

import { NoContentComponent } from './no-content.component';

const routes: Routes = [
    {
        path: '404',
        component: NoContentComponent
    },
];

export const routing = RouterModule.forChild(routes);

export const routedComponents = routes.filter(r => r.component != undefined).map(r => r.component)