import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-mission-result',
  templateUrl: './missionResult.component.html',
  styleUrls: ['./missionResult.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MissionResultComponent {
  @Input() mission;

  constructor() { }


}
