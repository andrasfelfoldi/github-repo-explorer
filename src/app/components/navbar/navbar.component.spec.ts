import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormsModule],
      declarations: [NavbarComponent],
      providers: [
        { provide: SharedDataService, useClass: FakeSharedDataService }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a subscription for search term change', () => {
    const sharedDataService = TestBed.get(SharedDataService);
    sharedDataService.search("test");
    expect(component.searchTerm).toBeTruthy();
  });

});

class FakeSharedDataService {
  @Output() searchTermChanged: EventEmitter<string> = new EventEmitter();

  search(searchTerm: string) {
    this.searchTermChanged.emit(searchTerm);
  }
}