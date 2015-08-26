app.controller('HomeController', function ($scope, $http, $location) {
  $scope.searchMovie = function () {
    $http.get('http://www.omdbapi.com/?s='+$scope.movieTitle)
    .then(function (movieData) {
      $scope.movies = movieData.data.Search;
      $location.path('/'+$scope.movieTitle);
      $scope.movieTitle='';
    });
  };
});



app.controller('MovieController', function ($scope, $http, $routeParams) {
  console.log($routeParams);
  $http.get('http://www.omdbapi.com/?i='+$routeParams.id)
  .then(function (movieData) {
    console.log(movieData.data);
    $scope.movieData = movieData.data;
  });
});
