(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope){
    $scope.tasks = [];

    $scope.addTask = function(task) {
      var newTask = { name: task, completed: false };
      $scope.tasks.push(newTask);
      $scope.newTask = "";
    };

    $scope.toggleTask = function(task) {
      task.completed = !task.completed;
    };

    $scope.numberOfIncompleteTasks = function(task) {
      var count = 0;
      for(var i = 0; i < $scope.tasks.length; i++) {
        if(!$scope.tasks[i].completed) {
          count += 1;
        }
      }
      return count;
    };

    $scope.removeCompletedTasks = function() {
      var completedTasks = [];

      for(var i = 0; i < $scope.tasks.length; i++) {
        if($scope.tasks[i].completed) {
          completedTasks.push($scope.tasks[i]);
        }
      }
        
      for(var i = 0; i < completedTasks.length; i++) {
        $scope.tasks.splice($scope.tasks.indexOf(completedTasks[i]), 1);
      }
    };

    window.scope = $scope;
  });

}());