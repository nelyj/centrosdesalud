//= require angular/angular
//= require angular-route/angular-route
//= require angular-rails-templates


//= require_tree ./angular/models
//= require_tree ./angular/controllers


app = angular.module('Centros', ['templates','ngRoute', 'appCtrl']);

app.config(['$locationProvider', '$httpProvider', '$routeProvider',
function($locationProvider, $httpProvider, $routeProvider){

	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

	$routeProvider
	.when('/',{
		templateUrl: '../assets/index.html',
		controller: 'homeCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

}]);