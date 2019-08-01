import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Repository } from "../models/Repository";
import { Observable } from "rxjs";
import { Issue } from "../models/Issue";

@Injectable({
  providedIn: "root"
})
export class GitHubService {
  reposUrl: string = "https://api.github.com/search/repositories";
  repos: Repository[] = [];
  currentRepos: string;

  issuesUrl: string = "https://api.github.com/search/issues";
  issues: Issue[] = [];
  currentOwner: string;

  constructor(private http: HttpClient) {}

  getRepositoriesByName(name: string): Repository[] {
    if (this.currentRepos !== name || this.repos.length === 0) {
      this.repos = [];
      this.currentRepos = name;

      this.http.get(`${this.reposUrl}?q=bootstrap`).subscribe((data: any) => {
        data.items.forEach(repo => {
          this.repos.push(
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
    }

    return this.repos;
  }

  getIssuesForRepository(owner: string, name: string, state?: string): Issue[] {
    if (
      this.currentRepos !== name ||
      this.currentOwner !== owner ||
      this.repos.length === 0
    ) {
      this.issues = [];
      this.currentOwner = owner;
      this.currentRepos = name;

      this.http
        .get(
          `${this.issuesUrl}?q=repo:${owner}/${name}${
            state ? +`state:${state}` : ""
          }`
        )
        .subscribe((data: any) => {
          data.items.forEach(issue => {
            this.issues.push(issue);
          });
        });
    }

    return this.issues;
  }
}
