import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Issue } from "src/app/models/Issue";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../../services/shared-data/shared-data.service";
import { ChartData } from '../../models/ChartData';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.scss"]
})
export class IssuesComponent implements OnInit {

  issues: Issue[] = [];
  owner: string;
  repoName: string;
  loading: boolean = false;
  openCount: number = 0;
  closedCount: number = 0;
  chartData: ChartData;
  isError: boolean = false;

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) {
    this.owner = this.route.snapshot.paramMap.get("owner");
    this.repoName = this.route.snapshot.paramMap.get("repoName");

    // This line sets the current search query param in the shared data service.
    // This way, non-routed components can access the route parameters
    // For example, the search field in the navbar when reloading the page with query params in the url
    this.sharedDataService.search(this.repoName);
  }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.loading = true;
    if (
      this.repoName !== this.sharedDataService.repoName ||
      this.owner !== this.sharedDataService.ownerName ||
      this.sharedDataService.issues.length === 0 ||
      this.isError === true
    ) {
      this.gitHubService
        .getIssuesForRepository(this.owner, this.repoName)
        .subscribe((data: any) => {
          data.items.forEach(issue => {
            issue.state === "open" ? this.openCount++ : this.closedCount++;
            this.issues.push(issue);
          });

          this.initChartData();

          this.sharedDataService.issues = this.issues;
          this.sharedDataService.repoName = this.repoName;
          this.sharedDataService.ownerName = this.owner;
          this.isError = false;
          this.loading = false;
        },
          error => this.handleError(error));
    } else {
      this.issues = this.sharedDataService.issues;

      this.issues.forEach(issue => {
        issue.state === "open" ? this.openCount++ : this.closedCount++;
      });
      this.initChartData();

      this.isError = false;
      this.loading = false;
    }
  }

  initChartData(): void {
    let values = { Open: this.openCount, Closed: this.closedCount };
    let chartColorDomains = ['Open', 'Closed'];
    let chartColors = ['#28a745', '#dc3545'];

    this.chartData = new ChartData(values, chartColorDomains, chartColors);
  }

  private handleError(error: HttpErrorResponse) {
    this.isError = true;
  };
}
