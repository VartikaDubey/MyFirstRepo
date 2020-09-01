import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {apiRoutes} from 'src/app/config/api-route-points';
import {LaunchListQueryParam} from 'src/app/shared/models';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  httpClient: any;

  constructor(private http: HttpClient ) { }

  fetchMissionDetails = (launchYear?: string, launchSuccess?: string, landSuccess?: string) => {
const _self = this;

      const ObjParam = new LaunchListQueryParam(launchYear ? launchYear : null,
        launchSuccess ? launchSuccess : null,
        landSuccess ? landSuccess : null);


    return _self.http.get(`${apiRoutes.GET_LAUNCHES}`, { params: JSON.parse(JSON.stringify(ObjParam))});
  }
}
