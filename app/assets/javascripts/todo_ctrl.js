(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope){
    $scope.tasks = [];

    $scope.addTask = function(task) {
      var newTask = { name: task, completed: false };
      $scope.tasks.push(newTask);
      $scope.newTask = "";
    };

    window.scope = $scope;
  });

}());