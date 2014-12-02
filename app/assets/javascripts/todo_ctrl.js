(function() {
  "use strict";

  angular.module("app").controller("todoCtrl", function($scope){
    $scope.tasks = [
      { name: "Take out trash",
        completed: false,
      },
      {
        name: "Feed the cat",
        completed: false
      }
    ];

    $scope.addTask = function(task) {
      $scope.tasks.push({ name: task, completed: false });
      $scope.newTask = "";
    };

    $scope.toggleComplete = function(task) {
      task.completed = !task.completed;
    };

    $scope.numberOfIncompleteTasks = function() {
      var count = 0;
      for(var i = 0; i < $scope.tasks.length; i++) {
        if(!$scope.tasks[i].completed) {
          count++;
        }
      }
      return count;
    }

    $scope.deleteCompletedTasks = function() {
      for(var i = 0; i < $scope.tasks.length; i++) {
        if($scope.tasks[i].completed) {
          $scope.tasks.splice(i, 1);
        }
      }
    };

    window.scope = $scope;

  });

}());