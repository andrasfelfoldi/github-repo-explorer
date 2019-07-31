export class Repository {
  constructor(
    name: string,
    description: string,
    owner: string,
    url: string,
    forksCount: number,
    stargazersCount: number,
    openIssuesCount: number,
    issuesUrl: string
  ) {
    this.name = name;
    this.description = description;
    this.owner = owner;
    this.url = url;
    this.forksCount = forksCount;
    this.stargazersCount = stargazersCount;
    this.openIssuesCount = openIssuesCount;
    this.issuesUrl = issuesUrl;
  }

  name: string;
  description: string;
  owner: string;
  url: string;
  forksCount: number;
  stargazersCount: number;
  openIssuesCount: number;
  issuesUrl: string;
}
