import { NgModule } from '@angular/core';
import { AddLogEntryFormComponent } from './add-log-entry-form.component';
import { provideStore } from "@ngrx/store";
import { LogEntryActionCreator, logEntryAdded, LogEntryService } from "./shared";

@NgModule({
    declarations: [AddLogEntryFormComponent],
    providers: [
        LogEntryActionCreator,
        provideStore({ logEntryAdded }),
        LogEntryService
    ]
})
export class LogEntriesModule { }
