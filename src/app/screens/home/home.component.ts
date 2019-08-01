import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Repository } from "src/app/models/Repository";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  repos: Repository[] = [];

  constructor(
    private gitHubService: GitHubService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    // this.repos = this.gitHubService.getRepositoriesByName("asd");
    this.gitHubService
      .getRepositoriesByName(this.sharedDataService.searchTerm)
      .subscribe((data: any) => {
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
}
