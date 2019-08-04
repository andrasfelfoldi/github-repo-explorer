import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoSearchComponent } from './no-search.component';

describe('NoSearchComponent', () => {
  let component: NoSearchComponent;
  let fixture: ComponentFixture<NoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
