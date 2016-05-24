import homeState from './home-state/home';
import aboutMeState from './about-me-state/about-me';
import whatIsAngularState from './what-is-angular-state/what-is-angular';
import whyAngularState from './why-angular-state/why-angular';
import gettingStartedState from './getting-started-state/getting-started';
import initialAppState from './initial-app-state/initial-app';
import directiveState from './directives-state/directives';
import customDirectiveState from './custom-directive-state/custom-directive';



export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('about-me', aboutMeState)
    .state('what-is-angular', whatIsAngularState)
    .state('why-angular', whyAngularState)
    .state('getting-started', gettingStartedState)
    .state('creating-our-first-app', initialAppState)
    .state('directives', directiveState)
    .state('custom-directive', customDirectiveState);
}
