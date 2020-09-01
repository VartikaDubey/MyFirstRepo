import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-master-footer',
  templateUrl: './master-footer.component.html',
  styleUrls: ['./master-footer.component.scss']
})
export class MasterFooterComponent {

  public readonly developerName = environment.developerName;

  constructor() { }
}
