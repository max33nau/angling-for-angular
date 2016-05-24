'use strict';
/* highlight.js */
import template from './custom-directive.html';

export default {
  url: '/custom-directive',
  template,
  controller: ['$scope', function($scope){
    $scope.elementExample = '<my-custom-directive> </my-custom-directive>';
    $scope.attributeExample = '<div my-custom-directive> </div>';
    $scope.classExample = '<div class="my-custom-directive: exp;"> </div>';
    $scope.commentExample = '<!-- directive: my-custom-directive exp -->';
    $scope.showHTML = true;
    $scope.my = {};
    $scope.my.projects = [
      {
        name: 'Color Fish',
        url: 'https://team-malex.2016.angularattack.io/#/color-fish'
      },
      {
        name: 'Relax And Color',
        url: 'https://relax-and-color.herokuapp.com/#/home'
      },
      {
        name: 'Settlers Of Candyland',
        url: ' ttp://max33nau.github.io/settlersOfCandyland/'
      },
      {
        name: 'My Github',
        url: 'https://github.com/max33nau'
      }
    ];
    $scope.html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <title> Angular Tutorial </title>
    <meta charset="utf-8"></meta>
    <script src="angular.min.js" type="text/javascript"></script>
    <script src="app.js" type="text/javascript"></script>
  </head>

  <body ng-app='myApp'>
    <div ng-controller='customDirectiveCtrl'>
      Simple Example Of Custom Directive:
      <a-target-blank my-link-name='Linkedin'
      my-url='https://www.linkedin.com/in/maxjacobsen33'>
      </a-target-blank>
      <br>
      <p>I can use my directive with a ng-repeat now to show a
      better use of a-target-blank. Lets say if I want to link all
      the projects I have done. </p>
      <ul ng-repeat='project in my.projects'>
        <li> <a-target-blank my-link-name={{project.name}}
        my-url={{project.url}}>
        </a-target-blank> </li>
      </ul>
    </div>
  </body>
</html>`;
    $scope.javascript = `

var app = angular.module('myApp', []);

app.controller('customDirectiveCtrl', function($scope){
  $scope.my = {};
  $scope.my.projects = [
    {
      name: 'Color Fish',
      url: 'https://team-malex.2016.angularattack.io/#/color-fish'
    },
    {
      name: 'Relax And Color',
      url: 'https://relax-and-color.herokuapp.com/#/home'
    },
    {
      name: 'Settlers Of Candyland',
      url: ' ttp://max33nau.github.io/settlersOfCandyland/'
    },
    {
      name: 'My Github',
      url: 'https://github.com/max33nau'
    }
  ]
});

app.directive('aTargetBlank', function(){
  return {
    restrict: 'E',
    template: '<a href="{{myUrl}}" target="_blank"> {{myLinkName}} </a>',
    scope: {
      myLinkName:'@',
      myUrl: '@'
    }
  }
}) `;
    $scope.description = `
/* Remember when we name our directive in camelCase,
angularJS will convert it to snake-case. So when we
use the directive in our HTML it will be
<a-target-blank> </a-target-blank>. */

/* When we create a directive we are returning
a directive description object. This description
object will be the heart of our custom directive. */

/* What is restrict?
restrict: specifies what type of directive it has to
be when we try to activate it later. In this case
we only want it to be used as a element so we say
restrict: 'E'. Other restrict options are
'A' (attribute), 'C' (class), 'M' (comment)

/* Template will be the content of our directive,
here we can use HTML and {{}} notation just like
in normal AngularJS, here we are creating a
<a> tags that will take a link and a url from the
parent scope.*/

/* scope: check out this newsletter to get a better
understanding on using scope with these directives.
http://www.ng-newsletter.com/posts/directives.html,
for now just know using '@' will read into our directive
what we set in the element. */

/* We could add a controller to our directive but it is
not necessary for right now. */`;
  }]
};
