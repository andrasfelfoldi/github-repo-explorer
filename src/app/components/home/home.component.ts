import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub.service";
import { Repository } from "src/app/models/Repository";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  repos: Repository[] = null;

  constructor(private gitHubService: GitHubService) {}

  ngOnInit() {
    this.repos = this.gitHubService.getRepositoriesByName("asd");
  }
}
