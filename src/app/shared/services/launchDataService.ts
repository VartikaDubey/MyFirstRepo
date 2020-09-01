import { Injectable, EventEmitter } from '@angular/core';
import { forkJoin } from 'rxjs';
import { FetchDataService } from 'src/app/core/services';
import { SpaceObjectInfo } from 'src/app/shared/models';

@Injectable({
    providedIn: 'root'
})
export class LaunchDataService {
    displayResult = [];
    subscribeList = {};
    displayUpdated = new EventEmitter();

    constructor(private fetchData: FetchDataService) { }

    fetchMissionDetails = (selectedYears, selectedLaunchSuccess, selectedLandSuccess) => {
        const _self = this;
        if (selectedYears.size === 0) {
            selectedYears.add(null);
        } else if (selectedYears.has(null) && selectedYears.size > 1) {
            selectedYears.delete(null);
        }
        if (selectedLaunchSuccess.size === 0) {
            selectedLaunchSuccess.add(null);
        } else if (selectedLaunchSuccess.has(null) && selectedLaunchSuccess.size > 1) {
            selectedLaunchSuccess.delete(null);
        }
        if (selectedLandSuccess.size === 0) {
            selectedLandSuccess.add(null);
        } else if (selectedLandSuccess.has(null) && selectedLandSuccess.size > 1) {
            selectedLandSuccess.delete(null);
        }

        let apiCalls = [];

        selectedLandSuccess.forEach(landSuccess => {
            selectedLaunchSuccess.forEach(launchSuccess => {
                selectedYears.forEach(year => {
                    apiCalls.push(_self.fetchData.fetchMissionDetails(year, launchSuccess, landSuccess));
                });
            });

        });
        _self.subscribeList['launchCall'] = forkJoin([...apiCalls]).subscribe((result) => {
            console.log(result);
            const finalres = result.reduce(function (prev, curr) {
                return prev.concat(curr);
            });
            _self.displayResult = [];
            _self.displayResult = _self.transformDataReceived(finalres);
            _self.displayUpdated.emit(_self.displayResult);
            _self.subscribeList['launchCall'].unsubscribe();
            apiCalls = [];
        },
            (err) => {
                alert(err);
                _self.displayResult = [];
                _self.displayUpdated.emit(_self.displayResult);
                    _self.subscribeList['launchCall'].unsubscribe();
                apiCalls = [];
            }
        );
    }

    transformDataReceived(receivedRes) {
        const result = [];
        receivedRes.forEach(element => {
            const Obj: SpaceObjectInfo = {
                launchYear: element.launch_year ? element.launch_year : null,
                missionName: element.mission_name ? element.mission_name : null,
                flightNumber: element.flight_number ? element.flight_number : null,
                imageURL: (element.links && element.links.mission_patch) ? element.links.mission_patch : null,
                imageURLSmall: (element.links && element.links.mission_patch_small) ? element.links.mission_patch_small : null,
                missionIds: (element.mission_id && element.mission_id.length !== 0) ? element.mission_id : [null],
                launchSuccess: (typeof (element.launch_success) === 'boolean') ? element.launch_success : null,
                landSuccess:  element.rocket.first_stage.cores[0].land_success
            };
            result.push(Obj);
        });
        return result;
    }
}
