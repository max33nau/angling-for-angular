import homeState from './home-state/home';
import aboutMeState from './about-me-state/about-me';



export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('about-me', aboutMeState);
}
