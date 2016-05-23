'use strict';
import template from './directives.html';

export default {
  url: '/directives',
  template,
  controller: ['$scope', function($scope){
    $scope.directive = {};
    $scope.directive.element = '<my-dir> </my-dir>';
    $scope.directive.custom = '<my-own-directive> </my-own-directive>';
    $scope.directive.attribute = '<div ng-show="expression"> </div>';
    $scope.directive.comments = '<!-- directive: my-dir exp -->';
    $scope.directive.class = '<span class="my-dir: exp;"></span>';
    $scope.directive.categories = ['<--- Select A Directive --->', 'ng-model', 'ng-repeat', 'ng-show/ng-hide',
    'ng-class', 'ng-click','Custom Directive'];
    $scope.directive.category = $scope.directive.categories[0];
  }]
};
