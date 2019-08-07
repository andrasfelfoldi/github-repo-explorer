import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartComponent } from './pie-chart.component';
import { Component } from '@angular/core';
import { ChartData } from 'src/app/models/ChartData';

fdescribe('PieChartComponent', () => {
  let hostComponent: TestHostComponent;
  let hostFixture: ComponentFixture<TestHostComponent>;
  let component: PieChartComponent;
  let htmlElement: HTMLElement;

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
    htmlElement = hostFixture.debugElement.children[0].nativeElement;

    hostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have three labels', () => {
    let labels = htmlElement.querySelectorAll(".badge");
    expect(labels.length).toBe(3);
  });

  it('should have proper texts in the labels', () => {
    let labels = htmlElement.querySelectorAll(".badge");
    expect(labels[0].innerHTML).toBe("Value1: 1");
    expect(labels[1].innerHTML).toBe("Value2: 2");
    expect(labels[2].innerHTML).toBe("Value3: 3");
  });

  it('should have proper colors for the labels', () => {
    let labels = htmlElement.querySelectorAll(".badge");
    expect(labels[0].getAttribute("style")).toBe("background-color: rgb(255, 0, 0);");
    expect(labels[1].getAttribute("style")).toBe("background-color: rgb(0, 255, 0);");
    expect(labels[2].getAttribute("style")).toBe("background-color: rgb(0, 0, 255);");
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

