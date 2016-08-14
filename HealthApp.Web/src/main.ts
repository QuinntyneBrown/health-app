import { NgModule, enableProdMode } from '@angular/core';
import { AppComponent } from "./app/app.component";

import { HeaderComponent } from "./app/shared/header.component";
import { MenuComponent } from "./app/shared/menu.component";
    
import { environment } from "./app/environment";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashboardRoutes } from "./app/dashboard/dashboard.routes";
import { LogEntriesRoutes } from "./app/log-entries/log-entries.routes";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) 
    enableProdMode();

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot([
        ...DashboardRoutes,
        ...LogEntriesRoutes
    ])],
    bootstrap: [AppComponent],
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);