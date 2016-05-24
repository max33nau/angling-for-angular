import template from './my-ng-hide-and-show.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgHideAndShow', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {},
      controller: ['$scope', function($scope){
				$scope.view = {};
				$scope.view.showMe = true;
				$scope.view.name = 'max';
				$scope.view.category = 'sports';
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
    <div ng-controller='hideAndShowCtrl'>
      <div id='toggleBetweenOneVariable'>
        <h2 ng-show='view.showMe'> I show up when view.showMe is TRUE
        </h2>
        <h2 ng-hide='view.showMe'> Oh snap you must be FALSE view.showMe
        </h2>
      </div>
      <div id='usingExpressionNgShow'>
        <h2 ng-show='view.name == "max"'> view.name must equal
          'max' because you can see me </h2>
        <h2 ng-show='view.name == "angular"'> view.name must equal
          'angular' </h2>
        <h2 ng-show='view.name == "cool"'> view.name must equal
          'cool' </h2>
      </div>
      <br> <br>
      <select ng-model='view.category'>
        <option value='sports'>Sports</option>
        <option value='music'>Music</option>
        <option value='movies'>Movies</option>
      </select>
      <div ng-show='view.category == "sports"'>
        <h5> Sports </h5>
        <p>Sports are awesome. </p>
        <p> Go Blazers and Timbers! </p>
        <p> Basketball is my favorite sport </p>
      </div>
      <div ng-show='view.category == "music"'>
        <h5> Music </h5>
        <ul> Genres:
          <li> Country </li>
          <li> Rap </li>
          <li> Rock </li>
        </ul>
      </div>
      <div ng-show='view.category == "movies"'>
        <h5> Movies </h5>
        <p> Movies are great, enough said </p>
      </div>
    </div>
  </body>
</html>`;
			$scope.javascript = `
var app = angular.module('myApp', []);
app.controller('hideAndShowCtrl', function($scope){
	$scope.view = {};
	$scope.view.showMe = true;
	$scope.view.name = 'max';
	$scope.view.category = 'sports';
});`;
			$scope.description =
`/* ng-show directive show or hides the given
HTML element it is attached too and all of its children
based on the expression it is given. The element is shown
or hidden by adding or removing .ng-hide class which is
predefined in CSS. When the ng-show expression evaluates
to falsy the the .ng-hide class is applied and when the
expression evaluates to truthy the .ng-hide class is removed */

/* the ng-hide Class is:
  .ng-hide {
  display: none !important;
  //important is used so the .ng-hide class is not overwritten
} */

/* ng-hide directive acts the same as ng-show only with
 opposite evaluation for appllying the ng-hide class.
 If the expression evaluates to truthy, then the class
 is applied and if it evaluates to falsy the class is
removed */`;
      }]
		};
	});
}
