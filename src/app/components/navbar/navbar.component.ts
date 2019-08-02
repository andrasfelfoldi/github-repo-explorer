import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";

  constructor(private sharedDataService: SharedDataService, private router: Router) { }

  ngOnInit() { }

  onSearch(): void {
    this.router.navigateByUrl("/");
    this.sharedDataService.search(this.searchTerm);
  }
}
