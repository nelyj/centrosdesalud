//= require angular/angular
//= require angular-route/angular-route
//= require angular-rails-templates

app = angular.module('Centros',['templates','ngRoute', 'Controllers']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: "index.html",
			controller: 'homeCtrl'
		});
}]);