import homeState from './home-state/home';
import aboutMeState from './about-me-state/about-me';
import whatIsAngularState from './what-is-angular-state/what-is-angular';
import whyAngularState from './why-angular-state/why-angular';
import gettingStartedState from './getting-started-state/getting-started';
import initialAppState from './initial-app-state/initial-app';
import directiveState from './directives-state/directives';
import customDirectiveState from './custom-directive-state/custom-directive';
import soMuchAngularState from './so-much-angular-state/so-much-angular';
import theFutureState from './the-future-state/the-future';
import referencesState from './references-state/references';



export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('about-me', aboutMeState)
    .state('what-is-angular', whatIsAngularState)
    .state('why-angular', whyAngularState)
    .state('getting-started', gettingStartedState)
    .state('creating-our-first-app', initialAppState)
    .state('directives', directiveState)
    .state('custom-directive', customDirectiveState)
    .state('so-much-angular', soMuchAngularState)
    .state('the-future', theFutureState)
    .state('references', referencesState);
}
