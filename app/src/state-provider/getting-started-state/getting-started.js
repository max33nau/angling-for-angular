'use strict';

import template from './getting-started.html';


export default {
  url: '/getting-started',
  template,
  controller: ['$scope', function($scope){
    $scope.showHTML = true;
  }]
};
