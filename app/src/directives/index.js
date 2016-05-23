import mainHeader from './main-header/main-header'
import mainNav from './main-nav/main-nav';
import myNgRepeat from './my-ng-repeat/my-ng-repeat';
import myNgModel from './my-ng-model/my-ng-model';
import myNgClass from './my-ng-class/my-ng-class';
import myNgClick from './my-ng-click/my-ng-click';
import myNgHideAndShow from './my-ng-hide-and-show/my-ng-hide-and-show';
import myCustomDirective from './my-custom-directive/my-custom-directive';

const directives = angular.module( 'directives', [] );

mainHeader(directives);
mainNav(directives);
myNgRepeat(directives);
myNgModel(directives);
myNgClass(directives);
myNgClick(directives);
myNgHideAndShow(directives);
myCustomDirective(directives);


export default directives.name;
