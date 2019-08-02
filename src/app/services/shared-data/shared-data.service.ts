import { Injectable, Output, EventEmitter } from "@angular/core";
import { Repository } from "src/app/models/Repository";
import { Issue } from "src/app/models/Issue";

@Injectable({
  providedIn: "root"
})
export class SharedDataService {
  prevSearchTerm: string = "";
  searchTerm: string = "";
  repoName: string = "";
  ownerName: string = "";
  repos: Repository[] = [];
  issues: Issue[] = [];

  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  search(searchTerm: string) {
    this.prevSearchTerm = this.searchTerm;
    this.searchTerm = searchTerm;
    this.searchTermChanged.emit(this.searchTerm);
  }
}
