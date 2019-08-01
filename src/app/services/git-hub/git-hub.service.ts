import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repository } from "../../models/Repository";
import { Observable } from "rxjs";
import { Issue } from "../../models/Issue";

@Injectable({
  providedIn: "root"
})
export class GitHubService {
  reposUrl: string = "https://api.github.com/search/repositories";
  issuesUrl: string = "https://api.github.com/search/issues";

  constructor(private http: HttpClient) {}

  getRepositoriesByName(name: string): Observable<any> {
    return this.http.get(`${this.reposUrl}?q=${name}`);
  }

  getIssuesForRepository(
    owner: string,
    name: string,
    state?: string
  ): Observable<any> {
    return this.http.get(
      `${this.issuesUrl}?q=repo:${owner}/${name}${
        state ? +`state:${state}` : ""
      }`
    );
  }
}
