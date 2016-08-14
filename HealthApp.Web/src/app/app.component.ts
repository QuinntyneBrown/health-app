import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./app.component.html"),
    styles: [require("./app.component.scss")],
    selector: "app",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit { 
    ngOnInit() {

    }
}
