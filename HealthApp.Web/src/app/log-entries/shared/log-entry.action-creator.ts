import { LogEntryService } from "./log-entry.service";
import { LOG_ENTRY_ADDED_OR_UPDATED, ALL_LOG_ENTRIES } from "./log-entry.actions";
import { Store } from "@ngrx/store";
import { Injectable } from "@angular/core"; 

@Injectable()
export class LogEntryActionCreator {
    constructor(private _logEntryService: LogEntryService, private _store: Store<any>) { }

    public getAll = () => {

    }

    public addOrUpdate = () => {

    }
}