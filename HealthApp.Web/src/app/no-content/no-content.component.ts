import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./no-content.component.html"),
    styles: [require("./no-content.component.scss")],
    selector: "h-no-content",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoContentComponent implements OnInit { 
    ngOnInit() {

    }
}
