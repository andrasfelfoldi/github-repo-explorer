import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Repository } from '../../models/Repository';
import { ChartData } from '../../models/ChartData';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  animations: [

  ]
})
export class RepoCardComponent implements OnInit {

  @Input() repo: Repository;
  chartData: ChartData;

  constructor() { }

  ngOnInit() {
    let values = { Issues: this.repo.open_issues_count, Forks: this.repo.forks_count, Stargazers: this.repo.stargazers_count };
    let chartColorDomains = ['Issues', 'Forks', 'Stargazers'];
    let chartColors = ['#007bff', '#6c757d', '#17a2b8'];

    this.chartData = new ChartData(values, chartColorDomains, chartColors);
  }

}
