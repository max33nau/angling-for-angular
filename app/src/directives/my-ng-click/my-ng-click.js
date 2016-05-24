import template from './my-ng-click.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgClick', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {},
      controller: ['$scope', function($scope){
				$scope.showHTML = true;
				$scope.contact = {};
				$scope.data = {};
				$scope.data.contacts = [
					{
						firstName: 'Max',
						lastName: 'Jacobsen',
						phoneNumber: '(503) 555-5555'
					},
					{
						firstName: 'Al',
						lastName: 'She',
						phoneNumber: '(503) 444-4444'
					},
					{
						firstName: 'Alex',
						lastName: 'Anderson',
						phoneNumber: '(503) 222-3333'
					},
					{
						firstName: 'Who Ya',
						lastName: 'Gonna Call',
						phoneNumber: 'Ghost Busters!!'
					}];
				$scope.data.addContact = function(newContact){
					$scope.data.contacts.push(newContact);
					$scope.contact = {};
				};
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
    <div ng-controller='ngClickCtrl'>
      <div>
        First Name: <input ng-model='contact.firstName'>
        <br><br>
        Last Name:  <input ng-model='contact.lastName'>
        <br><br>
        Contact: <input ng-model='contact.phoneNumber'>
        <br><br>
        <button ng-click='data.addContact(contact)'> Add Contact </button>
      </div>
      <div ng-repeat='contact in data.contacts'>
        <h5> {{contact.firstName}} {{contact.lastName}} </h5>
        Phone Number: {{contact.phoneNumber}}
      </div>
    </div>
  </body>
</html>`;
			$scope.javascript = `
var app = angular.module('myApp', []);

app.controller('ngClickCtrl', function($scope){
  $scope.contact = {};
  $scope.data = {};
  $scope.data.contacts = [
    {
      firstName: 'Max',
      lastName: 'Jacobsen',
      phoneNumber: '(503) 555-5555'
    },
    {
      firstName: 'Al',
      lastName: 'She',
      phoneNumber: '(503) 444-4444'
    },
    {
      firstName: 'Alex',
      lastName: 'Anderson',
      phoneNumber: '(503) 222-3333'
    },
    {
      firstName: 'Who Ya',
      lastName: 'Gonna Call',
      phoneNumber: 'Ghost Busters!!'
    }];
  $scope.data.addContact = function(newContact){
    $scope.data.contacts.push(newContact);
    $scope.contact = {};
  };
});	`;

	$scope.description = `
/* add the ng-click directive to any HTML element to call
a function within your scope or you can actually change
variables within the ng-click='contact.name = "default"'
when the element is clicked */`;
      }]
		};
	});
}
