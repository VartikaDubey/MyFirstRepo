export class LaunchListQueryParam {
    launch_year?: string;
    launch_success?: string;
    land_success?: string;
    limit = 100;

constructor(launchyear?, launchsuccess?, landsuccess?) {
const _self = this;
if (launchyear) {
 _self.launch_year =  launchyear;
}
if (launchsuccess) {
    _self.launch_success =  launchsuccess;
}
if (landsuccess) {
    _self.land_success = landsuccess; }

}
}
