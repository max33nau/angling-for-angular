import template from './my-ng-model.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgModel', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      scope: {},
      controller: ['$scope', function($scope){
        $scope.name = 'alex'
      }]
		};
	});
}
