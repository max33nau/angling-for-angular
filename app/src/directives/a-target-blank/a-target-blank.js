export default function( ngModule ) {
	ngModule.directive('aTargetBlank', function(){
    return {
      restrict: 'E',
      template: '<a href="{{myUrl}}" target="_blank"> {{myLinkName}} </a>',
      scope: {
        myLinkName:'@',
        myUrl: '@'
      }
    }
  })
}
