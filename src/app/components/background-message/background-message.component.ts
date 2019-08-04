import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-background-message',
  templateUrl: './background-message.component.html',
  styleUrls: ['./background-message.component.scss']
})
export class BackgroundMessageComponent implements OnInit {

  @Input() topMessage: string;
  @Input() bottomMessage: string;
  @Input() iconName: string;

  constructor() { }

  ngOnInit() {
  }

}
