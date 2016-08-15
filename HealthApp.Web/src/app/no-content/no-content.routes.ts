import { RouterConfig } from '@angular/router';
import { NoContentComponent } from "./no-content.component";

export const AboutRoutes: RouterConfig = [
    {
        path: 'notfound',
        children: [
            { path: '', component: NoContentComponent }
        ]
    }
];