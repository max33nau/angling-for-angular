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
    $scope.javascript = `// Angular App Will GO HERE `;
    $scope.description = `/*If you did not do a git clone on my repo then go to
    angularJS website: https://angularjs.org
    and then click the download angular 1 button
    and download the most stable angularJS in minified form
    and then add it to your directory along with the
    index.html content and a app.js file*/

    /* You should now be able to run your application in
    the browser and you should see a HELLO WORLD in paragraph
    form. If you see this, then you are ready to get started. */`;
  }]
};
