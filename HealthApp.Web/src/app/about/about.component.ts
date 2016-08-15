import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./about.component.html"),
    styles: [require("./about.component.scss")],
    selector: "h-about",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit { 
    ngOnInit() {

    }
}
