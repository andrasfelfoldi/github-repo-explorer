import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";

  constructor(private sharedDataService: SharedDataService) { }

  ngOnInit() { }

  onSearch(): void {
    this.sharedDataService.search(this.searchTerm);
  }
}
