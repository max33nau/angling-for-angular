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
      }]
		};
	});
}
