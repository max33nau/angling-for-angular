import mainHeader from './main-header/main-header'
import mainNav from './main-nav/main-nav';

const directives = angular.module( 'directives', [] );

mainHeader(directives);
mainNav(directives);


export default directives.name;
