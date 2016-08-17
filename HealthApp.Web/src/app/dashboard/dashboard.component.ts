import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./dashboard.component.html"),
    styles: [require("./dashboard.component.scss")],
    selector: "h-dashboard",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {}
