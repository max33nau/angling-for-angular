'use strict';
import template from './so-much-angular.html';

export default {
  url: '/so-much-angular',
  template,
  controller: ['$scope', function($scope){
    $scope.angular = {};
    $scope.angular.documents = [
      {
        name: 'Filters',
        url: 'http://www.tutorialspoint.com/angularjs/angularjs_filters.htm'
      },
      {
        name: 'Building Custom Filters',
        url: 'https://toddmotto.com/everything-about-custom-filters-in-angular-js/'
      },
      {
        name: 'Providers',
        url: 'https://docs.angularjs.org/guide/providers'
      },
      {
        name: 'Services',
        url: 'https://docs.angularjs.org/guide/services'
      },
      {
        name: 'Providers Vs Services Vs Factories ',
        url: 'http://www.mikeobrien.net/blog/angular-consts-values-services-factories-and-providers-oh-my/'
      },
      {
        name: 'Forms',
        url: 'https://docs.angularjs.org/api/ng/directive/form'
      }
    ];
    $scope.angular.projectSetUpAndTesting = [
      {
        name: 'Setting Up NodeJS',
        url: 'https://nodejs.org/en/download/'
      },
      {
        name: 'Using Webpack to bundle our AngularJs App',
        url: 'https://egghead.io/lessons/angularjs-angular-with-webpack-introduction'
      },
      {
        name: 'End 2 End Testing With Protractor',
        url: 'http://www.protractortest.org/#/'
      },
      {
        name: 'Unit Testing',
        url: 'https://www.airpair.com/angularjs/posts/unit-testing-angularjs-applications'
      }
    ];
    $scope.angular.resources = [
      {
        name: '18 Common Mistakes AngularJS Devlopers Make',
        url: 'https://www.toptal.com/angular-js/top-18-most-common-angularjs-developer-mistakes'
      },
      {
        name: 'YouTube: AngularJS Fundamentals',
        url: 'https://www.youtube.com/watch?v=i9MHigUZKEM'
      },
      {
        name: 'YouTube: AngularJS Channel',
        url: 'https://www.youtube.com/user/angularjs'
      },
      {
        name: 'Code Academy Angular JS',
        url: 'https://www.codecademy.com/learn/learn-angularjs'
      }
    ]
  }]
};
