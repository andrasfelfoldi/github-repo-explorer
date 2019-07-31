import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repository } from "../models/Repository";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GitHubService {
  rootUrl: string = "https://api.github.com/";

  constructor(private http: HttpClient) {}

  getRepositoriesByName(name: string): Repository[] {
    let repos = [];

    this.http
      .get(`${this.rootUrl}search/repositories?q=bootstrap`)
      .subscribe((data: any) => {
        data.items.forEach(repo => {
          repos.push(
            new Repository(
              repo.name,
              repo.description,
              repo.owner.login,
              repo.html_url,
              repo.forks_count,
              repo.stargazers_count,
              repo.open_issues_count,
              repo.issues_url
            )
          );
        });
      });

    return repos;
  }
}
