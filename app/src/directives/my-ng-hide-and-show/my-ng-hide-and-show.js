import template from './my-ng-hide-and-show.html';
export default function( ngModule ) {
	ngModule.directive( 'myNgHideAndShow', function() {
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
