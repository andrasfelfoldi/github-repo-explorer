import { Injectable } from "@angular/core";
import { Repository } from "src/app/models/Repository";
import { Issue } from "src/app/models/Issue";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  searchTerm: string = "bootstrap";
  repoName: string = "";
  ownerName: string = "";
  repos: Repository[] = [];
  issues: Issue[] = [];

  constructor() {}
}
