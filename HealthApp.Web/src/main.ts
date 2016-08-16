
import { NgModule, enableProdMode } from '@angular/core';
import { provideStore } from "@ngrx/store";

import { AppComponent } from "./app/app.component";

import { HeaderComponent, MenuComponent } from "./app/shared";

import {
    DashboardComponent,
    DashboardRoutes
} from "./app/dashboard";

import {
    AddLogEntryFormComponent,  
    LogEntryService,
    LogEntryActionCreator,
    logEntryAdded,  
    LogEntriesRoutes
} from "./app/log-entries";


import { environment } from "./app/environment";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


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
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
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