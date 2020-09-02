import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { LaunchListQueryParam } from 'src/app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { LaunchDataService } from 'src/app/shared/services';
import { FilterListComponent } from '../launchListComponents';


@Component({
  selector: 'app-launchlist',
  templateUrl: './launchlist.component.html',
  styleUrls: ['./launchlist.component.scss']
})
export class LaunchListComponent implements OnInit {
  @ViewChild('SelectYearButtonCollection') selectYearButtonCollection: ElementRef;
  @ViewChild('SelectSuccessLaunchButtonCollection') selectSuccessLaunchButtonCollection: ElementRef;
  @ViewChild('SelectSuccessLandButtonCollection') selectSuccessLandButtonCollection: ElementRef;
  @ViewChild(FilterListComponent) filterChildComp: FilterListComponent;
  selectedYears = new Set();
  selectedSuccessLaunch = new Set();
  selectedSuccessLand = new Set();
  CurrentQueryParams;

  displayArray = [];
  constructor(private launchDataService: LaunchDataService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit() {
    const _self = this;
    _self.launchDataService.displayUpdated.subscribe((val) => {
      if (val.length) {
        _self.displayArray = val;
      } else {
        _self.displayArray = [];
      }
    });

    const href = _self.router.url;
    _self.getQueryParamsAndTriggerDataFetch(href);
  }

  getQueryParamsAndTriggerDataFetch = (href) => {
    const _self = this;
    _self.selectedYears = new Set();
    _self.selectedSuccessLaunch = new Set();
    _self.selectedSuccessLand = new Set();

    const breakURL = href.split('&');
    breakURL.shift();
    if (breakURL && breakURL.length > 0) {
    const parameterArray = {};
    const newInfo = breakURL.map((x) => {
      const temp = x.split('=');
      parameterArray[temp[0]] = temp[1].split(',');
    });

    if (parameterArray['launch_year'] && parameterArray['launch_year'].length > 0) {
      _self.selectedYears = new Set (parameterArray['launch_year']);
    }
    if (parameterArray['launch_success'] && parameterArray['launch_success'].length > 0) {
      _self.selectedSuccessLaunch = new Set (parameterArray['launch_success']);
    }
    if (parameterArray['land_success'] && parameterArray['land_success'].length > 0) {
      _self.selectedSuccessLand = new Set (parameterArray['land_success']);
    }

    this.filterChildComp.updateOnRefresh(_self.selectedYears, _self.selectedSuccessLaunch, _self.selectedSuccessLand);
  } else {
    _self.launchDataService.fetchMissionDetails(_self.selectedYears, _self.selectedSuccessLaunch, _self.selectedSuccessLand);
  }}

  toggleYearSelection = (val) => {
    const _self = this;
    _self.updateQueryParam();
    _self.launchDataService.fetchMissionDetails(_self.selectedYears, _self.selectedSuccessLaunch, _self.selectedSuccessLand);
  }

  toggleSuccessLaunchSelection = (val) => {
    const _self = this;
    _self.updateQueryParam();
    _self.launchDataService.fetchMissionDetails(_self.selectedYears, _self.selectedSuccessLaunch, _self.selectedSuccessLand);
  }

  toggleSuccessLandSelection = (val) => {
    const _self = this;
    _self.updateQueryParam();
    _self.launchDataService.fetchMissionDetails(_self.selectedYears, _self.selectedSuccessLaunch, _self.selectedSuccessLand);
  }

  updateQueryParam = ( ) => {
    const _self = this;

    const selectedYears = new Set(_self.selectedYears);
    selectedYears.delete(null);
    const launchYear = _self.selectedYears.size > 0 ? (Array.from(selectedYears)).join(',') : null;

    const selectedSuccessLaunch = new Set(_self.selectedSuccessLaunch);
    selectedSuccessLaunch.delete(null);
    const launchSuccess = _self.selectedSuccessLaunch.size > 0 ? (Array.from(selectedSuccessLaunch)).join(',') : null;

    const selectedSuccessLand = new Set(_self.selectedSuccessLand);
    selectedSuccessLand.delete(null);
    const landSuccess = _self.selectedSuccessLand.size > 0 ? (Array.from(selectedSuccessLand)).join(',') : null;

    const ObjParam = new LaunchListQueryParam(launchYear ? launchYear : null,
      launchSuccess ? launchSuccess : null,
      landSuccess ? landSuccess : null);

   this.router.navigate([], { queryParams:  JSON.parse(JSON.stringify(ObjParam))});
  }


}
