'use strict';
/* highlight.js */
import template from './initial-app.html';

export default {
  url: '/creating-our-first-app',
  template,
  controller: ['$scope', function($scope){
    $scope.showHTML = true;
    $scope.html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title> Angular Tutorial </title>
        <meta charset="utf-8"></meta>
        <script src="angular.min.js" type="text/javascript">
        </script>
        <script src="app.js" type="text/javascript">
        </script>
      </head>
      <body ng-app='myApp'>
        <div ng-controller='mainCtrl'>
          <h2> Hello {{name}} </h2>
        </div>
      </body>
    </html>`;
    $scope.javascript = `
    var app = angular.module('myApp', []);
    app.controller('mainCtrl', function($scope){
      $scope.name = 'Max';
    });`;
    $scope.name = 'Max';
    $scope.description = `/*
    index.html
    <!-- Putting ng-app='myApp' is a custom attribute and says
    evertyhing inside the body tags is now
    connected to our variable we used in the global namespace.
    This needs to be the same as the string we assigned in our module
    -->
    <!-- ng-app is a directive, directives allow us to
    extend HTML by adding attributes, elements or comments -->
    <!-- Now ng-cotroller looks for any name called 'mainCtrl' on
    'myApp' module which we declared as app in our app.js -->
    <!-- angular uses a view model with data binding, it makes a
    empty view value then fills it with the name property -->
    <!-- {{name}} is a data binding expresion -->
    */

    /* app.js
     In angular.js.min there is global
    angular object and inside that object is a module.
    That module takes the name of your app and takes a
    array of dependencies.

     What is dependency injection?
    https://www.youtube.com/watch?v=ejBkOjEG6F0 time: 33:31
    Giving a function a object, rather than creating a object
    inside a function we pass it into the function

    $scope is big complex object that comes from
    dependency injection.
     All angularJS services start with a $ sign.
     We can now add on to the $scope object

    .controllers take a name and a function

    Variables stored on the $scope object are known as the model

    */`;
  }]
};
