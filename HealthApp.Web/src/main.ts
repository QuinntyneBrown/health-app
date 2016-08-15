
import { NgModule, enableProdMode } from '@angular/core';
import { provideStore } from "@ngrx/store";

import { AppComponent } from "./app/app.component";

import { HeaderComponent } from "./app/shared/header.component";
import { MenuComponent } from "./app/shared/menu.component";

import { DashboardComponent } from "./app/dashboard/dashboard.component";

import { AddLogEntryFormComponent } from "./app/log-entries/add-log-entry-form.component";
import { LogEntryService } from "./app/log-entries/shared/log-entry.service";
import { LogEntryActionCreator } from "./app/log-entries/shared/log-entry.action-creator";
import { logEntryAdded } from "./app/log-entries/shared/log-entry.reducers";

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
        MenuComponent,

        DashboardComponent,
        AddLogEntryFormComponent
    ],
    imports: [BrowserModule, RouterModule.forRoot([
        ...DashboardRoutes,
        ...LogEntriesRoutes
    ])],
    bootstrap: [AppComponent],
    providers: [
        LogEntryActionCreator,
        provideStore({ logEntryAdded }),
        LogEntryService
    ]})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);