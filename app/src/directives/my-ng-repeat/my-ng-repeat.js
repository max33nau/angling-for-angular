import template from './my-ng-repeat.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgRepeat', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {},
      controller: ['$scope', function($scope){
        $scope.name = 'max'
      }]
		};
	});
}
