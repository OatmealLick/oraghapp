import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MaterialModule} from "./modules/material/material.module";
import {HomeComponent} from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {RegisterComponent} from './components/register/register.component';
import {NavbarService} from "./services/navbar.service";
import {AuthenticationService} from "./services/authentication.service";
import { NavbarComponent } from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { EventComponent } from './components/event/event.component';
import { PastEventComponent } from './components/past-event/past-event.component';
import { HistoryComponent } from './components/history/history.component';
import { AddEventDialogComponent } from './components/add-event-dialog/add-event-dialog.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'history', component: HistoryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    NavbarComponent,
    EventComponent,
    PastEventComponent,
    HistoryComponent,
    AddEventDialogComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    NavbarService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
