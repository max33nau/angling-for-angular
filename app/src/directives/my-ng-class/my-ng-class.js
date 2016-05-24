import template from './my-ng-class.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgClass', function() {
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
    <style>
      .answers {
        font-weight: bold;
        color: black;
        display: inline-block;
        margin-left: 10px;
        padding: 5px;
        text-align: center;
      }
      .correct {
        background-color: green;
      }
      .wrong {
        background-color: red;
      }
    </style>
  </head>

  <body ng-app='myApp'>
    <div ng-controller='ngClassCtrl'>
      <h2> Test </h2>
      <ol>
      <li> 2 + 2 = <input ng-model='questions.one'>
        <p ng-show='questions.one'
        ng-class='{correct: questions.one == 4, wrong: questions.one != 4}'
        class='answers'>
        Answer to one: {{questions.one}} </p>
      </li>
      <br>
      <li> 7 * 3 = <input ng-model='questions.two'>
        <p ng-show='questions.two'
        ng-class='{correct: questions.two == 21, wrong: questions.two != 21}'
        class='answers'>
        Answer to two: {{questions.two}} </p>
      </li>
      <br>
      <li> 2^4= <input ng-model='questions.three'>
        <p ng-show='questions.three'
        ng-class='{correct: questions.three == 16, wrong: questions.three != 16}'
        class='answers'>
        Answer to three: {{questions.three}} </p>
      </li>
    </ol>
    </div>
  </body>
</html>`;
			$scope.javascript = `
var app = angular.module('myApp', []);
app.controller('ngClassCtrl', function($scope){
  $scope.questions = {};
});
			`;
			$scope.description = `
/* ng-class directive allows you to set CSS
classes to specific HTML elements by data binding
an expression which will represent all the
classes to be added. If the expression evaluates
to true then the resulting class will be applied

In this case we used the expression as a object.
If the expression evaluates to an object,
then for each key-value pair of the object
with a truthy value the corresponding key is
used as a class name
https://docs.angularjs.org/api/ng/directive/ngClass*/ `;
      }]
		};
	});
}
