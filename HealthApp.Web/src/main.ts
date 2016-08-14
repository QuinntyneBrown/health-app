import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from "./app/app.component";
import { environment } from "./app/environment";
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) 
    enableProdMode();

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);