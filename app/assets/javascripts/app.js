//= require angular/angular
//= require angular-route/angular-route
//= require angular-rails-templates
//= require lodash/dist/lodash
//= require angular-google-maps/dist/angular-google-maps

app = angular.module('Centros',['templates','ngRoute', 'google-maps', 'Controllers']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: "index.html",
			controller: 'homeCtrl'
		});
}]);