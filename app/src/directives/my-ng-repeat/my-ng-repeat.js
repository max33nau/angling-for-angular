import template from './my-ng-repeat.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgRepeat', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {},
      controller: ['$scope', function($scope){
				$scope.showHTML = true;
        $scope.html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <title> Angular Tutorial </title>
    <meta charset="utf-8"></meta>
    <script src="angular.min.js" type="text/javascript"></script>
    <script src="app.js" type="text/javascript"></script>
  </head>

  <body ng-app='myApp'>
    <div ng-controller='mainCtrl'>
      <div ng-repeat='player in nba.players'>
        <h5><a href={{player.url}} target='_blank'> {{player.name}} </a> </h5>
        <ul>
          <li> Born: {{player.born}} </li>
          <li> Height: {{player.height.feet}}' {{player.height.inches}}" </li>
          <li> Current Team: {{player.currentTeam}} </li>
          <li> Championships:{{player.championships}}</li>
          <li> NBA Finals MVP: {{player.nbaFinalsMVP}} </li>
          <li> NBA MVP: {{player.mvp}} </li>
          <li> NBA All Star Team: {{player.nbaAllstarTeam}} </li>
        </ul>
      </div>
    </div>
  </body>
</html>`;
			$scope.javascript = `
var app = angular.module('myApp', []);

app.controller('mainCtrl', function($scope){
$scope.nba = {};
$scope.nba.players = [
  {
    name: 'Lebron James',
    height: {feet: 6,inches: 8},
    born: 'December 30, 1984',
    currentTeam: 'Cleveland Cavaliers',
    championships: 2,
    nbaFinalsMVP: 2,
    nbaAllstarTeam: 12,
    mvp: 4,
    url: 'https://en.wikipedia.org/wiki/LeBron_James'
  },
  {
    name: 'Michale Jordan',
    height: {feet: 6,inches: 6  },
    born: 'February 17, 1963',
    currentTeam: 'Retired',
    championships: 6,
    nbaFinalsMVP: 6,
    nbaAllstarTeam: 14,
    mvp: 5,
    url: 'https://en.wikipedia.org/wiki/Michael_Jordan'
  },
  {
    name: 'Stephen Curry',
    height: {feet: 6,inches: 3 },
    born: '	March 14, 1988',
    currentTeam: 'Golden State Warriors',
    championships: 1,
    nbaFinalsMVP: 0,
    nbaAllstarTeam: 3,
    mvp: 2,
    url: 'https://en.wikipedia.org/wiki/Stephen_Curry'
  },
  {
    name: 'Damian Lillard',
    height: {feet: 6,inches: 3},
    born: 'July 15, 1990 ',
    currentTeam: 'Portland Trail Blazers',
    championships: 0,
    nbaFinalsMVP: 0,
    nbaAllstarTeam: 2,
    mvp: 0,
    url: 'https://en.wikipedia.org/wiki/Damian_Lillard'
  }]
});
`;
				$scope.description = `
/* ng-repeat, creates a template once per item in a collection.
Each template will have its own given scope with a angularJS
$index is set to the item index */

/* You can use ng-repeat to itterate over a object but this takes
away the use of built-in filters orderBy and filter.
 Using ng-repeat on a array is usually the easiest way. */

/* index.html
<!-- ng-repeat is using the div and all our contents as our
template. It will repeat player in nba.players which is
each object within our $scope.nba.players array in app.js --> */

/* app.js
creates a array of players in our $scope.nba.players array and
adds them as objects. We will use this as our model in index.html
*/`;
      }]
		};
	});
}
