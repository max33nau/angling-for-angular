export default function( ngModule ) {
	ngModule.controller( 'badExampleParentCtrl', function($scope) {
    $scope.name = 'prototypical inheritance at work';
	})
  .controller('badExampleChildCtrl', function($scope){
  });
}
