import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./screens/home/home.component";
import { IssuesComponent } from "./screens/issues/issues.component";
import { NotFound404Component } from './screens/not-found404/not-found404.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "issues/:owner/:repoName", component: IssuesComponent },
  { path: "**", component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
