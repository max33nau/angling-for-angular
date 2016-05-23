import homeState from './home-state/home';
import aboutMeState from './about-me-state/about-me';
import whatIsAngularState from './what-is-angular-state/what-is-angular';
import whyAngularState from './why-angular-state/why-angular';
import gettingStartedState from './getting-started-state/getting-started';



export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('about-me', aboutMeState)
    .state('what-is-angular', whatIsAngularState)
    .state('why-angular', whyAngularState)
    .state('getting-started', gettingStartedState);
}
