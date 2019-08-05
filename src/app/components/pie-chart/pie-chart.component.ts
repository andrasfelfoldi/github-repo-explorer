import { Component, OnInit, Input } from '@angular/core';
import * as d3 from "d3";
import { ChartData } from '../../models/ChartData';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  @Input() idSelector: string;
  @Input() chartData: ChartData;
  @Input() isDonut: boolean = false;
  @Input() width: number = 200;
  @Input() height: number = 200;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart() {
    // set the dimensions and margins of the graph
    var margin = 0;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(this.width, this.height) / 2 - margin;

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select(`#${this.idSelector}`)
      .append("svg")
      .attr("width", this.width)
      .attr("height", this.height)
      .append("g")
      .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain(this.chartData.colorDomains)
      .range(this.chartData.colors);

    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value; });

    var data_ready = pie(d3.entries(this.chartData.values))

    // The arc generator
    var arc = d3.arc()
      .innerRadius(this.isDonut ? radius * 0.55 : 0)         // This is the size of the donut hole
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
