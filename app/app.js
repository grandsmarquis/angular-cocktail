'use strict';

// Declare app level module which depends on views, and components
var App = angular.module('myApp', [
  'myApp',
  'ngRoute',
  'ngMaterial',
  'myApp.Drinks',
  'myApp.Ingredients'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/drinks'});

}]);

App.run(function($rootScope, $http)
{
  $http.get('data.json')
        .success(function (data) {
            $rootScope.datas = data;
            console.log($rootScope.datas);
        })
        .error(function (data, status, headers, config) {
            //  Do some error handling here
        });
});
