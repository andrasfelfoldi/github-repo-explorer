import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesComponent } from './issues.component';
import { HttpClientModule } from '@angular/common/http';
import { BackgroundMessageComponent } from 'src/app/components/background-message/background-message.component';
import { PieChartComponent } from 'src/app/components/pie-chart/pie-chart.component';
import { IssueCardComponent } from '../../components/issue-card/issue-card.component';
import { GitHubService } from 'src/app/services/git-hub/git-hub.service';
import { SharedDataService } from 'src/app/services/shared-data/shared-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('IssuesComponent', () => {
  let component: IssuesComponent;
  let fixture: ComponentFixture<IssuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [IssuesComponent, IssueCardComponent, BackgroundMessageComponent, PieChartComponent],
      providers: [
        GitHubService,
        SharedDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
