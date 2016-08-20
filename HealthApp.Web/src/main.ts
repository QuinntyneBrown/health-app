
import { NgModule, enableProdMode } from '@angular/core';


import { AppComponent } from "./app/app.component";


import { environment } from "./app/environment";
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) 
    enableProdMode();

/* Feature Modules */
import { DashboardModule }  from './app/dashboard/dashboard.module';
import { LogEntriesModule }  from './app/log-entries/log-entries.module';
import { SharedModule } from "./app/shared/shared.module";


@NgModule({
    declarations: [
        AppComponent             
    ],
    imports: [
        DashboardModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    bootstrap: [AppComponent],
    })
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);