import template from './main-header.html';
import styles from './main-header.scss';
export default function( ngModule ) {
	ngModule.directive( 'mainHeader', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
      controller: ['$rootScope','$scope', function($rootScope,$scope){
        $scope.styles = styles;
      }]
		};
	});
}
