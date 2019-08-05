import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Repository } from '../../models/Repository';
// import {
//   trigger,
//   state,
//   style,
//   animate,
//   transition
// } from '@angular/animations';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.scss'],
  animations: [

  ]
})
export class RepoCardComponent implements OnInit {

  @Input() repo: Repository;
  chartData: object;
  chartColorDomains: string[];
  chartColors: string[];

  constructor() { }

  ngOnInit() {
    this.chartData = { Issues: this.repo.open_issues_count, Forks: this.repo.forks_count, Stargazers: this.repo.stargazers_count };
    this.chartColorDomains = ['Issues', 'Forks', 'Stargazers'];
    this.chartColors = ['#007bff', '#6c757d', '#17a2b8'];
  }

}
