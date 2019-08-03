import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from '@angular/forms'
import { AppComponent } from "./app.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "./screens/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { IssuesComponent } from "./screens/issues/issues.component";
import { NotFound404Component } from './screens/not-found404/not-found404.component';
import { ZeroMatchesComponent } from './components/zero-matches/zero-matches.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    IssuesComponent,
    NotFound404Component,
    ZeroMatchesComponent
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
