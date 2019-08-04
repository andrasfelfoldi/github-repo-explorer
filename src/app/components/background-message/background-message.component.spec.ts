import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundMessageComponent } from './background-message.component';

describe('BackgroundMessageComponent', () => {
  let component: BackgroundMessageComponent;
  let fixture: ComponentFixture<BackgroundMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackgroundMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackgroundMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
