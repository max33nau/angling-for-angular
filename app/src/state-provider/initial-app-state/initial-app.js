'use strict';
/* highlight.js */
import template from './initial-app.html';

export default {
  url: '/creating-our-first-app',
  template,
  controller: ['$scope', function($scope){
    $scope.showHTML = true;
    $scope.name = 'Max';
  }]
};
