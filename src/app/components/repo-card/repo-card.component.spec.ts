import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoCardComponent } from './repo-card.component';
import { PieChartComponent } from '../pie-chart/pie-chart.component';
import { Component } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

describe('RepoCardComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let component: RepoCardComponent;
  let nativeElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [RepoCardComponent, TestHostComponent, PieChartComponent],
      providers: [

      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;

    component = hostFixture.debugElement.children[0].componentInstance;
    nativeElement = hostFixture.debugElement.children[0].nativeElement;

    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a chart', () => {
    let pieChart = nativeElement.querySelector("app-pie-chart");
    expect(pieChart).toBeTruthy();
  });

  it('should display the license', () => {
    let license = nativeElement.querySelector(".license");
    expect(license).toBeTruthy();
  });


});

const fakeRepo = {
  "id": 2126244,
  "name": "bootstrap",
  "owner": {
    "login": "twbs",
    "html_url": "https://github.com/twbs",
  },
  "html_url": "https://github.com/twbs/bootstrap",
  "description": "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.",
  "stargazers_count": 135064,
  "watchers_count": 135064,
  "forks_count": 66455,
  "open_issues_count": 354,
  "license": {
    "name": "MIT License",
  },
}

@Component({
  selector: `host-component`,
  template: `<app-repo-card [repo]="repo"></app-repo-card>`
})
class TestHostComponent {
  repo = fakeRepo;
}