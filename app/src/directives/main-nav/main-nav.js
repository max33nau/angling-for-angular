import template from './main-nav.html';
export default function( ngModule ) {
	ngModule.directive( 'mainNav', function() {
		return {
			replace: true,
			restrict: 'E',
			template
		};
	});
}
