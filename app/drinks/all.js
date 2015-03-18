'use strict';

angular.module('myApp.Drinks', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/drinks', {
    templateUrl: 'drinks/all.html',
    controller: 'DrinksCtrl'
  });
  $routeProvider.when('/search', {
    templateUrl: 'drinks/search.html',
    controller: 'DrinksCtrl'
  });
  $routeProvider.when('/drink/:id', {
    templateUrl: 'drinks/drink.html',
    controller: 'DrinksCtrl'
  });
}])

.controller('DrinksCtrl', function($scope, $rootScope, $routeParams, $location) {

  $scope.goToCocktail = function(id) {
    $location.path('/drink/' + id)
  }

  $scope.id = parseInt($routeParams.id);
  $scope.selected =  $rootScope.datas.cocktails[$routeParams.id];

  $scope.next = function() {
    $scope.id = $scope.id + 1;
    if ($scope.id == $rootScope.datas.cocktails.length)
    {
      $scope.id = 0;
    }
    console.log($scope.id);
    $location.path('/drink/' + $scope.id)
  };

  $scope.previous = function() {
    $scope.id = $scope.id - 1;
    if ($scope.id < 0)
    {
      $scope.id = $rootScope.datas.cocktails.length - 1;
    }
    console.log($scope.id);
    $location.path('/drink/' + $scope.id)
  };

});
