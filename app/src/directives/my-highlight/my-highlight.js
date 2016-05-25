

import hljs from 'highlight.js';
export default function( ngModule ) {
	ngModule.directive('myHighlight', ['$compile',function($compile){
    return {
      restrict: 'E',
      scope: {
        myCode:'@'
      },
      template: '<div hljs><pre> <code> {{myCode}}<h1> hi </h1> </code> </pre> </div>',
      link: {
        pre: function(scope,element,attr) {
        $compile(element[0]);
      }
    }
    };
  }]);
}
