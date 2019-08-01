import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./screens/home/home.component";
import { IssuesComponent } from "./screens/issues/issues.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "issues/:owner/:repoName", component: IssuesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
