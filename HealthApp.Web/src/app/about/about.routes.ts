import { RouterConfig } from '@angular/router';
import { AboutComponent } from "./about.component";

export const AboutRoutes: RouterConfig = [
    {
        path: 'about',
        children: [
            { path: '', component: AboutComponent }
        ]        
    }
];