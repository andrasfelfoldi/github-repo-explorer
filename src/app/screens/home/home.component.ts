import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Repository } from "src/app/models/Repository";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";
import { Subscriber, Subscription } from "rxjs";
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  repos: Repository[] = [];
  loading: boolean = false;
  // noReposFound: boolean = false;
  isError: boolean = false;
  searchTerm: string;

  searchTermChangedSubscription: Subscription;

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) {
    this.searchTerm = this.route.snapshot.paramMap.get("searchTerm");

    this.sharedDataService.search(this.searchTerm);
  }

  ngOnInit() {
    // this.searchTerm = this.sharedDataService.searchTerm
    // this.repos = this.sharedDataService.repos;

    this.searchTermChangedSubscription = this.sharedDataService.searchTermChanged.subscribe(
      (newSearchTerm: string) => {
        // this.searchTerm = newSearchTerm;
        this.getRepositories();
      }
    );
    this.getRepositories();
  }

  ngOnDestroy(): void {
    this.searchTermChangedSubscription.unsubscribe();
  }

  getRepositories() {
    if (
      this.sharedDataService.searchTerm !== "" && (
        this.sharedDataService.searchTerm !== this.sharedDataService.prevSearchTerm ||
        this.sharedDataService.repos.length === 0 ||
        this.isError === true)
    ) {
      this.loading = true;
      this.isError = false;
      this.repos = [];
      this.gitHubService
        .getRepositoriesByName(this.sharedDataService.searchTerm)
        .subscribe((data: any) => {
          data.items.forEach(repo => {
            this.repos.push(repo)
          });

          this.loading = false;
          this.sharedDataService.repos = this.repos;
        },
          error => this.handleError(error));
    } else {
      this.isError = false;
      this.loading = false;
      this.repos = this.sharedDataService.repos;
    }
  }

  private handleError(error: HttpErrorResponse) {
    this.isError = true;
  };
}
