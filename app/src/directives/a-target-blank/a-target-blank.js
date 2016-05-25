export default function( ngModule ) {
	ngModule.directive('aTargetBlank', function(){
    return {
      restrict: 'E',
      template: '<a class="my-link" href="{{myUrl}}" target="_blank"> {{myLinkName}} </a>',
      scope: {
        myLinkName:'@',
        myUrl: '@'
      }
    };
  });
}
