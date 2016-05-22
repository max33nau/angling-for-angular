'use strict';

/* Vendors */
import angular from 'angular' ;
import stateRouter from 'angular-ui-router';

/* UI-Router State Provider Config */
import configStateProvider from './state-provider';

/* State Controllers */
import stateCtrls from './state-provider/state-controllers';

const app = angular.module('myApp', [
  stateRouter,
  stateCtrls
]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  configStateProvider($stateProvider);
}])
.run( function($rootScope, $state) {

});


angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
