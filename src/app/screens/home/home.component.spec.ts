import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BackgroundMessageComponent } from '../../components/background-message/background-message.component';
import { RepoCardComponent } from '../../components/repo-card/repo-card.component';
import { GitHubService } from 'src/app/services/git-hub/git-hub.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let htmlElement: HTMLElement;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [HomeComponent, BackgroundMessageComponent, RepoCardComponent, PieChartComponent],
      providers: [
        { provide: GitHubService, useValue: MockGitHubService },
        SharedDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    htmlElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct background message initially', () => {
    let bgMessage = htmlElement.querySelector("app-background-message");
    expect(bgMessage).toBeTruthy();
    expect(bgMessage.querySelector("p").innerText).toBe("You haven't searched for anything yet.");
  });

});

class MockGitHubService {
  shouldFail: false;
  getRepositoriesByName(name: string): Observable<any> {
    return Observable.create(observer => {
      if (this.shouldFail) {
        observer.error(new Error());
      } else {
        observer.next({ items: [fakeRepo] });
      }
      observer.complete();
    })
  };
}

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