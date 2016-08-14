import { RouterConfig } from '@angular/router';
import { AddLogEntryFormComponent } from "./add-log-entry-form.component";

export const LogEntriesRoutes: RouterConfig = [
    {
        path: 'addlogentry',
        children: [
            { path: '', component: AddLogEntryFormComponent }
        ]
    }
];