'use strict';

/* Vendors */
import angular from 'angular' ;
import stateRouter from 'angular-ui-router';

/* Thank you http://purecss.io/layouts/side-menu/ for the response side menu */
import './purecss/side-menu.css';

/* STYLES */
import './styles/main.scss';

/* UI-Router State Provider Config */
import configStateProvider from './state-provider';

/* State Controllers */
import stateCtrls from './state-provider/state-controllers';

/* Directives */
import directives from './directives';

const app = angular.module('myApp', [
  stateRouter,
  stateCtrls,
  directives
]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  configStateProvider($stateProvider);
}])
.run( function($rootScope, $state) {
  $rootScope.root = {};
  $rootScope.root.nav = {};
  $rootScope.root.states = ['','home','about-me','x',''];
  $rootScope.root.headerNames = ['', 'Home', 'About Me', 'X',''];
  $rootScope.root.nav.previous = $rootScope.root.states[0];
  $rootScope.root.nav.current = $rootScope.root.states[1];
  $rootScope.root.nav.next = $rootScope.root.states[2];
  $rootScope.root.activeLink= '';
  $rootScope.root.goForward = function() {
    var ii = $rootScope.root.headerNames.indexOf($rootScope.root.nav.next);
    var nextState =  $rootScope.root.states[ii];
    $state.go(nextState);
  }
  $rootScope.root.goBack = function() {
    var ii = $rootScope.root.headerNames.indexOf($rootScope.root.nav.previous);
    var nextState =  $rootScope.root.states[ii];
    $state.go(nextState);
  }
  $rootScope.$on('$stateChangeStart', function (event,toState) {
    $rootScope.root.activeLink = toState.name;
    $rootScope.root.ii = $rootScope.root.states.indexOf(toState.name);
    $rootScope.root.nav.previous = $rootScope.root.headerNames[$rootScope.root.ii-1];
    $rootScope.root.nav.current = $rootScope.root.headerNames[$rootScope.root.ii];
    $rootScope.root.nav.next = $rootScope.root.headerNames[$rootScope.root.ii+1];
    if(!$rootScope.root.nav.previous) {
      $rootScope.root.noPrevious = true;
    } else {
      $rootScope.root.noPrevious=false;
    }
    if(!$rootScope.root.nav.next) {
      $rootScope.root.noNext = true;
    } else {
      $rootScope.root.noNext = false;
    }
  });
});


angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
