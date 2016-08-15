import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
    template: require("./add-log-entry-form.component.html"),
    styles: [require("./add-log-entry-form.component.scss")],
    selector: "h-add-log-entry-form",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddLogEntryFormComponent implements OnInit { 
    constructor(private _store: Store<any>) {

    }

    ngOnInit() {

    }
}
