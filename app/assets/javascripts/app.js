//= require angular
//= require angular-animate
//= require angular-resource
//= require angular-route
//= require angular-rails-templates
//= require angular-touch

//= require_tree ./angular/models
//= require_tree ./angular/controllers

app = angular.module('Centros', ['ngRoute','ngAnimate','ngResource', 'google-maps', 'ngTouch', 'appCtrl']);

app.config(['$locationProvider', '$httpProvider', '$routeProvider',
function($locationProvider, $httpProvider, $routeProvider){

	$routeProvider
	.when('/',{
		templateUrl: '../assets/index.html',
		controller: 'centroCtrl'
	})
	.otherwise({
		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

}]);