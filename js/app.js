var app = angular.module("movies", ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/:movie', {
      templateUrl: 'partials/searchResults.html',
      controller: 'HomeController'
    })
    .when('/:id/show', {
      templateUrl:'partials/movie.html',
      controller: 'MovieController'
    });

    $locationProvider.html5Mode(true);
});
