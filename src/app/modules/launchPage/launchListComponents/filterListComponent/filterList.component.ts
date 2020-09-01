import { Component, ViewChild, ElementRef, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filterlist',
  templateUrl: './filterlist.component.html',
  styleUrls: ['./filterlist.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FilterListComponent {
  @ViewChild('SelectYearButtonCollection') selectYearButtonCollection: ElementRef;
  @ViewChild('SelectSuccessLaunchButtonCollection') selectSuccessLaunchButtonCollection: ElementRef;
  @ViewChild('SelectSuccessLandButtonCollection') selectSuccessLandButtonCollection: ElementRef;
  @Input() selectedYears;
  @Input() selectedSuccessLaunch;
  @Input() selectedSuccessLand;
  @Output() toggleYearEvent = new EventEmitter();
  @Output() toggleLaunchSuccessEvent = new EventEmitter();
  @Output() toggleLandSuccessEvent = new EventEmitter();

  constructor(
  ) {
  }

  updateOnRefresh = (selectedYears?, selectedSuccessLaunch?, selectedSuccessLand?) => {
    const _self = this;
    _self.selectedYears = selectedYears ? selectedYears : new Set();
    _self.selectedSuccessLaunch = selectedSuccessLaunch ? selectedSuccessLaunch : new Set();
    _self.selectedSuccessLand = selectedSuccessLand ? selectedSuccessLand : new Set();

    if (_self.selectedYears.size > 0) {
      _self.selectedYears.forEach(val => {
        _self.toggleYearEvent.emit(val);
      });
      _self.highlightYearSelection();
    }
    if (_self.selectedSuccessLaunch.size > 0) {
      _self.selectedSuccessLaunch.forEach(val => {
        _self.toggleLaunchSuccessEvent.emit(val);
      });
      _self.highlightSuccessLaunchSelection();
    }
    if (_self.selectedSuccessLand.size > 0) {
      _self.selectedSuccessLand.forEach(val => {
        _self.toggleLandSuccessEvent.emit(val);
      });
      _self.highlightSuccessLandSelection();
    }
  }

  highlightYearSelection = () => {
    const _self = this;
    _self.selectYearButtonCollection.nativeElement.querySelectorAll('button').forEach(element => {

      const val = element.value;
      if (_self.selectedYears.has(val)) {
        element.classList.add('selected');

      } else {
        element.classList.remove('selected');
      }
    });

  }

  toggleYearSelection = (val) => {
    const _self = this;
     const value = val.toString();
    _self.toggleYearEvent.emit(value);
  }

  highlightSuccessLaunchSelection = () => {
    const _self = this;
    _self.selectSuccessLaunchButtonCollection.nativeElement.querySelectorAll('button').forEach(element => {

      const val = element.value;
      if (_self.selectedSuccessLaunch.has(val)) {
        element.classList.add('selected');

      } else {
        element.classList.remove('selected');
      }
    });
  }

  toggleSuccessLaunchSelection = (val) => {
    const _self = this;
    const value = val.toString();
    _self.toggleLaunchSuccessEvent.emit(value);
  }

  highlightSuccessLandSelection() {
    const _self = this;
    _self.selectSuccessLandButtonCollection.nativeElement.querySelectorAll('button').forEach(element => {

      const val = element.value;
      if (_self.selectedSuccessLand.has(val)) {
        element.classList.add('selected');

      } else {
        element.classList.remove('selected');
      }
    });
  }

  toggleSuccessLandSelection = (val) => {
    const _self = this;
    const value = val.toString();
    _self.toggleLandSuccessEvent.emit(value);
  }

}
