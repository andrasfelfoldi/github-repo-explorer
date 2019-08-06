import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./screens/home/home.component";
import { IssuesComponent } from "./screens/issues/issues.component";
import { NotFound404Component } from './screens/not-found404/not-found404.component';

const routes: Routes = [
  { path: "repositories/:searchTerm/issues/:owner/:repoName", component: IssuesComponent },
  { path: "repositories/:searchTerm", component: HomeComponent },
  { path: "repositories", pathMatch: 'full', redirectTo: '' },
  { path: "", component: HomeComponent },
  { path: "**", component: NotFound404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
