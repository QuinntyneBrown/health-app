
import { NgModule, enableProdMode } from '@angular/core';
import { provideStore } from "@ngrx/store";

import { AppComponent } from "./app/app.component";

import { HeaderComponent, MenuComponent } from "./app/shared";

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


/* Feature Modules */
import { DashboardModule }  from './app/dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        MenuComponent,
                
        AddLogEntryFormComponent
    ],
    imports: [DashboardModule, BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot([
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