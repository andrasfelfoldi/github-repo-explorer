import { TestBed } from "@angular/core/testing";

import { GitHubService } from "./git-hub.service";
import { Observable } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';

class FakeHttpClient {
  get() { return new Observable }
}

describe("GitHubService", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        GitHubService,
        { provide: HttpClient, useClass: FakeHttpClient }
      ]
    });
  });

  it("should be created", () => {
    const service: GitHubService = TestBed.get(GitHubService);
    expect(service).toBeTruthy();
  });
});
