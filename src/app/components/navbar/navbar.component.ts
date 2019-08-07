import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  searchTerm: string = "";

  searchTermChangedSubscription: Subscription;

  constructor(private sharedDataService: SharedDataService, private router: Router) {
    this.searchTermChangedSubscription = this.sharedDataService.searchTermChanged.subscribe(
      (newSearchTerm: string) => {
        this.searchTerm = newSearchTerm;
      }
    );
  }

  ngOnInit() { }

  ngOnDestroy(): void {
    this.searchTermChangedSubscription.unsubscribe();
  }

  onSearch(): void {
    this.router.navigateByUrl(`/repositories/${this.searchTerm || ""}`);
    this.sharedDataService.search(this.searchTerm || "");
  }
}
