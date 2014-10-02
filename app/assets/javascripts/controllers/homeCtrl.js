app = angular.module('Controllers', []);

app.controller('homeCtrl',['$scope','$routeParams',function($scope, $routeParams){
	$scope.hola = "Hola Mundo, Felipe";
}]);