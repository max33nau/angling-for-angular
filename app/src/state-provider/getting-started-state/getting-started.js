'use strict';
import template from './getting-started.html';

export default {
  url: '/getting-started',
  template,
  controller: ['$scope', function($scope){
    $scope.showHTML = true;
    $scope.html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <title> Angular Tutorial </title>
        <meta charset="utf-8"></meta>
        <script src="angular.min.js" type="text/javascript"></script>
        <script src="app.js" type="text/javascript"></script>
      </head>
      <body>
        <p> HELLO WORLD </p>
      </body>
    </html>`;
    $scope.javascript = `// Angular App Will GO HERE `
  }]
};
