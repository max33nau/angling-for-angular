'use strict';
import template from './references.html';

export default {
  url: '/references',
  template,
  controller: ['$scope', function($scope){
    $scope.references = {};
    $scope.references.links = [
      {
        url: 'https://angularjs.org/'
      },
      {
        url: 'https://en.wikipedia.org/wiki/AngularJS'
      },
      {
        url: 'https://tests4geeks.com/tutorials/single-page-application-using-angularjs-tutorial/'
      },
      {
        url: 'http://www.tutorialspoint.com/angularjs/angularjs_mvc_architecture.htm'
      },
      {
        url: 'http://www.w3schools.com/angular/'
      },
      {
        url: 'http://www.wintellect.com/devcenter/jlikness/10-reasons-web-developers-should-learn-angularjs'
      },
      {
        url: 'https://github.com/max33nau/angling-for-angular'
      }
    ];
  }]
};
