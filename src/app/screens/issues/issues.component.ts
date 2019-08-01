import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Issue } from "src/app/models/Issue";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-issues",
  templateUrl: "./issues.component.html",
  styleUrls: ["./issues.component.scss"]
})
export class IssuesComponent implements OnInit {
  issues: Issue[] = [];
  owner: string;
  repoName: string;

  constructor(
    private gitHubService: GitHubService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get("owner");
    this.repoName = this.route.snapshot.paramMap.get("repoName");

    this.gitHubService
      .getIssuesForRepository(this.owner, this.repoName)
      .subscribe((data: any) => {
        data.items.forEach(issue => {
          this.issues.push(issue);
        });
      });
  }
}
