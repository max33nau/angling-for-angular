export default function( ngModule ) {
	ngModule.controller('bindingExampleCtrl', function($scope){
    $scope.binding = {};
    $scope.binding.name = 'Type here to see my 2-way data binding';
  })
  .controller('goodExampleParentCtrl', function($scope){
    $scope.parent = {};
    $scope.parent.name = 'My child controller does not inherit me anymore';
  })
  .controller('goodExampleChildCtrl', function($scope){
    $scope.child = {};
    $scope.child.name = 'I am my own scope';
  })
	.controller('mainCtrl', function($scope){
	  $scope.nba = {};
	  $scope.nba.players = [
	    {
	      name: 'Lebron James',
	      height: {feet: 6,inches: 8},
	      born: 'December 30, 1984',
	      currentTeam: 'Cleveland Cavaliers',
	      championships: 2,
	      nbaFinalsMVP: 2,
	      nbaAllstarTeam: 12,
	      mvp: 4,
	      url: 'https://en.wikipedia.org/wiki/LeBron_James'
	    },
	    {
	      name: 'Michale Jordan',
	      height: {feet: 6,inches: 6  },
	      born: 'February 17, 1963',
	      currentTeam: 'Retired',
	      championships: 6,
	      nbaFinalsMVP: 6,
	      nbaAllstarTeam: 14,
	      mvp: 5,
	      url: 'https://en.wikipedia.org/wiki/Michael_Jordan'
	    },
	    {
	      name: 'Stephen Curry',
	      height: {feet: 6,inches: 3 },
	      born: '	March 14, 1988',
	      currentTeam: 'Golden State Warriors',
	      championships: 1,
	      nbaFinalsMVP: 0,
	      nbaAllstarTeam: 3,
	      mvp: 2,
	      url: 'https://en.wikipedia.org/wiki/Stephen_Curry'
	    },
	    {
	      name: 'Damian Lillard',
	      height: {feet: 6,inches: 3},
	      born: 'July 15, 1990 ',
	      currentTeam: 'Portland Trail Blazers',
	      championships: 0,
	      nbaFinalsMVP: 0,
	      nbaAllstarTeam: 2,
	      mvp: 0,
	      url: 'https://en.wikipedia.org/wiki/Damian_Lillard'
	    }];
	});
}
