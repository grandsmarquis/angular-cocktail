'use strict';

angular.module('myApp.Ingredients', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/ingredients', {
    templateUrl: 'ingredients/all.html',
    controller: 'IngredientsCtrl'
  });
}])

.filter('selectedIngredients', function() {
    return function(tasks, tags) {
        return tasks.filter(function(task) {
            var found = 0;
            for (var i in task.ing) {
                if (tags.indexOf(task.ing[i]) != -1) {
                  found++;
                  if (found >= tags.length)
                    return true;
                }
            }
            return false;

        });
    }
  })

.controller('IngredientsCtrl', function($scope, $rootScope) {

  $scope.selected = [];

  $scope.select = function(selection, name)
   {
     if ($scope.selected.indexOf(selection) != -1)
     {
       $scope.selected.splice($scope.selected.indexOf(selection), 1);
     }
     else
     {
       $scope.selected.push(selection);
     }
   };

   $scope.isSelected = function(selection)
   {
     return ($scope.selected.indexOf(selection) != -1);
   }

});
