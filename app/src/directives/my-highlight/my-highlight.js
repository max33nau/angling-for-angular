

import hljs from 'highlight.js';
export default function( ngModule ) {
	ngModule.directive('myHighlight', ['$compile',function($compile){
    return {
      restrict: 'E',
      scope: {
        myCode:'@'
      },
      transclude: true,
      template: '<div hljs><pre> <code> <ng-transclude> </ng-transclude> </code> </pre> </div>',
      link: {
        pre: function(scope,element,attr) {
        $compile(element[0]);
      }
    }
    };
  }]);
}
