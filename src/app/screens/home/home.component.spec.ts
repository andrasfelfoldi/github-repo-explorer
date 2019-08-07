import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { BackgroundMessageComponent } from '../../components/background-message/background-message.component';
import { RepoCardComponent } from '../../components/repo-card/repo-card.component';
import { GitHubService } from 'src/app/services/git-hub/git-hub.service';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { PieChartComponent } from '../../components/pie-chart/pie-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [HomeComponent, BackgroundMessageComponent, RepoCardComponent, PieChartComponent],
      providers: [
        GitHubService,
        SharedDataService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
