import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import { Component } from '@angular/core';
import { ChartData } from 'src/app/models/ChartData';

describe('PieChartComponent', () => {
  let hostComponent: TestHostComponent;
  let component: PieChartComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartComponent, TestHostComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    component = hostFixture.debugElement.children[0].componentInstance;
    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Component({
  selector: `host-component`,
  template: `<app-pie-chart [idSelector]="idSelector" [chartData]="chartData" [isDonut]="true"></app-pie-chart>`
})
class TestHostComponent {
  chartData: ChartData = fakeChartData;
  idSelector: string = "pie-chart-id-selector";
  isDonut: boolean = false;
  width: number = 200;
  height: number = 200;
}

const fakeChartData: ChartData = {
  values: { Value1: 1, Value2: 2, Value3: 3 },
  colorDomains: ["Value1", "Value2", "Value3"],
  colors: ["#ff0000", "#00ff00", "#0000ff"]

}

