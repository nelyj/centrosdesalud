//= require angular
//= require angular-animate
//= require angular-resource
//= require angular-route
//= require_tree ./angular/models
//= require_tree ./angular/controllers

app = angular.module('Centros', ['ngRoute','ngAnimate','ngResource']);

app.config(['$locationProvider', '$httpProvider', '$routeProvider',
function($locationProvider, $httpProvider, $routeProvider){

	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');

	$routeProvider
	.when('/',{
		templateUrl: '../assets/index.html'
		})
	.otherwise({

		redirectTo: '/'
	});

	$locationProvider.html5Mode(true);

}]);