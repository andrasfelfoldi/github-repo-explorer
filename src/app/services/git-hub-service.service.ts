import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class GitHubServiceService {
  rootUrl: string = "https://api.github.com/";

  constructor() {}

  getRepositoriesByName(name: string): void {}
}
