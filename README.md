# MyFirstRepo

## Project Features:

1. Angular Modular Project with best practices.
2. Responsive UI for Browser, Tablet, Phone
3. Build will fail if code is not complying lint rules.
4. Site deployed on Heroku [SpaceX Proj by Vartika Dubey](http://spacex-proj.herokuapp.com)

## Functionality:

- The initial page load, loads unfiltered data with record limit upto 100.
- Selecting a filter will fetch only selected data using filter conditions.
- Deselecting a filter will remove its data from the list.
- Refresh will retain the selected filters and data.

## Approach:

- The screen is divided into two components filter section as '_FilterListComponent_' and data load section as '_MissionResultComponent_' namely. These two components are loaded in parent component in the module. 
- Components, Services, Models that will be shared throughout project are kept in 'core' folder. Whereas other common Components, Services, Models are kept in 'shared' folder.
- The filter selection is done by using a directive.
- '_FetchDataService_' in core will fetch the data from apis the pass it on to other services which will further format data and pass data to and fro from '_FetchDataService_' to component requiring data (eg: _LaunchDataService_)
- Created models for ease in usage and tranformation of data.


## Future Updates:
1. Unit testing.

## LightHouse Scores:

<img src="LightHouseScore.png">