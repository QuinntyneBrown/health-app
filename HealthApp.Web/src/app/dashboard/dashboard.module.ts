import { NgModule } from '@angular/core';

import { routing, routedComponents } from './dashboard.routing';

const declarables = [routedComponents]

@NgModule({
    imports: [routing],
    declarations: [declarables]
})
export class DashboardModule { }