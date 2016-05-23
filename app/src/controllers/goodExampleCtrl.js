export default function( ngModule ) {
	ngModule.controller('bindingExampleCtrl', function($scope){
    $scope.binding = {};
    $scope.binding.name = 'Type here to see my 2-way data binding';
  })
  .controller('goodExampleParentCtrl', function($scope){
    $scope.parent = {};
    $scope.parent.name = 'My child controller does not inherit me anymore';
  })
  .controller('goodExampleChildCtrl', function($scope){
    $scope.child = {};
    $scope.child.name = 'I am my own scope';
  });
}
