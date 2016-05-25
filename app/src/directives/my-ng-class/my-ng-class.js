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
      }]
		};
	});
}
