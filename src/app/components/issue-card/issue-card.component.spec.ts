import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardComponent } from './issue-card.component';
import { Component } from '@angular/core';

describe('IssueCardComponent', () => {
  let hostComponent: TestHostComponent;
  let issueCardComponent: IssueCardComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IssueCardComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    issueCardComponent = hostFixture.debugElement.children[0].componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(issueCardComponent).toBeTruthy();
  });
});

const fakeIssue = {
  id: "123",
  body: "test_issue_body",
  state: "open",
  title: "test_title",
  html_url: "test_url",
  user: {
    html_url: "user_url",
    login: "user_login"
  },
  created_at: "2019-04-22T07:28:35Z"
}

@Component({
  selector: `host-component`,
  template: `<app-issue-card [issue]="issue"></app-issue-card>`
})
class TestHostComponent {
  issue = fakeIssue;
}

