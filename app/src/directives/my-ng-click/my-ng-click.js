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
      }]
		};
	});
}
