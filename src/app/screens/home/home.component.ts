import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Repository } from "src/app/models/Repository";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";
import { Subscriber, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  repos: Repository[] = [];
  searchTerm: string = "";
  loading: boolean = false;

  searchTermChangedSubscription: Subscription;

  constructor(
    private gitHubService: GitHubService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    this.searchTerm = this.sharedDataService.searchTerm
    this.repos = this.sharedDataService.repos;

    this.searchTermChangedSubscription = this.sharedDataService.searchTermChanged.subscribe(
      (newSearchTerm: string) => {
        this.searchTerm = newSearchTerm;
        this.getRepositories();
      }
    );
  }

  ngOnDestroy(): void {
    this.searchTermChangedSubscription.unsubscribe();
  }

  getRepositories() {
    if (
      this.searchTerm !== this.sharedDataService.prevSearchTerm ||
      this.sharedDataService.repos.length === 0
    ) {
      this.loading = true;
      this.repos = [];
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

          this.loading = false;
          this.sharedDataService.repos = this.repos;
        });
    } else {
      this.loading = false;
      this.repos = this.sharedDataService.repos;
    }
  }
}
