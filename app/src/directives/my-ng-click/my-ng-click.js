import template from './my-ng-click.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgClick', function() {
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
