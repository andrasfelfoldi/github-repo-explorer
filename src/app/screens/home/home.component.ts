import { Component, OnInit } from "@angular/core";
import { GitHubService } from "../../services/git-hub/git-hub.service";
import { Repository } from "src/app/models/Repository";
import { SharedDataService } from "src/app/services/shared-data/shared-data.service";
import { Subscriber, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  repos: Repository[] = [];
  // searchTerm: string = "";
  loading: boolean = false;
  // noReposFound: boolean = false;


  searchTermChangedSubscription: Subscription;

  constructor(
    private gitHubService: GitHubService,
    private sharedDataService: SharedDataService
  ) { }

  ngOnInit() {
    // this.searchTerm = this.sharedDataService.searchTerm
    this.repos = this.sharedDataService.repos;

    this.searchTermChangedSubscription = this.sharedDataService.searchTermChanged.subscribe(
      (newSearchTerm: string) => {
        // this.searchTerm = newSearchTerm;
        this.getRepositories();
      }
    );
    this.getRepositories();
  }

  ngOnDestroy(): void {
    this.searchTermChangedSubscription.unsubscribe();
  }

  getRepositories() {
    if (
      this.sharedDataService.searchTerm !== "" && (
        this.sharedDataService.searchTerm !== this.sharedDataService.prevSearchTerm ||
        this.sharedDataService.repos.length === 0)
    ) {
      this.loading = true;
      this.repos = [];
      this.gitHubService
        .getRepositoriesByName(this.sharedDataService.searchTerm)
        .subscribe((data: any) => {
          data.items.forEach(repo => {
            this.repos.push(repo)
          });

          this.loading = false;
          this.sharedDataService.repos = this.repos;
        });
    } else {
      this.loading = false;
      this.repos = this.sharedDataService.repos;
    }
  }

  //   createChart(){
  //     // set the dimensions and margins of the graph
  // var width = 300,
  // height = 300,
  // margin = 0;

  // // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
  // var radius = Math.min(width, height) / 2 - margin;

  // // append the svg object to the div called 'my_dataviz'
  // var svg = d3.select(`#${}`)
  // .append("svg")
  // .attr("width", width)
  // .attr("height", height)
  // .append("g")
  // .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  // // Create dummy data
  // var data = {Issues: 9, Forks: 20, Stargazers:30, Watchers: 30};

  // // set the color scale
  // var color = d3.scaleOrdinal()
  // .domain(["Issues", "Forks", "Stargazers", "Watchers"])
  // .range(["#007bff","#6c757d","#17a2b8", "#ffc107"]);

  // // Compute the position of each group on the pie:
  // var pie = d3.pie()
  // .sort(null) // Do not sort group by size
  // .value(function(d) {return d.value; })
  // var data_ready = pie(d3.entries(data))

  // // The arc generator
  // var arc = d3.arc()
  // .innerRadius(radius * 0.55)         // This is the size of the donut hole
  // .outerRadius(radius * 0.8)

  // // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
  // svg
  // .selectAll('allSlices')
  // .data(data_ready)
  // .enter()
  // .append('path')
  // .attr('d', arc)
  // .attr('fill', function(d){ return(color(d.data.key)) })
  // .attr("stroke", "white")
  // .style("stroke-width", "4px")
  // .style("opacity", )
  //   }
}
