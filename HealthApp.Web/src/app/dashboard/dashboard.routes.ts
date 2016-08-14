import { RouterConfig } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";

export const DasboardRoutes: RouterConfig = [
    {
        path: '',
        children: [
            { path: '', component: DashboardComponent }
        ]
    }
];