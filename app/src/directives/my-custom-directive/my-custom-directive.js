import template from './my-custom-directive.html';
export default function( ngModule ) {
	ngModule.directive( 'myCustomDirective', function() {
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
