import { Component, OnInit, Input } from '@angular/core';
import { Issue } from 'src/app/models/Issue';
import MarkdownIt from 'markdown-it';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.scss']
})
export class IssueCardComponent implements OnInit {

  @Input() issue: Issue;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let markdown = new MarkdownIt();
    var result = markdown.render(this.issue.body);
    document.getElementById(`${this.issue.id}`).innerHTML = result;
  }

}
