import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Repository } from '../../models/Repository';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import * as d3 from "d3";

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  animations: [

  ]
})
export class RepoCardComponent implements OnInit {

  @Input() repo: Repository;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    // set the dimensions and margins of the graph
    var width = 200,
      height = 200,
      margin = 0;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select(`#${this.repo.owner.login}-${this.repo.name}`)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create data
    var data = { Issues: this.repo.open_issues_count, Forks: this.repo.forks_count, Stargazers: this.repo.stargazers_count };

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(["Issues", "Forks", "Stargazers"])
      .range(["#007bff", "#6c757d", "#17a2b8"]);

    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(data))

    // The arc generator
    var arc = d3.arc()
      .innerRadius(radius * 0.55)         // This is the size of the donut hole
      .outerRadius(radius * 0.8)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 1);
  }

}
