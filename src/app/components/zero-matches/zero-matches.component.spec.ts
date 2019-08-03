import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroMatchesComponent } from './zero-matches.component';

describe('ZeroMatchesComponent', () => {
  let component: ZeroMatchesComponent;
  let fixture: ComponentFixture<ZeroMatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroMatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
