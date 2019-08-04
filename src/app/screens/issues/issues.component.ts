import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Issue } from "src/app/models/Issue";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from "../../services/shared-data/shared-data.service";

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

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute,
    private sharedDataService: SharedDataService
  ) {
    this.owner = this.route.snapshot.paramMap.get("owner");
    this.repoName = this.route.snapshot.paramMap.get("repoName");
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
      this.sharedDataService.issues.length === 0
    ) {
      this.gitHubService
        .getIssuesForRepository(this.owner, this.repoName)
        .subscribe((data: any) => {
          data.items.forEach(issue => {
            this.issues.push(issue);
          });

          this.sharedDataService.issues = this.issues;
          this.sharedDataService.repoName = this.repoName;
          this.sharedDataService.ownerName = this.owner;
          this.loading = false;
        });
    } else {
      this.issues = this.sharedDataService.issues;
      this.loading = false;
    }
  }
}
