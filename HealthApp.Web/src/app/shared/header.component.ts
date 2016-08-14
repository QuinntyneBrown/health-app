import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./header.component.html"),
    styles: [require("./header.component.scss")],
    selector: "h-header",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit { 
    ngOnInit() {

    }
}
