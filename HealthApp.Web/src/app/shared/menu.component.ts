import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./menu.component.html"),
    styles: [require("./menu.component.scss")],
    selector: "h-menu",
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit { 
    ngOnInit() {

    }
}
