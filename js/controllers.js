app.controller('HomeController', function ($scope, $http) {
  $scope.searchMovie = function () {
    console.log('searching');
    $http.get('http://www.omdbapi.com/?s='+$scope.movieTitle)
    .then(function (movieData) {
      $scope.movies = movieData.data.Search;
      $scope.movieTitle='';
    });
  };
});
